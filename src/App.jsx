import { Button } from "flowbite-react";
const cardimages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];
function App() {
  const shufflecards = () => {
    const shuffledcard = [...cardimages, ...cardimages];
    console.log(shuffledcard);
  };
  return (
    <div className="App text-center bg-violet-950 min-h-screen text-white flex justify-center items-baseline ">
      <div className="max-w-4xl">
        <h1 className="text-4xl">Memory Game</h1>
        <button className="border border-white rounded-full p-2 m-3">
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;
