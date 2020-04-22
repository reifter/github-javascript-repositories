import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories } from '../redux/actions';
import Repositories from '../components/Repositories';

function RepositoriesContainer() {
  const { isLoading, data } = useSelector(state => state.Repositories.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRepositories());
  }, [dispatch]);
  const handleChangeLicense = useCallback((e) => {
    dispatch(getRepositories({license: e.target.value}));
  }, [dispatch]);
  return (
    <Repositories
      isLoading={isLoading}
      data={data}
      handleChangeLicense={handleChangeLicense}
    />
  );
}

export default RepositoriesContainer;
