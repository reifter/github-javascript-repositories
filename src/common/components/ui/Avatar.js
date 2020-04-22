import React from 'react';

function Avatar({ src, size }) {
  return (
    <div>
      <img src={src} width={size} alt="" />
    </div>
  );
}

export default React.memo(Avatar);
