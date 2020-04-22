import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories } from '../redux/actions';
import Repositories from '../components/Repositories';

function RepositoriesContainer() {
  const { isLoading, data } = useSelector(state => state.Repositories.js);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRepositories());
  }, [dispatch]);

  return (
    <Repositories
      isLoading={isLoading}
      data={data}
    />
  );
}

export default RepositoriesContainer;
