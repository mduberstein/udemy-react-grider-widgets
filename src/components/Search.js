import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Search = () => {
  const[term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  // console.log('I RUN WITH EVERY RENDER');

  // useEffect(()=>{
  //   console.log('I ONLY RUN ONCE');
  // }, []);

  // useEffect(()=>{ 
  //   console.log('I RUN WITH EVERY RENDER AND AT INITIAL RENDER');
  // });

  // useEffect(()=>{
  //   console.log('I RUN AT INITIAL RENDER AND, WITH EVERY RENDER IF TERM CHANGES)');
  // }, [term]);

  // console.log(results);

  // Async ALT 1
  useEffect(() => {
    const search = async () => {
//https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });
      setResults(data.query.search);
    };
    search();
  }, [term]);

  // Async ALT 2, IIFE, no performance benefit over ALT 1
  // useEffect(() => {
  //   (async () => {
  //     await axios.get("some url");
  //   })();
  // }, [term]);

  // Async ALT 3, Normal promises
  // useEffect(() => {
  //   axios.get("some url")
  //     .then(response => {
  //       console.log(response.data);
  //     });
  // }, [term]);
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item" >
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          {result.snippet}
        </div>
      </div>
    );
  })
  return (
    <div>
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
      <div className="ui celled list">
        {renderedResults}  
      </div>
    </div>
  );
}

export default Search;