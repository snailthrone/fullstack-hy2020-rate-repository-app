import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import RepositoryInfo from './RepositoryInfo';

import RepositoryStats from './RepositoryStats';

const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: theme.colors.containerBackground,
    display: 'flex',
    padding: 15,
  },
});

const RepositoryItem = props => {
  const info = {
    image: props.item.ownerAvatarUrl,
    name: props.item.name,
    description: props.item.description,
    language: props.item.language,
  };

  const stats = [
    { testID: 'repositoryStars', title: 'Stars', value: props.item.stargazersCount },
    { testID: 'repositoryForks', title: 'Forks', value: props.item.forksCount },
    { testID: 'repositoryReviews', title: 'Reviews', value: props.item.reviewCount },
    { testID: 'repositoryRating', title: 'Rating', value: props.item.ratingAverage },
  ];

  return (
    <View style={styles.flexContainer} testID="repositoryItem">
      <RepositoryInfo {...info} />
      <RepositoryStats data={stats} />
    </View>
  );
};

export default RepositoryItem;
