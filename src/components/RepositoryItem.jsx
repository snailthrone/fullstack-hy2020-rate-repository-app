import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';

import theme from '../theme';
import Button from './Button';
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
    name: props.item.fullName,
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

export const RepositoryItemWithButton = props => {
  const onPress = () => {
    Linking.openURL(props.item.url);
  };

  return (
    <>
      <RepositoryItem {...props} />
      <View style={{ ...styles.flexContainer, paddingTop: 0 }}>
        <Button onPress={onPress} style={{ padding: 15 }} title="Open in GitHub" />
      </View>
    </>
  );
};

export default RepositoryItem;
