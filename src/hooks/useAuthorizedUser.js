import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
  const [authorized, setAuthorized] = useState(false);
  const { data } = useQuery(AUTHORIZED_USER, { fetchPolicy: 'cache-and-network' });

  useEffect(() => {
    if (data) {
      setAuthorized(() => {
        if (data.authorizedUser === null) {
          return false;
        }
        return true;
      });
    }
  }, [data]);

  return authorized;
};

export default useAuthorizedUser;
