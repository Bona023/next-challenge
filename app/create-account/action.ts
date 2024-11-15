"use server";
import { z } from "zod";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR, USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH } from "../lib/constants";
import db from "../lib/db";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import getSession from "../lib/session";

const checkPW = ({ password, password_confirm }: { password: string; password_confirm: string }) => password === password_confirm;

const formSchema = z
    .object({
        email: z.string().email(),
        username: z.string().min(USERNAME_MIN_LENGTH, `UserName은 ${USERNAME_MIN_LENGTH}글자 이상 적어주세요`).max(USERNAME_MAX_LENGTH, `UserName은 ${USERNAME_MAX_LENGTH}글자 이하로 적어주세요.`),
        password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
        password_confirm: z.string(),
    })
    .superRefine(async ({ username }, ctx) => {
        const user = await db.user.findUnique({
            where: {
                username,
            },
            select: {
                id: true,
            },
        });
        if (user) {
            ctx.addIssue({
                code: "custom",
                message: "이미 사용 중인 이름입니다.",
                path: ["username"],
                fatal: true,
            });
            return z.NEVER;
        }
    })
    .superRefine(async ({ email }, ctx) => {
        const user = await db.user.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
            },
        });
        if (user) {
            ctx.addIssue({
                code: "custom",
                message: "이미 가입된 이메일 입니다.",
                path: ["email"],
                fatal: true,
            });
            return z.NEVER;
        }
    })
    .refine(checkPW, {
        message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
        path: ["password_confirm"],
    });

export default async function CreateAccountAction(prevState: any, formDate: FormData) {
    const data = {
        email: formDate.get("email"),
        username: formDate.get("username"),
        password: formDate.get("password"),
        password_confirm: formDate.get("password_confirm"),
    };
    const result = await formSchema.spa(data);
    if (!result.success) {
        return result.error.flatten();
    } else {
        const hashedPW = await bcrypt.hash(result.data.password, 12);
        const user = await db.user.create({
            data: {
                username: result.data.username,
                email: result.data.email,
                password: hashedPW,
            },
            select: {
                id: true,
            },
        });
        const session = await getSession();
        session.id = user.id;
        await session.save();
        redirect("/profile");
    }
}
