"use client";
import { useFormState, useFormStatus } from "react-dom";
import CreateAccountAction from "./action";
import Input from "../../components/input";
import { PASSWORD_MIN_LENGTH, USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH } from "../../lib/constants";
import Link from "next/link";

export default function CreateAccount() {
    const [state, dispatch] = useFormState(CreateAccountAction, null);
    const { pending } = useFormStatus();
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center px-10 w-[600px]">
                <div className="pt-20 pb-10">
                    <span className="text-6xl font-bold text-indigo-700 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.5)]">Join</span>
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
                        className={state?.fieldErrors.username ? "InputError" : "Input"}
                        icon="user"
                        name="username"
                        type="text"
                        placeholder="Username"
                        minLength={USERNAME_MIN_LENGTH}
                        maxLength={USERNAME_MAX_LENGTH}
                        required
                        errors={state?.fieldErrors.username ?? []}
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
                    <Input
                        className={state?.fieldErrors.password_confirm ? "InputError" : "Input"}
                        icon="password"
                        name="password_confirm"
                        type="password"
                        placeholder="Confirm Password"
                        minLength={PASSWORD_MIN_LENGTH}
                        required
                        errors={state?.fieldErrors.password ?? []}
                    />
                    <button
                        disabled={pending}
                        className="formBtn"
                    >
                        {pending ? "Loading..." : "Create Account"}
                    </button>
                </form>
                <div className="h-[2px] bg-gray-400 w-[450px] my-6"></div>
                <div className="w-full px-20 flex flex-col gap-3">
                    <Link
                        href="/log-in"
                        className="w-full py-2 bg-indigo-300 text-center rounded-full block font-bold"
                    >
                        Email Login →
                    </Link>
                    <Link
                        href="/sms"
                        className="w-full py-2 bg-indigo-300 text-center rounded-full block font-bold"
                    >
                        Phone Login →
                    </Link>
                </div>
            </div>
        </div>
    );
}
