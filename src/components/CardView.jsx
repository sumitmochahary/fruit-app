
function CardView(props) {
    return (
      <div className="App-card">
        <h3>{props.fruit.fruitName}</h3>
        <p>{props.fruit.fruitPrice}</p>
      </div>
    );
}

export default CardView
