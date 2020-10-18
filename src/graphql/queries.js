import { gql } from 'apollo-boost';

export const REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          ownerAvatarUrl
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

export const REPOSITORY = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      description
      forksCount
      fullName
      id
      language
      ownerAvatarUrl
      ratingAverage
      reviewCount
      stargazersCount
      url
    }
  }
`;
