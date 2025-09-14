import Link from "next/link";

export default function Sample1() {
    return (
        <div className="w-full min-h-screen flex flex-col gap-8 items-center justify-center">
            <Link
                href="/sample1/get"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-2xl font-bold hover:underline hover:scale-105 transition-all"
            >
                Sample 1 Get
            </Link>

            <span className="w-full h-px rounded-full bg-gray-200" />

            <Link
                href="/sample1/post"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-2xl font-bold hover:underline hover:scale-105 transition-all"
            >
                Sample 1 Post
            </Link>
        </div>
    );
}
