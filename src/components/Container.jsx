import PropTypes from 'prop-types';
import Header from './Header';

const Container = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        {children}
      </div>
    </>
  );
}

Container.defaultProps = {
  children: null
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}


export default Container;