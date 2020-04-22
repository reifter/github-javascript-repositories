import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepositories } from '../redux/actions';
import Search from '../components/Search';

function SearchContainer() {
  const { filters } = useSelector(state => state.Repositories.licenses);
  const dispatch = useDispatch();
  const handleChange = useCallback((e) => {
    const val = e.target.value;
    dispatch(searchRepositories(val));
  }, [dispatch]);

  return (
    <Search onChange={handleChange} defaultValue={filters && filters.search} />
  );
}

export default React.memo(SearchContainer);
