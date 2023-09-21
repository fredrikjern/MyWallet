import CardList from "../features/CardList";
import { addCard } from "../features/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Wallet() {
  const fullName = useSelector((state) => state.name);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allCards.cards.length < 1) {
      dispatch(
        addCard({
          cardType: "Visa",
          name: fullName,
          cvv: 123,
          cardNumber: "33300 02220 0000 4222",
          active: true,
          expireDate: "02/24",
        })
      );
      dispatch(
        addCard({
          cardType: "MasterCard",
          name: fullName,
          cvv: 123,
          cardNumber: "73300 02220 0000 4222",
          active: true,
          expireDate: "02/24",
        })
      );
      dispatch(
        addCard({
          cardType: "American Express",
          name: fullName,
          cvv: 123,
          cardNumber: "33300 02220 0000 4222",
          active: true,
          expireDate: "02/24",
        })
      );
    }
  }, []);

  const allCards = useSelector((state) => state.cards);

  return (
    <>
      <header className="flex justify-center p-4">
        <h1 className="text-2xl font-bold">E-wallet</h1>
      </header>
      <section className="p-4 flex flex-col justify-center ">
        {allCards.cards.length===0 && <p>Loading...</p> }
        {allCards.cards.length > 0 && (
          <CardList cards={allCards.cards} />
        )}
        {allCards.cards.length < 4 && (
          <Link onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" })}}
            className="p-2 rounded w-full hover:bg-slate-700 flex justify-center border"
            to="/addCard"
          >
            Add a new card
          </Link>
        )}
      </section>
    </>
  );
}
