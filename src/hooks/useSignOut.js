import { useApolloClient } from '@apollo/react-hooks';
import useAuthStorageContext from './useAuthStorageContext';

const useSignOut = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorageContext();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return [signOut];
};

export default useSignOut;
