import React, {useState} from "react";

// Class Component
// class Accordion extends React.Component {
// // Point 1: Initialize State
//   state = {activeIndex: 0}

//   onTitleClick = (index) => {
//     console.log('Title clicked', index);
//     // Point 2: Update State using this.setState
//     this.setState({activeIndex: index});
//   }

//   render () {
//     const items = this.props.items;
//     const renderedItems = items.map((item, index) => {
//       return (
//         <React.Fragment key={item.title}>
//           <div className="title active" 
//            onClick={()=>this.onTitleClick(index)}>
//             <i className="dropdown icon"></i>
//             {item.title}
//           </div>
//           <div className="content active">
//             <p>{item.content}</p>
//           </div>
//         </ React.Fragment>
//       );
//     });
  
//     return (
//       <div className="ui container">
//         <div className="ui styled accordion">{renderedItems}</div>
//         {/* Point 3: Reference state using this.state at any point in the Application */}
//         <div>{`Active Item Index: ${this.state.activeIndex}`}</div>       
//       </div>
//     );
//   }
// }

// Function Component
const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const onTitleClick = (index) => {
    setActiveIndex(index);
    // console.log('Title clicked', index);
  } 

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" 
         onClick={()=> onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </ React.Fragment>
    );
  });

  return  <div className="ui styled accordion">
            {renderedItems}
            {/* null value in ${null} displays string 'null' */}
            <h1>{`Active Item Index: ${activeIndex}`}</h1>
            {/* null value in {} produces no display in HTML */}
           {/* <h1>{activeIndex}</h1>   */}
          </div>;
};

export default Accordion;