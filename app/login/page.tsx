"use client";
import { useFormState, useFormStatus } from "react-dom";
import FormInput from "../components/component";
import LoginAction from "./action";

export default function Login() {
    const [state, dispatch] = useFormState(LoginAction, null);
    const { pending } = useFormStatus();
    return (
        <div className="flex flex-col items-center">
            <div className="h-4 w-full bg-gradient-to-r from-blue-600 via-yellow-200 to-blue-600"></div>
            <div className="flex flex-col items-center px-10 w-[600px]">
                <div className="pt-20 pb-10">
                    <span className="text-6xl">🔥</span>
                </div>
                <form
                    className="w-full px-20 flex flex-col gap-4"
                    action={dispatch}
                >
                    <FormInput
                        className="Input"
                        icon="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        errors={state?.fieldErrors.email ?? []}
                    />
                    <FormInput
                        className="Input"
                        icon="user"
                        name="username"
                        type="text"
                        placeholder="Username"
                        required
                        errors={state?.fieldErrors.username ?? []}
                    />
                    <FormInput
                        className="Input"
                        icon="password"
                        name="password"
                        type="text"
                        placeholder="Password"
                        required
                        errors={state?.fieldErrors.password ?? []}
                    />
                    <button
                        disabled={pending}
                        className="formBtn"
                    >
                        {pending ? "Loading..." : "Log in"}
                    </button>
                    {/*state?.success ? (
                        <div className="flex w-full bg-green-500 rounded-xl py-3 px-4 gap-3 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                                />
                            </svg>
                            <span className="font-bold text-base">Welcome back!</span>
                        </div>
                    ) : null*/}
                </form>
            </div>
        </div>
    );
}
