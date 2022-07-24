import React from "react";

// Class Based
// class Accordion extends React.Component {
// onTitleClick = (index) => {
//   console.log('Title clicked', index);
// }

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
  
//     return <div className="ui styled accordion">{renderedItems}</div>;
//   }
// }

// Functional
const Accordion = ({items}) => {
  const onTitleClick = (index) => {
    console.log('Title clicked', index);
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

  return <div className="ui styled accordion">{renderedItems}</div>;

};

export default Accordion;