import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Stocks</h1>
      </Link>
      <div className="info">
        <Link to="/about">
          <AiOutlineInfoCircle />
        </Link>
      </div>
    </nav>
  );
}

export default Header;