import Address from "@/utils/Address";
import Link from "next/link";

export default function Sample2() {
    return (
        <div className="w-full min-h-screen flex flex-col gap-8 items-center justify-center">
            <Link
                href={Address.Routes.sample2Get}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl text-2xl font-bold hover:underline hover:scale-105 transition-all"
            >
                Sample 2 Get
            </Link>

            <span className="w-full h-px rounded-full bg-gray-200" />

            <Link
                href={Address.Routes.sample2Post}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-2xl font-bold hover:underline hover:scale-105 transition-all"
            >
                Sample 2 Post
            </Link>
        </div>
    );
}
