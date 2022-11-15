import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, handlerFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => handlerFilter({ ...filter, query: e.target.value })}
        placeholder='Поиск...'
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort =>
          handlerFilter({ ...filter, sort: selectedSort })
        }
        defaultValue='Сортировка по'
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
