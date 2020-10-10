import React from 'react';
import { StyleSheet, View } from 'react-native';

import RepositoryStatsItem from './RepositoryStatsItem';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const RepositoryStats = ({ data }) => (
  <View style={styles.flexContainer}>
    {data.map(d => (
      <RepositoryStatsItem {...d} key={d.title} />
    ))}
  </View>
);

export default RepositoryStats;
