import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.barBackground,
    paddingTop: Constants.statusBarHeight,
    paddingRight: Constants.statusBarHeight / 2,
    paddingBottom: Constants.statusBarHeight / 2,
    paddingLeft: Constants.statusBarHeight / 2,
  },
  text: {
    color: theme.colors.barText,
  },
});

const AppBar = () => (
  <TouchableWithoutFeedback>
    <View style={styles.container}>
      <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
        Repositories
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

export default AppBar;
