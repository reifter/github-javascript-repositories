import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="logo">GitHub JS Rating</div>
      </div>
    </header>
  );
}

export default React.memo(Header);
