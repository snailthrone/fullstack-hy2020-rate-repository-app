import { useLazyQuery } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';
import { REPOSITORY } from '../graphql/queries';

const useRepository = repository => {
  const [id, setId] = useState(null);
  const [getRepository, { data }] = useLazyQuery(REPOSITORY, { fetchPolicy: 'cache-and-network' });

  useEffect(() => {
    if (repository) {
      setId(repository.params.id);
    }
  }, [repository]);

  useEffect(() => {
    if (id) {
      getRepository({ variables: { id } });
    }
  }, [id]);

  return data?.repository;
};

export default useRepository;
