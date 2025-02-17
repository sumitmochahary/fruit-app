import CardView from "./CardView"

function DisplayFruit(props) {

    return(
        <div className="App-display">
            {props.fruitlist.map(fruit => {
                return <CardView key={fruit.id} fruit={fruit}/>
            })}
        </div>
    )
}

export default DisplayFruit
