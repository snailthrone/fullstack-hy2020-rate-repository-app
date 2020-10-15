import { useQuery } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network' });
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const repositoryNodes = data ? data.repositories.edges.map(({ node }) => node) : [];
    setRepositories(repositoryNodes);
  }, [data]);

  return { repositories, loading, refetch: null };
};

export default useRepositories;
