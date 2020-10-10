import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

const formatValue = value => {
  if (value >= 1000) {
    return `${Math.round((value / 1000) * 10) / 10} k`;
  }
  return value.toString();
};

const RepositoryStatsItem = ({ title, value }) => (
  <View style={styles.flexContainer}>
    <Text fontWeight="bold" style={{ marginBottom: 5 }}>
      {formatValue(value)}
    </Text>
    <Text color="textSecondary">{title}</Text>
  </View>
);

export default RepositoryStatsItem;
