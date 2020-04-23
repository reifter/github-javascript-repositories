import React from 'react';
import './pagination.css';

function Pagination({
  // totalCount,
  // countPage,
  pages,
  page,
  setCurrenPage,
}) {
  return (
    <div className="pagination">
      {pages && pages.map(p => (
        <span 
          key={p}
          className={'pagination__page-item' + ((p === 1 && !page) || page === p ? ' active' : '')}
          onClick={() => setCurrenPage(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
}

export default React.memo(Pagination);
