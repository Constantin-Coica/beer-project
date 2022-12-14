import "./FilterItem.scss"

const FilterItem = ({description, value, onChange, isChecked, theID}) => {


  return (<div className="filterItem">
    {description}
    <input type="checkbox"
    value={value}
    checked={isChecked}
    onChange={onChange}
    id = {theID}
    />
  </div>);

};

export default FilterItem