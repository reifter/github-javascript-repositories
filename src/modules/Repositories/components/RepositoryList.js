import React from 'react';
import { Avatar } from '../../../common/components/ui';
import Pagination from '../containers/Pagination';

function RepositoryList({ data }) {
  return (
    <div className="repository-list">
      <div className="repository-list__items">
        {data && data.map(item => (
          <a key={item.id} href={item.html_url} target="_blank" rel="noopener noreferrer" className="repository-list__item">
            <span className="repository-list__avatar">
              <Avatar src={item.owner.avatar_url} size={36} />
            </span>
            <span className="repository-list__name">{item.full_name}</span>
            <span className="repository-list__star">
              ★ {item.stargazers_count}
            </span>
          </a>
        ))}
      </div>
      <div className="repository-list__pagination">
        <Pagination />
      </div>
    </div>
    
  );
}

export default React.memo(RepositoryList);
