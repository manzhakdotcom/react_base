import React from 'react';
import { usePagination } from '../../../hooks/usePagination';
import cl from './Pagination.module.css';

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div className={cl.page__wrapper}>
      {pagesArray.map(p => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={
            page === p ? [cl.page, cl.page__current].join(' ') : cl.page
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
