import { useContext } from 'react';

import AuthStorageContext from '../contexts/AuthStorageContext';

const useAuthStorageContext = () => {
  const context = useContext(AuthStorageContext);
  if (context === undefined) {
    throw new Error('useAuthStorageContext must be within a AuthStorageProvider');
  }
  return context;
};

export default useAuthStorageContext;
