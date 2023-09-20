import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../features/cardSlice";

// Define the chip SVG as a string
const chipSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32">
    <!-- Outer circle -->
    <circle cx="24" cy="24" r="18" fill="#ccc" />
    <!-- Inner rectangle -->
    <rect x="12" y="16" width="24" height="16" fill="#fff" />
    <!-- Embossed effect lines -->
    <line x1="12" y1="20" x2="36" y2="20" stroke="#aaa" stroke-width="2" />
    <line x1="12" y1="28" x2="36" y2="28" stroke="#aaa" stroke-width="2" />
  </svg>
`;

const AddCard = () => {
    const fullName = useSelector((state) => state.name);
    const words = fullName.split(" ");
    let initialTitle = "";
    let initialFirstName = "";
    let initialLastName = "";

    if (words.length === 3) {
      [initialTitle, initialFirstName, initialLastName] = words;

    } else {
      console.log("Invalid input format");
    }

  const dispatch = useDispatch();
  const [cardType, setCardType] = useState("Visa");
  const [cardNumber, setCardNumber] = useState("**** **** **** ****");
  const [expireDate, setExpireDate] = useState("YY/MM");
  const [cvv, setCvv] = useState("***");
  const [title, setTitle] = useState(initialTitle);
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);

  const handleCardTypeChange = (event) => {
    setCardType(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    const inputCardNumber = event.target.value;
    if (inputCardNumber.length > 0) {
      const formattedCardNumber = inputCardNumber
        .replace(/\s/g, "") // Remove existing spaces
        .match(/.{1,4}/g) // Create groups of 4 characters
        .join(" "); // Add space between groups
      setCardNumber(formattedCardNumber);
    }
    if (inputCardNumber.length === 0) {
      setCardNumber("");
    }
  };

  const handleExpireDateChange = (event) => {
    setExpireDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addCard({
        cardType: cardType,
        name: fullName,
        cvv: cvv,
        cardNumber: cardNumber.replace(/\s/g, ""), // Remove spaces for storage
        active: false,
        expireDate: expireDate,
        name: title+" "+firstName +" "+lastName,
          title: title,
        firstName: firstName,
        lastName: lastName,
      })
    );
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className={`bg-white p-4 rounded-lg shadow-md mb-4 w-72`}>
        <div className="w-full h-32 mb-2 relative rounded-md flex flex-col justify-between items-center bg-gray-500">
          <div
            dangerouslySetInnerHTML={{ __html: chipSVG }}
            className="absolute w-8 h-8 top-8 left-4"
          />
          <div className="text-white p-4 text-center">
            <div className="text-lg font-bold">{cardNumber}</div>
            <div className="text-lg mt-2">{cardType}</div>
            <div className="flex flex-start justify-between w-full px-4 mt-2 text-xs font-bold flex-col border-2">
              <div className="flex-start">
                {title} {firstName} {lastName}
              </div>
                          <div>Expire Date: {expireDate}</div>
                          
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-lg font-bold">Card Type</label>
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

        <div className="mb-4">
          <label className="text-lg font-bold">Card Number</label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Card Number"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </div>

        <div className="mb-4">
          <label className="text-lg font-bold">Expire Date</label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-md"
            placeholder="YY/MM"
            value={expireDate}
            onChange={handleExpireDateChange}
          />
        </div>

        <div className="mb-4">
          <label className="text-lg font-bold">CVV</label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-md"
            placeholder="***"
            value={cvv}
            onChange={handleCvvChange}
          />
        </div>

        <div className="mb-4">
          <label className="text-lg font-bold">Title</label>
          <select
            className="border border-gray-300 p-2 rounded-md"
            value={title}
            onChange={handleTitleChange}
          >
            <option value=""> </option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-lg font-bold">First Name</label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-md"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>

        <div className="mb-4">
          <label className="text-lg font-bold">Last Name</label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-md"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default AddCard;
