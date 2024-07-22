import SingleCards from "./components/cards";
import "./index.css";

import { useEffect, useState } from "react";

const cardimages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];
function App() {
  const [cards, setCards] = useState([]);
  const [turns, seTurns] = useState(0);
  const [choiseone, setChoiceone] = useState();
  const [choisetwo, setChoicetwo] = useState();
  const [disabel, setDisabel] = useState(false);

  const shufflecards = () => {
    const shuffledcard = [...cardimages, ...cardimages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledcard);
    seTurns(0);
  };
  // handelchoice
  const handelchoice = (card) => {
    choiseone ? setChoicetwo(card) : setChoiceone(card);
  };
  // compare cards
  useEffect(() => {
    if (choiseone && choisetwo) {
      setDisabel(true);
      if (choiseone.src === choisetwo.src) {
        setCards((previesCard) => {
          return previesCard.map((card) => {
            if (card.src === choiseone.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurns();
      } else {
        setTimeout(() => {
          resetTurns();
        }, 1000);
      }
    }
  }, [choiseone, choisetwo]);
  console.log(cards);
  // resrt choises and increase turns
  const resetTurns = () => {
    setChoiceone(null);
    setChoicetwo(null);
    seTurns((previesTurn) => previesTurn + 1);
    setDisabel(false);
  };
  useEffect(() => {
    shufflecards();
  }, []);
  return (
    <div className="App text-center bg-violet-950 min-h-screen text-white flex justify-center items-baseline ">
      <div className="max-w-4xl">
        <h1 className="text-4xl">Memory Game</h1>
        <button
          onClick={shufflecards}
          className="border border-white rounded-full p-2 m-3 hover:shadow-2xl hover:bg-pink-700 px-3"
        >
          New Game
        </button>
        <div id="card-grid" className="grid grid-cols-4 gap-5 mt-10">
          {cards.map((card) => (
            <SingleCards
              key={card.id}
              card={card}
              handelChoice={handelchoice}
              flipped={card === choiseone || card === choisetwo || card.matched}
              disabel={disabel}
            />
          ))}
        </div>
        <p className="mt-4 text-3xl">Turns:{turns} </p>
      </div>
    </div>
  );
}

export default App;
