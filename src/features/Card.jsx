import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { chipSVG } from "../routes/AddCard";

const Card = ({ data, isActive, onClick, handleDelete, index }) => {
  if (!data) {
    return null;
  }
  const [showDelete, setShowDelete] = useState(false);
  useEffect(() => {
    setShowDelete(false);
  }, [data]);
  useEffect(() => {
    console.log("mount");
    return console.log("unmount");
  }, []);

  function toggleDelete(e) {
    e.preventDefault();

    setShowDelete((prevShowDelete) => !prevShowDelete);
  }
  return (
    <li className="stacked-div flex flex-grow ">
      <div
        onClick={onClick}
        className={`${
          isActive
            ? "p-4 rounded-lg shadow-md border border-green-700 flex-grow relative "
            : "p-4 rounded-lg shadow-md border border-gray-300 flex-grow relative cursor-pointer z-20"
        } 
        ${data.cardType === "Visa" ? "bg-green-800" : ""} 
        ${data.cardType === "MasterCard" ? "bg-yellow-800" : ""}
        ${data.cardType === "American Express" ? "bg-slate-800" : ""}
        `}
      >
        <div className="absolute top-4 right-4 text-white text-xl font-bold">
          {data.cardType}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: chipSVG }}
          className=" w-8 h-8 top-8 left-4"
        />
        <div className="">
          <div className="font-semibold text-white text-lg mt-8">
            {data.cardNumber}
          </div>
        </div>

        <div className="flex justify-between">
          <div className="">
            <div className="font-semibold text-white text-sm">Expires</div>
            <div className="font-semibold text-white text-lg">
              {data.expireDate}
            </div>
          </div>
          <div className="">
            <div className="font-semibold text-white text-sm px-1">CVV</div>
            <div className="font-semibold text-white text-lg bg-white hover:bg-slate-600 rounded-full px-1">
              {data.cvv}
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-white text-sm">Cardholder</div>
          <div className="font-semibold text-white text-lg">
            {data.name.toUpperCase()}
          </div>
        </div>
      </div>
      {console.log(isActive)}
      {!isActive && (
        <div className=" absolute z-50  border-2  flex -translate-x-8 justify-center rounded transition ease-in-out delay-50  hover:bg-red-200 hover:z-50 duration-200 ">
          <button onClick={toggleDelete} className=" rounded-md px-1">
            X {console.log("inne")}
          </button>
          {showDelete && (
            <button
              onClick={() => {
                handleDelete(index);
              }}
              className="bg-blue-300 p-1 px-4 rounded-full border-transparent hover:border-red-400 hover:bg-red-200"
            >
              Delete
            </button>
          )}
        </div>
      )}
    </li>
  );
};

export default Card;
