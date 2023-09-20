import Card from "./Card";
import { useDispatch } from "react-redux";
import { reorderCards } from "../features/cardSlice";

function CardList({ cards }) {
  const dispatch = useDispatch();

  if (!Array.isArray(cards.cards)) {
    console.error("cards is not an array:", cards);
    return null;
  }

  const reorderedCardsArray = [...cards.cards];
  const handleDelete = () => {
     reorderedCardsArray.shift();
     dispatch(reorderCards(reorderedCardsArray));
  };
  const handleCardClick = (index) => {
    if (index !== 0) {
      const activeCard = reorderedCardsArray.splice(index, 1);
      reorderedCardsArray.unshift(activeCard[0]);
      console.log(reorderedCardsArray);
      dispatch(reorderCards(reorderedCardsArray));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="flex p-2 m-auto">
      <ul>
        {reorderedCardsArray.map((item, index) => (
          <Card
            key={index}
            data={item}
            handleDelete={handleDelete}
            isActive={index === 0}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </ul>
    </section>
  );
}

export default CardList;
