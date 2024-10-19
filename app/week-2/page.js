import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="bg-gray-800 flex min-h-screen flex-col items-center p-14">
      <p className="text-white text-3xl font-bold mb-5">Shopping List</p>
      <StudentInfo />
    </main>
  );
}
