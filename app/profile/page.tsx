import Link from "next/link";
import getSession from "../lib/session";
import db from "../lib/db";
import { notFound, redirect } from "next/navigation";

async function getUser() {
    const session = await getSession();
    if (session.id) {
        const user = await db.user.findUnique({
            where: {
                id: session.id,
            },
        });
        if (user) {
            return user;
        }
    }
    notFound();
}

export default async function Profile() {
    const user = await getUser();
    const logOut = async () => {
        "use server";
        const session = await getSession();
        await session.destroy();
        redirect("/log-in");
    };
    return (
        <div className="p-10 flex flex-col gap-5">
            <h1>Hello! {user.username}!!</h1>
            <Link
                className="text-red-600 font-bold"
                href="/"
            >
                go home
            </Link>
            <form
                className="w-[500px]"
                action={logOut}
            >
                <button className="formBtn">Log Out</button>
            </form>
        </div>
    );
}
