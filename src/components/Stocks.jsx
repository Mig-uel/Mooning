import { useState } from 'react';

const Stocks = () => {
  return (
    <div className="stock">
      <div className="stock-name">
        <h1 className="ticker">FB</h1>
        <p className="name">Facebook</p>
      </div>
      <div className="stock-info">
        <p className="price">190.96</p>
        <p className="percentage">+0.36</p>
      </div>
    </div>
  );
}

export default Stocks;