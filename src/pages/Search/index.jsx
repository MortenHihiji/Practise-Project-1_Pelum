import axios from 'axios';
import React from 'react';

import { Item, LoadingBlock } from '../../components';

import './Search.scss';

const Search = ({ items, setItems, location, navigate }) => {
  const [path, setPath] = React.useState('');
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const possiblePath = location.pathname.split('/search/').pop();
    console.log(possiblePath, path);
    if (location.pathname !== '/' && possiblePath !== '') {
      setPath(possiblePath);
      setIsLoaded(false);
      console.log('before axios', path);
      axios
        .get(`http://www.omdbapi.com/?i=tt3896198&apikey=42d57e8c&s=${possiblePath}`)
        // .get()
        .then(({ data }) => {
          setItems(data.Search);
          setIsLoaded(true);
        })
        .catch((err) => alert('Something went wrong while searching for a Movie', err));
    }
  }, [location]);

  return (
    <>
      <div className="search">
        <div className="search-info">
          <h2>{`Looking for: ${path}`}</h2>
        </div>
        <div className="search-content">
          {isLoaded
            ? items?.map((movie, index) => <Item {...movie} index={index} />)
            : Array(12)
                .fill([4])
                .map((_, index) => <LoadingBlock />)}
        </div>
      </div>
    </>
  );
};

export default Search;
