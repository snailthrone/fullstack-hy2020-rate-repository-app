import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.barBackground,
    paddingTop: Constants.statusBarHeight * 2,
    paddingRight: Constants.statusBarHeight * 0.75,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight * 0.75,
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
