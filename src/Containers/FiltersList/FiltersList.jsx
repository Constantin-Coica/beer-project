import './FiltersList.scss';
import FilterItem from "../../Components/FilterItem/FilterItem";

const FiltersList = ({filterData, onChange}) => {


  return <div className="filterList">
    {
    filterData.map((filter,index)=>{
        return <FilterItem description={filter.description}
        value={filter.value}
        onChange={onChange}
        checked={filter.checked}
        key={index}
        theID = {`filter${index+1}`} />
    })}   
  </div>;

};

export default FiltersList;