import Link from "next/link";
import getSession from "../lib/session";
import { redirect } from "next/navigation";
import db from "../lib/db";

export default async function Home() {
    const tweets = await db.tweet.findMany({
        select: {
            tweet: true,
            authorId: true,
            created_at: true,
        },
    });
    return (
        <div className="w-[600px] m-auto py-10 px-8 bg-gray-400 flex flex-col h-screen">
            <div className="w-full flex justify-between">
                <Link
                    className="bg-blue-400 px-4 py-1 rounded-full font-bold"
                    href="/profile"
                >
                    Profile
                </Link>
            </div>
            <div></div>
        </div>
    );
}
