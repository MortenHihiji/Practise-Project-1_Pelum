import React from 'react';
import ContentLoader from 'react-content-loader';

import './LoadingBlock.scss';

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="item"
      speed={2}
      width={250}
      height={412}
      viewBox="0 0 250 412"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="0" ry="0" width="250" height="350" />
      <rect x="0" y="357" rx="0" ry="0" width="125" height="20" />
      <rect x="0" y="385" rx="0" ry="0" width="125" height="25" />
      <rect x="210" y="380" rx="0" ry="0" width="40" height="30" />
    </ContentLoader>
  );
};

export default LoadingBlock;
