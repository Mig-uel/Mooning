const Stocks = ({ ticker, name, price, percentage }) => {

  const styles = {
    backgroundColor: `${Math.sign(Number(percentage)) > 0 ? "var(--positive-color)" : "var(--negative-color)"}`
  }
  return (
    <div className="stock">
      <div className="stock-name">
        <h1 className="ticker">{ticker}</h1>
        <p className="name">{name}</p>
      </div>
      <div className="stock-info">
        <p className="price">{price}</p>
        <p style={styles} className="percentage">{percentage} </p>
      </div>
    </div>
  );
}

export default Stocks;