import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from './Text';
import theme from '../theme';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  ratingContainer: {
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderRadius: 50 / 2,
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  reviewContainer: {
    backgroundColor: theme.colors.containerBackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 8,
    padding: 16,
    paddingBottom: 12,
  },
  textContainer: {
    display: 'flex',
    flexShrink: 1,
    flexDirection: 'column',
    paddingLeft: 16,
  },
  text: {
    marginBottom: 4,
  },
});

const Review = props => {
  const {
    createdAt,
    rating,
    text,
    user: { username },
  } = props;
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingContainer}>
        <Text color="primary" fontSize="subheading" fontWeight="bold">
          {rating}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text fontWeight="bold" style={styles.text}>
          {username}
        </Text>
        <Text color="textSecondary" style={styles.text}>
          {format(new Date(createdAt), 'dd.MM.yyyy')}
        </Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default Review;
