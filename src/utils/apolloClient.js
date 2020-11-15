import ApolloClient, { gql } from 'apollo-boost';
import Constants from 'expo-constants';

const createApolloClient = authStorage => {
  return new ApolloClient({
    request: async operation => {
      try {
        const accessToken = await authStorage.getAccessToken();
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
    typeDefs: gql`
      enum AllRepositoriesOrderBy {
        CREATED_AT
        RATING_AVERAGE
      }
      enum OrderDirection {
        ASC
        DESC
      }
    `,
    uri: Constants.manifest.extra.apolloUri,
  });
};

export default createApolloClient;
