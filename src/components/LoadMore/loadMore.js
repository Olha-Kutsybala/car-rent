import { LoadMoreBtn } from './loadMore.styled';

const LoadMore = ({ getPage }) => {
  return (
    <LoadMoreBtn type="button" onClick={getPage}>
      Load more
    </LoadMoreBtn>
  );
};
export default LoadMore;
