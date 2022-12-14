import "./SearchBar.scss";

const SearchBar = ({toSearch, onChange}) => {
  return (<div className="SearchBar">
    <input placeholder="Search Beer..."
    value={toSearch}
    onChange={onChange}
    id={"search"}/>
  </div>
  );

};

export default SearchBar