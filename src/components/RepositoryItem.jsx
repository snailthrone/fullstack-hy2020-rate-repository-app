import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryInfo from './RepositoryInfo';

import RepositoryStats from './RepositoryStats';

const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: '#fff',
    display: 'flex',
    padding: 15,
  },
});

const RepositoryItem = props => {
  const info = {
    image: props.item.ownerAvatarUrl,
    name: props.item.fullName,
    description: props.item.description,
    language: props.item.language,
  };

  const stats = [
    { title: 'Stars', value: props.item.stargazersCount },
    { title: 'Forks', value: props.item.forksCount },
    { title: 'Reviews', value: props.item.reviewCount },
    { title: 'Rating', value: props.item.ratingAverage },
  ];

  return (
    <View style={styles.flexContainer}>
      <RepositoryInfo {...info} />
      <RepositoryStats data={stats} />
    </View>
  );
};

export default RepositoryItem;
