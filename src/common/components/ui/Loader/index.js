import React from 'react';
import svg from './loader.svg';
import './loader.css';

function Loader({ src, size = 100 }) {
  return (
    <div className="loader">
      <img src={svg} width={size} alt="" />
    </div>
  );
}

export default React.memo(Loader);
