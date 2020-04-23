import React from 'react';

function Search({ onChange, defaultValue = '' }) {
  return (
    <>
      Найти: <input type="text" defaultValue={defaultValue} onChange={onChange} placeholder="Укажите название репозитория" />
    </>
  );
}

export default React.memo(Search);
