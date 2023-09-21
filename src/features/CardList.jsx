import Card from "./Card";
import { useDispatch } from "react-redux";
import { reorderCards, deleteCard } from "../features/cardSlice";

function CardList({ cards }) {

  const dispatch = useDispatch();

  if (!Array.isArray(cards)) {
    console.error("cards is not an array:", cards);
    return null;
  }

  const reorderedCardsArray = [...cards];
  const handleDelete = (index) => {
    reorderedCardsArray.splice(index,1)
     dispatch(reorderCards(reorderedCardsArray));
  };
  const handleCardClick = (index) => {
    if (index !== 0) {
      console.log("HandleCardClick");
      const activeCard = reorderedCardsArray.splice(index, 1);
      reorderedCardsArray.unshift(activeCard[0]);
      console.log(reorderedCardsArray);
      dispatch(reorderCards(reorderedCardsArray));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="flex justify-center">
      <ul className="border-4 flex-grow flex flex-col justify-center p-2 px-16">
        {reorderedCardsArray.map((item, index) => (
          <Card
            key={index}
            index={index}
            data={item}
            handleDelete={handleDelete}
            isActive={index === 0}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </ul>
    </main>
  );
}

export default CardList;
