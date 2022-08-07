import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route"
import Header from "./components/Header";

// Widget 1
const items = [
  {
    title: "What is React?",
    content: "React is a front end framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorit JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

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


const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />;
  }
}

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />;
  }
}

const showTranslate = () => {
  if(window.location.pathname === '/translate') {
    return <Translate />;
  }
}

// Alternative 2, not very React style
const showComponent = (route, component) => {
  return window.location.pathname === route
    ? component
    : null;
}

const App = () => {
  // Widget 3 BEGIN
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  // Widget 3 STOP

  return (
    <div>
      {/* Widget1 */}
      {/* Alternative 1 */}
      {/* {showAccordion()} */}
      {/* Alternative 2 */}
      {/* {showComponent('/', <Accordion items={items} />)} */}

      {/* Widget 2 */}
      {/* Alternative 1 */}
      {/* {showList()} */}
      {/* Alternative 2 */}
      {/* {showComponent('/list', <Search />)} */}

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
      {/* {showDropdown()} */}
      {/* Widget 3 END*/}
      {/* Widget 4 */}
      {/* Alternative 1 */}
      {/* {showTranslate()} */}
      {/* Alternative 2 */}
      {/* {showComponent('/translate', <Translate />)} */}

      {/* Alternative 3 */}
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>

    </div>
  );
};

export default App;
