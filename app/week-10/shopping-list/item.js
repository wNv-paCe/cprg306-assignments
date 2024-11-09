export default function Item(props) {
  const handleUpdate = () => {
    const updatedData = {
      name: props.name,
      quantity: props.quantity + 1,
      category: props.category,
    };
    props.onUpdate(updatedData);
  };

  const handleDelete = () => {
    props.onDelete();
  };

  return (
    <li
      onClick={props.onSelect}
      className="bg-red-200 rounded-lg p-3 m-4 w-5/6 cursor-pointer hover:bg-red-400"
    >
      {/* Flex container for aligning name and buttons */}
      <div className="flex justify-between items-center">
        {/* Item name */}
        <div>
          <h1 className="text-xl font-extrabold text-black">{props.name}</h1>
          <p className="text-sm text-black">
            Buy {props.quantity} in {props.category}
          </p>
        </div>

        {/* Update and Delete Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleUpdate();
            }}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Update
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
