import React from 'react';

import './Input.scss';

const Input = ({ navigate, inputValue, setInputValue }) => {
  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (inputValue) {
        navigate(`search/${inputValue}`);
        setInputValue('');
        e.target.blur();
      }
    }
  };

  return (
    <input
      type="text"
      placeholder="Search Movie"
      className="noselect"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default Input;
