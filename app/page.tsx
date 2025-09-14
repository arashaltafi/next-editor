import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-8 items-center justify-center">
      <Link
        href="/sample1"
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl text-2xl font-bold hover:underline hover:scale-105 transition-all"
      >
        Sample 1
      </Link>

      <span className="w-full h-px rounded-full bg-gray-200" />

      <Link
        href="/sample2"
        className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl text-2xl font-bold hover:underline hover:scale-105 transition-all"
      >
        Sample 2
      </Link>
    </div>
  );
}