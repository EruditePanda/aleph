import queryString from 'query-string';

export default function getCollectionLink(collection) {
  if (collection.casefile) {
    return {
      pathname: '/cases/' + collection.id
    };
  } else {
    return {
      pathname: '/search',
      search: queryString.stringify({
        'filter:collection_id': collection.id
      }),
      hash: queryString.stringify({
        'preview:id': collection.id,
        'preview:type': 'collection'
      })
    };
  }
};
