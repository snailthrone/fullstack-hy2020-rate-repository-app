import React from 'react';
import { render } from '@testing-library/react-native';

import { RepositoryListContainer } from '../../components/RepositoryList';
import formatValue from '../../utils/formatValue';

const repositories = {
  pageInfo: {
    totalCount: 8,
    hasNextPage: true,
    endCursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
  },
  edges: [
    {
      node: {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 3,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
      },
      cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    {
      node: {
        id: 'async-library.react-async',
        fullName: 'async-library/react-async',
        description: 'Flexible promise-based React data loader',
        language: 'JavaScript',
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 3,
        ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/54310907?v=4',
      },
      cursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    },
  ],
};

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
      const repositoryNames = getAllByTestId('repositoryName');
      const repositoryDescriptions = getAllByTestId('repositoryDescription');
      const repositoryLanguages = getAllByTestId('repositoryLanguage');
      const repositoryForks = getAllByTestId('repositoryForks');
      const repositoryStars = getAllByTestId('repositoryStars');
      const repositoryRatings = getAllByTestId('repositoryRating');
      const repositoryReviews = getAllByTestId('repositoryReviews');

      repositoryNames.forEach((name, i) => {
        expect(name).toHaveTextContent(repositories.edges[i].node.name);
      });
      repositoryDescriptions.forEach((description, i) => {
        expect(description).toHaveTextContent(repositories.edges[i].node.description);
      });
      repositoryLanguages.forEach((language, i) => {
        expect(language).toHaveTextContent(repositories.edges[i].node.language);
      });
      repositoryForks.forEach((forks, i) => {
        expect(forks).toHaveTextContent(formatValue(repositories.edges[i].node.forksCount));
      });
      repositoryStars.forEach((stars, i) => {
        expect(stars).toHaveTextContent(formatValue(repositories.edges[i].node.stargazersCount));
      });
      repositoryRatings.forEach((rating, i) => {
        expect(rating).toHaveTextContent(formatValue(repositories.edges[i].node.ratingAverage));
      });
      repositoryReviews.forEach((review, i) => {
        expect(review).toHaveTextContent(formatValue(repositories.edges[i].node.reviewCount));
      });
    });
  });
});
