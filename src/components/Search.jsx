import Stocks from './Stocks'

import axios from 'axios'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Search = () => {

  const [search, setSearch] = useState([]);

  const fetchSearch = async (e) => {
    e.preventDefault();

    const term = (e.target.search.value).toLowerCase()

    if (term.length > 0) {

      const res = await axios.get(`https://cloud.iexapis.com/stable/stock/${term}/quote?token=${process.env.REACT_APP_SK}`);
      const data = await res.data;

      setSearch([data, ...search]);

      console.log(search);
      e.target.reset();
    }
    else
      e.target.reset();
  }

  // useEffect(() => {
  //   search.map(res => {
  //     return (
  //       <Stocks key={uuidv4()} ticker={res.symbol} name={res.companyName} price={res.latestPrice} percentage={res.changePercent} />
  //     )
  //   })
  // }, [search]);

  return (
    <>
      <div className="search">
        <form onSubmit={fetchSearch}>
          <input type="text" placeholder="Search..." name="search" />
        </form>
      </div>
      {
        search.map(res => {
          return (
            <Stocks key={uuidv4()} ticker={res.symbol} name={res.companyName} price={res.latestPrice} percentage={res.changePercent} />
          )
        })}
    </>
  );
}

export default Search;