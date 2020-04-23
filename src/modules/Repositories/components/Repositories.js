import React from 'react';
import { Loader } from '../../../common/components/ui';
import Licenses from '../containers/Licenses';
import Search from '../containers/Search';
import RepositoryList from './RepositoryList';

import './repositories.css';

function Repositories({ isLoading, data }) {
  return (
    <div className="repositories">
      <h1 className="repositories__title">JavaScript репозитории</h1>
      <div className="repositories__filters">
        <div className="repositories__filters-search">
          <Search />
        </div>
        <div className="repositories__filters-licenses">
          <Licenses />
        </div>
      </div>
      {data && (
        <div className="repositories__content">
          {data.length > 0 ? (
            <RepositoryList data={data} />
          ) : (
            <div>Ничего не найдено</div>
          )}
        </div>
      )}
      {isLoading && <Loader size={100} />}
    </div>
  );
}

export default React.memo(Repositories);
