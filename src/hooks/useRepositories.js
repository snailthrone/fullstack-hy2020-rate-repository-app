import { useLazyQuery } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';

import { REPOSITORIES } from '../graphql/queries';

const checkParameters = object => {
  try {
    return Object.keys(object)
      .filter(key => !!object[key])
      .map(key => ({ [key]: object[key] }))
      .reduce((previousValue, currentValue) => ({ ...previousValue, ...currentValue }), {});
  } catch (e) {
    return undefined;
  }
};

const useRepositories = (orderBy, orderDirection, searchKeyword) => {
  const [getRepositories, { data, loading }] = useLazyQuery(REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  const [repositories, setRepositories] = useState();

  useEffect(() => {
    getRepositories({
      variables: { orderBy, orderDirection, searchKeyword },
    });
  }, [orderBy, orderDirection, searchKeyword]);

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return { repositories, loading, refetch: null };
};

export default useRepositories;
