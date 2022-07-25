import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  SelectCurrentPage,
  SelectPerPage,
  SelectTotalCount,
} from '../../../bll/selectors/selectors';
import { setCurrentPage } from '../../../bll/slices/beers';
import { createPages } from '../../utilsFunc/createPages/createPages';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(SelectCurrentPage);
  const perPage = useSelector(SelectPerPage);
  const totalCount = useSelector(SelectTotalCount);
  const pagesCount = Math.ceil(totalCount / perPage);

  const pages: number[] = [];
  createPages(pages, pagesCount, currentPage);
  return (
    <div>
      {pages.map((page, index) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <span
          key={index.toString() + page}
          onClick={() => dispatch(setCurrentPage({ page }))}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
