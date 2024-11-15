"use client";
import { useFormState, useFormStatus } from "react-dom";
import Input from "../components/input";
import LoginAction from "./action";
import { PASSWORD_MIN_LENGTH } from "../lib/constants";
import Link from "next/link";

export default function Login() {
    const [state, dispatch] = useFormState(LoginAction, null);
    const { pending } = useFormStatus();
    return (
        <div className="flex flex-col items-center">
            <div className="h-4 w-full bg-gradient-to-r from-indigo-600 via-emerald-200 to-indigo-600"></div>
            <div className="flex flex-col items-center px-10 w-[600px]">
                <div className="pt-20 pb-10">
                    <span className="text-6xl font-bold text-indigo-700 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.5)]">Log In</span>
                </div>
                <form
                    className="w-full px-20 flex flex-col gap-4"
                    action={dispatch}
                >
                    <Input
                        className={state?.fieldErrors.email ? "InputError" : "Input"}
                        icon="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        errors={state?.fieldErrors.email ?? []}
                    />
                    <Input
                        className={state?.fieldErrors.password ? "InputError" : "Input"}
                        icon="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        minLength={PASSWORD_MIN_LENGTH}
                        required
                        errors={state?.fieldErrors.password ?? []}
                    />
                    <button
                        disabled={pending}
                        className="formBtn"
                    >
                        {pending ? "Loading..." : "Log in"}
                    </button>
                </form>
                <div className="h-[2px] bg-gray-400 w-[450px] my-6"></div>
                <div className="w-full px-20">
                    <Link
                        href="/create-account"
                        className="w-full py-2 bg-indigo-300 text-center rounded-full block font-bold"
                    >
                        Create Account →
                    </Link>
                </div>
            </div>
        </div>
    );
}
