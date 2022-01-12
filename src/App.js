import Container from './components/Container';
import StocksRenderer from './components/StocksRenderer';
import Search from './components/Search';

function App() {
  return (
    <Container>
      {/* <Stocks />
      <Stocks />
      <Stocks /> */}
      <StocksRenderer />
      <Search />
    </Container>
  );
}

export default App;
