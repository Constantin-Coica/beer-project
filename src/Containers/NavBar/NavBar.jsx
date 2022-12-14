import "./NavBar.scss";
import FiltersList from "../FiltersList/FiltersList";
import SearchBar from "../../Components/SearchBar/SearchBar";
//import RangeInput from "../../Components/RangeInput/RangeInput";

const NavBar = ({filterData, onChange, toSearch, rangeValue, page}) => {
  return <div className="NavBar" data-testid = "navbar">
    {/*<RangeInput label={"Number of Beers:"} onChange={onChange} rangeValue ={rangeValue}/>*/}
    <SearchBar  onChange={onChange} toSearch={toSearch} key={"search"} />
    <FiltersList filterData={filterData} onChange={onChange} />
    <div className="buttons">
      <button className="button" id="previous" onClick={onChange}>Previous Page</button>
      <div className="counter">{page}</div>
      <button className="button" id="next" onClick={onChange}>Next Page</button>
    </div>
    
  </div>;

};

export default NavBar