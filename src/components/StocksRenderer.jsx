import Stocks from "./Stocks";
import { useState, useEffect } from "react";

import axios from "axios";
import { v4 as uuidv4 } from "uuid"

const StocksRenderer = () => {

  const [activeStocks, setActiveStocks] = useState(null);
  const [ready, setReady] = useState(false);

  const mainStocks = async () => {
    const res = await axios.get('https://cloud.iexapis.com/stable/stock/market/collection/list?collectionName=mostactive&token=' + process.env.REACT_APP_SK);
    const data = await res.data;

    // console.log(data)
    setActiveStocks(data);
  }

  useEffect(() => {
    mainStocks()
      .then(() => setReady(true))
  }, [])

  return (
    <>
      {ready && activeStocks.map(stock => {
        return (
          <Stocks key={uuidv4()} ticker={stock.symbol} name={stock.companyName} price={stock.latestPrice} percentage={stock.changePercent} />
        )
      })}
    </>
  );
}

export default StocksRenderer;