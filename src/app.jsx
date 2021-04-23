import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Nav from './Nav.jsx';
import Contents from './Contents.jsx';

const App = () => {
  const pages = Array.from({ length: 8 }, (_, i) => i + 1);
  const [page, setPage] = useState(1);
  
  const moveToPage = (page) => {
    document.querySelectorAll('.content')[page - 1].scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  }
  
  useEffect(() => {
    const offsetTops = Array.from(document.querySelectorAll('.content')).map(({ offsetTop, clientHeight }, i) => [ offsetTop - clientHeight / 2, offsetTop + clientHeight / 2]);
    window.addEventListener('scroll', (e) => {
      const { scrollTop } = e.target.scrollingElement;
    const targetPage = offsetTops.findIndex(([from, to]) => ( scrollTop >= from && scrollTop < to)) + 1;
    setPage(targetPage);
    })
  }, [page])
  return (
    <>
      <Nav pages={pages} moveToPage={moveToPage} page={page} />
      <Contents pages={pages} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
