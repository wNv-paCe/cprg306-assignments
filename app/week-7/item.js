export default function Item(props) {
  return (
    <li className="bg-red-200 rounded-lg p-3 m-4">
      <div>
        <h1 className="text-xl font-extrabold text-black">{props.name}</h1>
        <p className="text-sm text-black">
          Buy {props.quantity} in {props.category}
        </p>
      </div>
    </li>
  );
}
