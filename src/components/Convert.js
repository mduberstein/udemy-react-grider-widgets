import React, {useState, useEffect} from "react";

const Convert = ({language, text}) => {
  useEffect(() => {
    console.log('In Convert, New language or text')
  }, [language, text]);
  return <div></div>;
}

export default Convert;