import React from 'react';
import { Skeleton, Avatar } from '../../../common/components/ui';
import Licenses from '../containers/Licenses';
import Search from '../containers/Search';
import Pagination from '../containers/Pagination';

function Repositories({ isLoading, data }) {
  return (
    <div className="repositories">
      <h1>Javascript репозитории</h1>
      <div>
        <Licenses />
        <Search />
      </div>
      {isLoading && <Skeleton />}
      {data && data.length > 0 ? data.map(item => (
        <div key={item.id} style={{display: 'flex'}}>
          <div>
            <Avatar src={item.owner.avatar_url} size={42} />
          </div>
          <div>
            {item.full_name}
          </div>
          <div>
            Stars: {item.stargazers_count}
          </div>
        </div>
      )) : 'Ничего не найдено'}
      <Pagination />
    </div>
  );
}

export default React.memo(Repositories);
