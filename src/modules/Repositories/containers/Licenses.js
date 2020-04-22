import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLicenses } from '../redux/actions';
import Licenses from '../components/Licenses';

function LicensesContainer({ onChange }) {
  const { isLoading, data } = useSelector(state => state.Repositories.licenses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLicenses());
  }, [dispatch]);

  return (
    <Licenses
      isLoading={isLoading}
      data={data}
      onChange={onChange}
    />
  );
}

export default LicensesContainer;
