import React, {useState, useEffect} from 'react'

const Search = () => {
  const[term, setTerm] = useState('');
  console.log('I RUN WITH EVERY RENDER');

  // useEffect(()=>{
  //   console.log('I ONLY RUN ONCE');
  // }, []);

  // useEffect(()=>{
  //   console.log('I RUN WITH EVERY RENDER AND AT INITIAL RENDER');
  // });

  useEffect(()=>{
    console.log('I RUN AT INITIAL RENDER AND, WITH EVERY RENDER IF TERM CHANGES)');
  }, [term]);

  return (
    <div className="ui form">
      <div className='field'>
        <label>Enter Search Term</label>
        <input
          value={term}
          onChange={e => setTerm(e.target.value)}
          className="input"
        />
      </div>
    </div>
  );
}

export default Search;