import React from 'react';

function Search({ onChange, defaultValue = '' }) {
  return (
    <div>
      Найти: <input type="text" defaultValue={defaultValue} onChange={onChange} />
    </div>
  );
}

export default React.memo(Search);
