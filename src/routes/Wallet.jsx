import CardList from "../features/CardList";
import { addCard } from "../features/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export function Wallet() {
  const fullName = useSelector((state) => state.name);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allCards.cards.length < 1) {
      //cardType, cardNumber, name, expireDate, cvv
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
          cardType: "Mastercard",
          name: fullName,
          cvv: 123,
          cardNumber: "73300 02220 0000 4222",
          active: true,
          expireDate: "02/24",
        })
      );
      dispatch(
        addCard({
          cardType: "American X",
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
  console.log(allCards.cards.length, "allCards");
  return (
    <section className="p-4 flex flex-col justify-center">
      {fullName === "" && <p>Loading...</p>}
      {allCards.cards.length > 0 && (
        <>
          <CardList cards={allCards} />
        </>
      )}
    </section>
  );
}
