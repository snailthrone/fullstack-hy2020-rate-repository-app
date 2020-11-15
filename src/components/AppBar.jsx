import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

import theme from '../theme';
import Text from './Text';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import SignOut from './SignOut';

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

const AppBar = () => {
  const authorized = useAuthorizedUser();

  return (
    <TouchableWithoutFeedback>
      <View style={styles.flexContainer}>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
          <Link to="/">
            <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
              Repositories
            </Text>
          </Link>
          {authorized ? (
            <>
              <Link to="/reviewform">
                <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
                  Create a review
                </Text>
              </Link>
              <SignOut />
            </>
          ) : (
            <>
              <Link to="/signin">
                <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
                  Sign in
                </Text>
              </Link>
              <Link to="/signup">
                <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
                  Sign up
                </Text>
              </Link>
            </>
          )}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;
