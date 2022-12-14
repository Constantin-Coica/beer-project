import "./RangeInput.scss";

const RangeInput = ({ min = 10, max = 80, label, onChange, rangeValue }) => {

  return (<div className="range">
    <label htmlFor={"range-bar"}>{label}</label>
      <input
        id="range"
        type="range"
        min={min}
        max={max}
        step={10}
        onChange={onChange}
        value = {rangeValue}
      />
      {rangeValue}
  </div>);

};

export default RangeInput;