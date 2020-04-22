import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories } from '../redux/actions';
import Repositories from '../components/Repositories';

function RepositoriesContainer() {
  const { isLoading, data, filters } = useSelector(state => state.Repositories.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepositories(filters));
  }, [dispatch, filters]);

  return (
    <Repositories
      isLoading={isLoading}
      data={data}
    />
  );
}

export default React.memo(RepositoriesContainer);
