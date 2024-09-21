import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-red-300 p-6">
      <h1 className="text-4xl font-extrabold">Shopping List</h1>
      <ItemList />
    </main>
  );
}
