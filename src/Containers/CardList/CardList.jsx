import "./CardList.scss"
import Card from "../../Components/Card/Card";

const CardList = ({beerData}) => {



  return (<div className="cardList">
    {beerData.map((beer)=>{
        return <Card imageURL={beer.image_url} 
        description={beer.description} 
        name={beer.name} 
        key={beer.id}
        abv = {beer.abv}
        firstBrewed = {beer.first_brewed}
        ph = {beer.ph}
        />
    })}
  </div>);
};

export default CardList