import React from 'react';

const Nav = ({ pages, moveToPage, page }) => {
  return (
    <nav id="num-nav">
      <ul>
      {pages.map((item, i) => <li key={item} className={page === i + 1 ? 'on' : null} onClick={() => moveToPage(item)}>{item}</li>)}
      </ul>
    </nav>
  );
};

export default Nav;