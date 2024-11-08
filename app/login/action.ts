"use server";
import { z } from "zod";

const pwRegex = new RegExp(/^(?=.*\d).+$/);
const formSchema = z.object({
    email: z
        .string()
        .email()
        .refine((email) => email.includes("@zod.com"), "zod.com 이메일만 사용할 수 있습니다."),
    username: z.string().min(5, "UserName은 최소 5글자 이상입니다."),
    password: z.string().min(10, "비밀번호는 최소 10글자 이상 입니다.").regex(pwRegex, "비밀번호에는 최소 1개 이상의 숫자가 포함되어야 합니다."),
});

export default async function LoginAction(prevState: any, formDate: FormData) {
    const data = {
        email: formDate.get("email"),
        username: formDate.get("username"),
        password: formDate.get("password"),
    };
    const result = formSchema.safeParse(data);
    console.log("state : ", prevState);
    if (!result.success) {
        return result.error.flatten();
    }
}
