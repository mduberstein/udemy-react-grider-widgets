import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";

// Widget 1
// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front end framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorit JS library among engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating components",
//   },
// ];

const options = [
  {
    label: "The  Color Red",
    value: "red",
  },
  {
    label: "The  Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  // Widget 3 BEGIN
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  // Widget 3 STOP

  return (
    <div>
      {/* Widget1 */}
      {/* <Accordion items={items} /> */}
      {/* Widget 2 */}
      {/* <Search /> */}
      {/* Widget 3 RESUME*/}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>

      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      {/* Widget 3 END*/}
      {/* Widget 4 */}
      <Translate />
    </div>
  );
};

export default App;
