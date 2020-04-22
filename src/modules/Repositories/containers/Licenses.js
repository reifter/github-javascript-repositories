import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLicenses, setFilters } from '../redux/actions';
import Licenses from '../components/Licenses';

function LicensesContainer() {
  const { isLoading, data } = useSelector(state => state.Repositories.licenses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLicenses());
  }, [dispatch]);

  const handleChangeLicense = useCallback((e) => {
    const val = e.target.value;
    dispatch(setFilters({
      license: val && val !== 'all' ? val : null,
      page: null,
    }));
  }, [dispatch]);

  return (
    <Licenses
      isLoading={isLoading}
      data={data}
      onChange={handleChangeLicense}
    />
  );
}

export default React.memo(LicensesContainer);
