import SearchResults from "./SearchResults";
import axios from 'axios'
import { useState, useEffect } from 'react'

const Search = () => {

  const [search, setSearch] = useState([]);

  const fetchSearch = async (e) => {
    e.preventDefault();

    const term = (e.target.search.value).toLowerCase()

    if (term.length > 0) {

      const res = await axios.get(`https://cloud.iexapis.com/stable/stock/${term}/quote?token=${process.env.REACT_APP_SK}`);
      const data = await res.data;

      setSearch(data)

      console.log(search);
      e.target.reset();
    }
    else
      e.target.reset();
  }

  return (
    <div className="search">
      <form onSubmit={fetchSearch}>
        <input type="text" placeholder="Search..." name="search" />
      </form>
    </div>
  );
}

export default Search;