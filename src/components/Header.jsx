import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useState } from 'react';

import Info from './Info';

const Header = () => {

  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  }

  return (
    <nav>
      <h1>Stocks</h1>
      <div className="info">
        <AiOutlineInfoCircle onClick={toggleInfo} />
        {showInfo && <Info showInfo={showInfo} setShowInfo={setShowInfo} toggleInfo={toggleInfo} />}
      </div>
    </nav>
  );
}

export default Header;