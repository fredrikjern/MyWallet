import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../features/cardSlice";
import { useNavigate } from "react-router-dom";

export const chipSVG = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>

`;

const AddCard = () => {
  const navigate = useNavigate();

  const fullName = useSelector((state) => state.name);
  const words = fullName.split(" ");
  let initialTitle = "";
  let initialFirstName = "";
  let initialLastName = "";

  if (words.length === 3) {
    [initialTitle, initialFirstName, initialLastName] = words;
  } else {
    console.log("Invalid input format " + words);
  }

  const dispatch = useDispatch();
  const [cardType, setCardType] = useState("Visa");
  const [cardNumber, setCardNumber] = useState("**** **** **** ****");
  const [expireMonth, setExpireMonth] = useState("01");
  const [expireYear, setExpireYear] = useState("23");
  const [cvv, setCvv] = useState("***");

  function hasLetters(inputString) {
    for (let i = 0; i < inputString.length; i++) {
      if (/[a-zA-Z]/.test(inputString[i])) {
        return true;
      }
    }
    return false;
  }
  const handleCardTypeChange = (event) => {
    setCardType(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    const inputCardNumber = event.target.value;
    if (inputCardNumber.length === 0) {
      setCardNumber("");
    }
    if (inputCardNumber.length > 19) {
      console.log("Längre än 19 tecken");
      return;
    }
    if (hasLetters(inputCardNumber)) {
      console.log("Har bokstäver i sig ", inputCardNumber);
      return;
    }

    if (inputCardNumber.length > 0) {
      console.log(" större än 0");
      const formattedCardNumber = inputCardNumber
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        .join(" ");
      setCardNumber(formattedCardNumber);
    }
  };

  const handleExpireMonthChange = (event) => {
    setExpireMonth(event.target.value);
  };
  const handleExpireYearChange = (event) => {
    setExpireYear(event.target.value);
  };

  const handleCvvChange = (event) => {
    const inputCardNumber = event.target.value;
    if (inputCardNumber.length === 0) {
      setCardNumber("");
    }
    if (inputCardNumber.length > 3) {
      console.log("Längre än 3 tecken");
      return;
    }
    if (hasLetters(inputCardNumber)) {
      console.log("Har bokstäver i sig ", inputCardNumber);
      return;
    }
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addCard({
        cardType: cardType,
        cvv: cvv,
        cardNumber: cardNumber,
        active: false,
        expireMonth: expireMonth,
        expireYear: expireYear,
        name: fullName,
      })
    );

    navigate("/");
  };

  return (
    <>
      <header className="flex justify-center p-4">
        <h1 className="text-2xl font-bold">Add a new Card</h1>
      </header>
      <main className="flex flex-grow">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-grow items-center max-w-xl "
        >
          <div
            className={`bg-white p-4 rounded-lg shadow-md mb-4 border-2 border-slate-500 `}
          >
            <div className=" flex-grow shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg ">
              <div
                className={`p-2 rounded-lg flex flex-col border border-slate-800 mb-6
        ${cardType === "Visa" ? "bg-green-800" : ""} 
        ${cardType === "MasterCard" ? "bg-yellow-800" : ""}
        ${cardType === "American Express" ? "bg-slate-800" : ""}
        `}
              >
                <div className="flex justify-between px-2">
                  <div
                    dangerouslySetInnerHTML={{ __html: chipSVG }}
                    className=" w-8 h-8 top-8 left-4"
                  />
                  <div className=" text-white text-3xl font-bold">
                    {cardType}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-white text-lg mt-8">
                    {cardNumber}
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="">
                    <div className="font-semibold text-white text-sm">
                      Valid through:
                    </div>
                    <div className="font-semibold text-white text-lg">
                      {expireMonth} / {expireYear}
                    </div>
                  </div>
                  <div className="">
                    <div className="font-semibold text-white text-sm px-1">
                      CVV
                    </div>
                    <div className="font-semibold text-white text-lg bg-white hover:bg-slate-600 rounded-full px-1">
                      {cvv}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    Cardholder
                  </div>
                  <div className="font-semibold text-white text-lg">
                    {initialTitle.toUpperCase()}{" "}
                    {initialFirstName.toUpperCase()}{" "}
                    {initialLastName.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="p-2 flex gap-8">
              <div className="mb-4 flex flex-col justify-between ">
                <label className=" font-bold">Card Type</label>
                <select
                  className="border border-gray-300 p-2 rounded-md"
                  value={cardType}
                  onChange={handleCardTypeChange}
                >
                  <option value="Visa">Visa</option>
                  <option value="MasterCard">MasterCard</option>
                  <option value="American Express">American Express</option>
                </select>
              </div>

              <div className="mb-4 flex flex-col justify-between">
                <label className="font-bold">Card Number</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  placeholder="Card Number"
                  value={cardNumber}
                  onClick={() => {
                    if (cardNumber.indexOf("*") !== -1) {
                      setCardNumber("");
                    }
                  }}
                  onChange={handleCardNumberChange}
                />
              </div>
            </div>

            <div className="flex  flex-col p-2">
              <h2 className="font-bold mb-2">Valid Through</h2>
              <div className="flex gap-4">
                <div className="mb-4 flex flex-col">
                  <label className="">Month</label>
                  <select
                    className="border border-gray-300 p-2 rounded-md"
                    value={expireMonth}
                    onChange={handleExpireMonthChange}
                  >
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>
                <div className=" flex justify-center">
                  <p className="align-center font-bold text-2xl m-auto">/</p>
                </div>
                <div className="mb-4 flex flex-col">
                  <label className="">Year</label>
                  <select
                    className="border border-gray-300 p-2 rounded-md"
                    value={expireYear}
                    onChange={handleExpireYearChange}
                  >
                    <option value="23">2023</option>
                    <option value="24">2024</option>
                    <option value="25">2025</option>
                    <option value="26">2026</option>
                    <option value="27">2027</option>
                    <option value="28">2028</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex px-2 gap-8">
              <div className="mb-4 flex flex-col">
                <label className="font-bold">CVV</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  placeholder="***"
                  value={cvv}
                  maxLength={3}
                  onChange={handleCvvChange}
                  onClick={() => {
                    if (cvv.indexOf("*") !== -1) {
                      setCvv("");
                    }
                  }}
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label className="font-bold">Title</label>
                <select
                  className="border border-gray-300 p-2 rounded-md"
                  value={initialTitle}
                  readOnly
                >
                  <option value={initialTitle}> {initialTitle}</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                </select>
              </div>
            </div>
            <div
              className="flex
            "
            >
              <div className="mb-4 flex flex-col gap-2 p-2 ">
                <label className="font-bold">First Name</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  value={initialFirstName}
                  readOnly
                />
              </div>

              <div className="mb-4 flex flex-col gap-2 p-2">
                <label className="font-bold">Last Name</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  value={initialLastName}
                  readOnly
                />
              </div>
            </div>
            {cardNumber.length === 19 &&
              cardNumber !== "**** **** **** ****" &&
              cvv.length === 3 &&
              cvv !== "***" && (
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 w-full rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              )}
            {cardNumber.length !== 19 ||
              (cardNumber === "**** **** **** ****" && (
                <p> Please fill in your cardnumber</p>
              ))}
            {(cvv.length !== 3 || cvv === "***") && (
              <p> Please fill in your CVV code</p>
            )}
          </div>
        </form>
      </main>
    </>
  );
};

export default AddCard;
