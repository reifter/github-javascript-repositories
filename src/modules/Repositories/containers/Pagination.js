import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../redux/actions';
import Pagination from '../../../common/components/ui/Pagination';

function PaginationContainer() {
  const { filters, totalCount } = useSelector(state => state.Repositories.list);
  const dispatch = useDispatch();

  const handleChangePage = useCallback((page) => {
    dispatch(setFilters({page}));
  }, [dispatch]);

  return (
    <Pagination
      totalCount={totalCount}
      onChange={handleChangePage}
      page={filters && filters.page}
    />
  );
}

export default React.memo(PaginationContainer);
