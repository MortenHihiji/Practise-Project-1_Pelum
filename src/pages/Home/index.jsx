import React from 'react';

import './Home.scss';
import { Item } from '../../components';

const Home = () => {
  return (
    <>
      <div className="content">
        <h2 className="content__header">Popular Movies</h2>
        <div className="content__items">
          {Array(10)
            .fill([4])
            .map((_, index) => (
              <Item index={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
