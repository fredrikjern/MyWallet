
const Card = ({ data, index, isActive, onClick,handleDelete }) => {
  if (!data) {
    return null;
  }

  return (
    <li
      onClick={onClick}
      className={`${
        isActive
          ? "bg-blue-500  p-4 rounded-lg shadow-md border border-red-300 w-72 relative scale-105 z-40 cursor-pointer "
          : "bg-blue-500  p-4 rounded-lg shadow-md border border-gray-300 w-72 relative cursor-pointer z-20"
      }`}
    >
      <div className="">
        <div className="absolute top-4 right-4 text-white text-xl font-bold">
          {data.cardType}
        </div>
        <div className="mb-2">
          <div className="font-semibold text-white text-lg mt-8">
            {data.cardNumber}
          </div>
        </div>
        <div className="mb-2">
          <div className="font-semibold text-white text-sm">Cardholder</div>
          <div className="font-semibold text-white text-lg">{data.name}</div>
        </div>
        <div className="flex justify-between">
          <div className="mb-2">
            <div className="font-semibold text-white text-sm">Expires</div>
            <div className="font-semibold text-white text-lg">
              {data.expireDate}
            </div>
          </div>
          <div className="mb-1">
            <div className="font-semibold text-white text-sm px-1">CVV</div>
            <div className="font-semibold text-white text-lg bg-white hover:bg-slate-600 rounded-full px-1">
              {data.cvv}
            </div>
          </div>
        </div>
      </div>
      {isActive && (
        <div className="flex justify-center">
          <button onClick={handleDelete} className="bg-blue-300 p-2 px-4 rounded-full border-transparent hover:border-red-400 hover:bg-red-200">
            Delete
          </button>
        </div>
      )}
    </li>
  );
};

export default Card;
