import "./Main.scss";
import CardList from "../CardList/CardList";

const Main = ({beerData}) => {

  

  return <div className="main_container">
        <CardList beerData={beerData}/>
  </div>;

};

export default Main