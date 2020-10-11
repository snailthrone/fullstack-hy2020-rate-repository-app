import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: theme.colors.barBackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight * 2,
    paddingRight: Constants.statusBarHeight * 0.75,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight * 0.75,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  text: {
    color: theme.colors.barText,
  },
});

const AppBar = () => (
  <TouchableWithoutFeedback>
    <View style={styles.flexContainer}>
      <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
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
      </ScrollView>
    </View>
  </TouchableWithoutFeedback>
);

export default AppBar;
