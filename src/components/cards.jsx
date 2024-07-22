import "../index.css";

function SingleCards(props) {
  const handelClick = () => {
    if (!props.disabel) {
      props.handelChoice(props.card);
    }
  };
  return (
    <div className="card relative" id="card">
      <div className={props.flipped ? "flipped" : ""}>
        <img
          src={props.card.src}
          alt="card-front"
          id="front"
          className="w-full block border-2 rounded-lg  front "
        />
        <img
          onClick={handelClick}
          src="img/cover.png"
          alt="card-back"
          id="back"
          className="w-full block border-2 rounded-lg back"
        />
      </div>
    </div>
  );
}

export default SingleCards;
