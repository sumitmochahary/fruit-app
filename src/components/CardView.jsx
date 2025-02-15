import fruitList from "./FruitDetails"

function CardView() {
    return (
      <div>
        {fruitList.map((list) => (
          <div className="App-card">
            <p key={list.id}>
              {list.fruitName}
              <br />
              {list.fruitPrice}
            </p>
          </div>
        ))}
      </div>
    );
}

export default CardView
