import { connect } from 'react-redux';

import { clearSearch, search } from '../actions/search.action';

import Search from '../components/Search';

export const mapStateToProps = ({ search }) => {
  const { loading, nextPageToken, pageInfo, success, searchResults } = search;

  return {
    loading,
    nextPageToken,
    pageInfo,
    success,
    searchResults
  };
};

export default connect(mapStateToProps, {
  clearSearch,
  search
})(Search);
