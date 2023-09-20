import { useEffect, useState } from "react";

const Card = ({ data, isActive, onClick, handleDelete }) => {
  if (!data) {
    return null;
  }
  const [showDelete, setShowDelete] = useState(false);
  useEffect(() => {
    return setShowDelete(false)
  },[])
  console.log(showDelete);
  function toggleDelete(e) {
    e.preventDefault();

    setShowDelete((prevShowDelete) => !prevShowDelete);
  }
  return (
    <li className="stacked-div">
      <div
        className={`${
          isActive
            ? "bg-blue-500  p-4 rounded-lg shadow-md border border-green-700 w-72 relative "
            : "bg-blue-500  p-4 rounded-lg shadow-md border border-gray-300 w-72 relative cursor-pointer z-20"
        }`}
      >
        {!isActive && (
          <div className="absolute top-2 left-4 flex justify-center rounded transition ease-in-out delay-50  hover:bg-red-200 hover:z-50 duration-200 ">
            <button onClick={toggleDelete} className="bg-transparent p-1">
              X
            </button>
            {showDelete && (
              <button
                onClick={handleDelete}
                className="bg-blue-300 p-1 px-4 rounded-full border-transparent hover:border-red-400 hover:bg-red-200"
              >
                Delete
              </button>
            )}
          </div>
        )}
        <div
          onClick={onClick}
          className="absolute top-4 right-4 text-white text-xl font-bold"
        >
          {data.cardType}
        </div>
        <div onClick={onClick} className="mb-2">
          <div className="font-semibold text-white text-lg mt-8">
            {data.cardNumber}
          </div>
        </div>
        <div onClick={onClick} className="mb-2">
          <div className="font-semibold text-white text-sm">Cardholder</div>
          <div className="font-semibold text-white text-lg">{data.name}</div>
        </div>
        <div onClick={onClick} className="flex justify-between">
          <div className="mb-2">
            <div className="font-semibold text-white text-sm">Expires</div>
            <div className="font-semibold text-white text-lg">
              {data.expireDate}
            </div>
          </div>
          <div onClick={onClick} className="mb-1">
            <div className="font-semibold text-white text-sm px-1">CVV</div>
            <div className="font-semibold text-white text-lg bg-white hover:bg-slate-600 rounded-full px-1">
              {data.cvv}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
