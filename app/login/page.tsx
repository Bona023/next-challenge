export default function Login() {
    return (
        <div className="flex flex-col items-center">
            <div className="h-4 w-full bg-gradient-to-r from-blue-600 via-yellow-200 to-blue-600"></div>
            <div className="flex flex-col items-center px-10 w-[600px]">
                <div className="pt-20 pb-10">
                    <span className="text-6xl">🔥</span>
                </div>
                <form
                    className="w-full px-20 flex flex-col gap-4"
                    action=""
                >
                    <div className="Input">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="size-5 fill-gray-600"
                        >
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        <input
                            className="focus:outline-none"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="Input">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="size-5 fill-gray-600"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <input
                            className="focus:outline-none"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="Input">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="size-5 fill-gray-600"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <input
                            className="focus:outline-none"
                            type="text"
                            placeholder="Password"
                        />
                    </div>
                    <button className="bg-gray-200 text-center py-2 w-full rounded-full font-bold focus:scale-90 focus:bg-gray-500">Log in</button>
                </form>
            </div>
        </div>
    );
}
