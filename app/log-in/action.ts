"use server";
import { z } from "zod";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "../lib/constants";
import db from "../lib/db";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import getSession from "../lib/session";

const checkEmailExists = async (email: string) => {
    const user = await db.user.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
        },
    });
    return Boolean(user);
};

const formSchema = z.object({
    email: z.string().email().toLowerCase().refine(checkEmailExists, "가입되지 않은 이메일 입니다."),
    password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export default async function LoginAction(prevState: any, formDate: FormData) {
    const data = {
        email: formDate.get("email"),
        password: formDate.get("password"),
    };
    const result = await formSchema.spa(data);
    if (!result.success) {
        return result.error.flatten();
    } else {
        const user = await db.user.findUnique({
            where: {
                email: result.data.email,
            },
            select: {
                id: true,
                password: true,
            },
        });
        const ok = await bcrypt.compare(result.data.password, user!.password ?? "xxxx");
        if (ok) {
            const session = await getSession();
            session.id = user!.id;
            redirect("/profile");
        } else {
            return {
                fieldErrors: {
                    password: ["잘못된 비밀번호 입니다."],
                    email: [],
                },
            };
        }
    }
}
