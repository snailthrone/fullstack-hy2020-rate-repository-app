import { useQuery } from '@apollo/react-hooks';

import { REPOSITORIES } from '../graphql/queries';

const useRepositories = variables => {
  const { data, loading, fetchMore, ...result } = useQuery(REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [...previousResult.repositories.edges, ...fetchMoreResult.repositories.edges],
          },
        };

        return nextResult;
      },
    });
  };

  return { repositories: data?.repositories, fetchMore: handleFetchMore, loading, ...result };
};

export default useRepositories;
