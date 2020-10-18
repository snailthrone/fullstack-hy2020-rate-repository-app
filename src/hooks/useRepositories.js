import { useQuery } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';

import { REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(REPOSITORIES, { fetchPolicy: 'cache-and-network' });
  const [repositories, setRepositories] = useState();

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return { repositories, loading, refetch: null };
};

export default useRepositories;
