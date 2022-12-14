import "./Card.scss";
import { useState } from "react";

const Card = ({imageURL, name, description, abv, firstBrewed, ph}) => {

  const [show, setShow] = useState(false);

  const onClick = ()=>{
    setShow(!show);
  }

  const moreInfoJSX = (<ul className="beer__card-info">
  <li className="beer__card-info-item">ABV: {abv}%</li>
  <li className="beer__card-info-item">First Brewed: {firstBrewed}</li>
  <li className="beer__card-info-item">Ph: {ph}</li>
  </ul>);



  return (<div className="beer__card" onClick={onClick}>
    <div className="beer__card-container">
      <img className="beer__card-container-img" src={imageURL} alt={`${name} image`} />
    </div>
    <h2 className="beer__card-header">{name}</h2>
    <p className="beer__card-description">{description}</p>
    <p className="beer__card-more">Click for more info!</p>
    {show && moreInfoJSX}
    {/* button extension*/}
  </div>);

};

export default Card