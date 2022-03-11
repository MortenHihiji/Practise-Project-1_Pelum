import React from 'react';

import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Carousel, Header } from './components';

import { Home, Search, Movie } from './pages';

function App() {
  const [items, setItems] = React.useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={<Carousel />} />
      </Routes>
      <div className="wrapper">
        <Header location={location} navigate={navigate} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Navigate to="/" />} />
          <Route
            path="/search/:id"
            element={
              <Search items={items} setItems={setItems} location={location} navigate={navigate} />
            }
          />
          <Route path="/movie" element={<Navigate to="/" />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
