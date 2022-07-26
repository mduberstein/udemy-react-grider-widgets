import React, {useState} from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false); // state of dropdown

  const renderedOptions = options.map((option) => {
    if(option.value === selected.value) {
      // null in react means "do not render anything"
      return null; 
    } 
    return (
      <div 
        key={option.value} 
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active': ''}`}>
          {/* i is a convention Semantic UI uses to display icons, in Html spec i is for italics */}
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition': ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
