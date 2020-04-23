import React from 'react';
import './avatar.css';

function Avatar({ src, size }) {
  return (
    <div className="avatar" style={{width: size, height: size}}>
      <img src={src} alt="" />
    </div>
  );
}

export default React.memo(Avatar);
