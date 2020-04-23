import React from 'react';
import './avatar.css';

function Avatar({ src, size }) {
  return (
    <div className="avatar">
      <img src={src} width={size} alt="" />
    </div>
  );
}

export default React.memo(Avatar);
