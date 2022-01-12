import { Route, Routes } from 'react-router-dom';

import Container from './components/Container';
import StocksRenderer from './components/StocksRenderer';
import About from './pages/About'
import Search from './components/Search';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Container>
      <Routes>
        <Route exact path="/"
          element={<>
            <StocksRenderer />
            <Search />
            <SearchResults /></>} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Container>
  );
}

export default App;
