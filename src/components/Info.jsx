const Info = ({ showInfo, toggleInfo }) => {

  const infoCard = (
    <div className="info-card" onClick={toggleInfo}>
      <p>Data provided by <br /><a href="http://https://iexcloud.io">IEX Cloud</a>
      </p>
    </div>
  )

  return (
    <>
      {showInfo && infoCard}
    </>
  );
}

export default Info;