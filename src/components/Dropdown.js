import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false); // state of dropdown
  const myRef = useRef();

  const onBodyClick = (event) => {
    // console.log("In body click handler, open =", open);
    // console.log("In Dropdown, Logging event.target: ", event.target);
    if (myRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      // null in react means "do not render anything"
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          // console.log("In Item click handler, open =", open);
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  // console.log("In Dropdown, Logging myRef: ", myRef.current);
  return (
    <div ref={myRef} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            setOpen(!open);
            // console.log("In Dropdown div click handler, open =", open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          {/* i is a convention Semantic UI uses to display icons, in Html spec i is for italics */}
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
