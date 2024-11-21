"use client";

import Input from "@/app/components/input";
import { useFormState } from "react-dom";
import { smsLogIn } from "./action";
import Link from "next/link";

const initialState = {
    token: false,
    error: undefined,
};

export default function SMSLogin() {
    const [state, dispatch] = useFormState(smsLogIn, initialState);
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center px-10 w-[600px]">
                <div className="pt-20 pb-10">
                    <span className="text-6xl font-bold text-indigo-700 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.5)]">SMS Login</span>
                </div>
                <form
                    className="w-full px-20 flex flex-col gap-4"
                    action={dispatch}
                >
                    {state.token ? (
                        <Input
                            icon="password"
                            className="Input"
                            name="token"
                            type="number"
                            placeholder="token"
                            min={100000}
                            max={999999}
                            errors={state.error?.formErrors ?? []}
                            required
                        />
                    ) : (
                        <Input
                            icon="phone"
                            className="Input"
                            name="phone"
                            type="text"
                            placeholder="핸드폰 번호"
                            errors={state.error?.formErrors ?? []}
                            required
                        />
                    )}
                    <button className="formBtn">{state.token ? "Verify Token" : "Send Verification SMS"}</button>
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
                        href="/create-account"
                        className="w-full py-2 bg-emerald-300 text-center rounded-full block font-bold"
                    >
                        Create Account →
                    </Link>
                </div>
            </div>
        </div>
    );
}
