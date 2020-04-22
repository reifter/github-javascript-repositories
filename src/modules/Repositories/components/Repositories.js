import React from 'react';
import { Skeleton, Avatar } from '../../../common/components/ui';
import Licenses from '../containers/Licenses';

function Repositories({ isLoading, data, handleChangeLicense }) {
  return (
    <div className="repositories">
      <h1>Javascript репозитории</h1>
      <div>
        <Licenses onChange={handleChangeLicense} />
      </div>
      {isLoading && <Skeleton />}
      {data && data.map(item => (
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
      ))}
    </div>
  );
}

export default Repositories;
