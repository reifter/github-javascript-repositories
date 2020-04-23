import React from 'react';

function Licenses({ isLoading, data, onChange }) {
  return (
    <>
      Лицензия: <select defaultValue="all" onChange={onChange}>
      <option value='all'>Все</option>
      {isLoading && <option disabled>идёт загрузка...</option>}
      {data && data.map(item => (
        <option key={item.key} value={item.key}>
          {item.name}
        </option>
      ))}
      </select>
    </>
  );
}

export default React.memo(Licenses);
