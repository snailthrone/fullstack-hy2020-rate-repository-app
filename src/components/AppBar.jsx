import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.barBackground,
    paddingTop: Constants.statusBarHeight * 2,
    paddingRight: Constants.statusBarHeight * 0.75,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight * 0.75,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: theme.colors.barText,
  },
});

const AppBar = () => (
  <TouchableWithoutFeedback>
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Link to="/">
          <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
            Repositories
          </Text>
        </Link>
        <Link to="/signin">
          <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
            Sign in
          </Text>
        </Link>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default AppBar;
