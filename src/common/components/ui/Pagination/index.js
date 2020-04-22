import React, { useMemo, useCallback } from 'react';
import Pagination from './Pagination';

function PaginationConteiner({
  totalCount = 0,
  page = 1,
  perPage = 10,
  siblingRange = 4,
  onChange
}) {
  const data = useMemo(() => {
    let info = {
      totalCount: totalCount ? totalCount : 0,
      countPage: 0,
      pages: [],
      page,
    };
    if(totalCount) {
      const pageLimit = Math.ceil(1000 / perPage);
      info.countPage = Math.ceil(totalCount / perPage);
      if(info.countPage > pageLimit) { info.countPage = pageLimit; }
      let start = page ? page - siblingRange : 1;
      if(start < 1) { start = 1; }
      let end = page + siblingRange + ((page < siblingRange) ? siblingRange - page : 0);
      if(end > info.countPage) { end = info.countPage; }
      for(let i = start; i <= end; i++ ) { info.pages.push(i); }
    }
    return info;
  }, [totalCount, page, perPage, siblingRange]);

  const handleChange = useCallback((page) => {
    if(onChange) onChange(page);
  }, [onChange]);

  return (
    <Pagination {...data} setCurrenPage={handleChange} />
  );
}

export default React.memo(PaginationConteiner);
