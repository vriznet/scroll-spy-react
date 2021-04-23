import React from 'react';

const Contents = ({ pages }) => {
  return (
    <>
    {pages.map((item) => (
      <div key={item} className="content">{item}</div>
    ))}
  </>
  );
}

export default Contents;