import React from 'react';

import './Item.scss';

import emptyPng from '../../assets/img/empty.png';

const Item = ({ Title, Poster, Type, Year, index }) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <>
      <div key={index} className="item">
        <div
          className="item-content"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}>
          {isHover ? (
            <div className="item-content__skeleton">
              <svg
                className="item-content__skeleton-icon"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 24C0.734784 24 0.48043 23.8946 0.292893 23.7071C0.105357 23.5196 0 23.2652 0 23V1C2.97509e-05 0.82623 0.0453407 0.655466 0.131467 0.50454C0.217593 0.353615 0.341561 0.227737 0.491153 0.139314C0.640745 0.0508918 0.810796 0.00297603 0.984546 0.000290627C1.1583 -0.00239477 1.32975 0.0402428 1.482 0.124L21.482 11.124C21.6388 11.2103 21.7695 11.3371 21.8606 11.4912C21.9517 11.6453 21.9997 11.821 21.9997 12C21.9997 12.179 21.9517 12.3547 21.8606 12.5088C21.7695 12.6629 21.6388 12.7897 21.482 12.876L1.482 23.876C1.33435 23.9573 1.16855 23.9999 1 24Z"
                  fill="white"
                />
              </svg>
            </div>
          ) : (
            ''
          )}
          <img
            className="item-content__image"
            src={Poster !== 'N/A' && Poster ? Poster : emptyPng}
            alt="Something went wrong while loading movie logo"
          />
        </div>
        <div className="item-content__description">
          <h2 className="item-content__heading" title={Title}>
            {Title}
          </h2>
          <div className="item-content__text">
            <p>{Year} ▪ 140min</p>
            <span>{Type}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
