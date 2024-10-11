import Link from "next/link";

export default function Page() {
  const weeks = [2, 3, 4, 5];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-3xl font-bold mb-5">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <div className="text-lg">
          <ul>
            {weeks.map((week) => (
              <li key={week} className="hover:text-green-400 hover:underline">
                <Link href={`/week-${week}`}>Week {week}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
