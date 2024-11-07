import FormInput from "../components/component";
import handleForm from "../components/function";

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
                    action={handleForm}
                >
                    <FormInput
                        icon="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        errors={[]}
                    />
                    <FormInput
                        icon="user"
                        name="username"
                        type="text"
                        placeholder="Username"
                        required
                        errors={[]}
                    />
                    <FormInput
                        icon="password"
                        name="password"
                        type="text"
                        placeholder="Password"
                        required
                        errors={[]}
                    />
                    <button className="bg-gray-200 text-center py-2 w-full rounded-full font-bold focus:scale-90 focus:bg-gray-500">Log in</button>
                </form>
            </div>
        </div>
    );
}
