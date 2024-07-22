import { useState } from "react";

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

  const shufflecards = () => {
    const shuffledcard = [...cardimages, ...cardimages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    console.log(shuffledcard);
    setCards(shuffledcard);
    seTurns(0);
  };
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
            <div className="" id="card" key={card.id}>
              <div>
                <img src={card.src} alt="card-front" id="front" />
                <img src="img/cover.png" alt="card-back" id="back" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
