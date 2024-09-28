import Link from "next/link";

export default function StudentInfo() {
  return (
    <main className="w-48 h-16 p-2 flex flex-col justify-center">
      <h1 className="text-white text-lg font-bold">Name: Charlie</h1>
      <p1 className="text-rose-300 hover:text-orange-500 hover:underline">
        <Link href="https://github.com/wNv-paCe/cprg306-assignments">
          GitHub Link
        </Link>
      </p1>
    </main>
  );
}
