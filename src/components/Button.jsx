import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    display: 'flex',
    padding: 15,
  },
  title: {
    color: '#ffffff',
  },
});

const Button = ({ onPress, testID, title }) => {
  return (
    <TouchableOpacity testID={testID} onPress={onPress}>
      <View style={styles.container}>
        <Text fontWeight="bold" style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
