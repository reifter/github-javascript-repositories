import React from 'react';

function Pagination({
  totalCount,
  countPage,
  pages,
  page,
  setCurrenPage,
}) {
  return (
    <div>
      <div>Всего: {totalCount} Страниц: {countPage}</div>
      {pages && pages.map(p => (
        <span key={p} style={page === p ? {backgroundColor: 'red'} : {}} onClick={() => setCurrenPage(p)}>{p}</span>
      ))}
    </div>
  );
}

export default React.memo(Pagination);
