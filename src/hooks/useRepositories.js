import { useLazyQuery } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';

import { REPOSITORIES } from '../graphql/queries';

const useRepositories = variables => {
  const [getRepositories, { data, loading }] = useLazyQuery(REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  const [repositories, setRepositories] = useState();

  useEffect(() => {
    getRepositories({ variables });
  }, [variables]);

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return { repositories, loading, refetch: null };
};

export default useRepositories;
