export default function Item(props) {
  return (
    <li className="bg-red-200 p-2 m-4">
      <div>
        <h1 className="text-xl font-extrabold">{props.name}</h1>
        <p className="text-sm">
          Buy {props.quantity} in {props.category}
        </p>
      </div>
    </li>
  );
}
