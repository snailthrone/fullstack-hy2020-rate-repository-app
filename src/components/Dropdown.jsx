import React from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import theme from '../theme';

const styles = StyleSheet.create({
  inputIOS: {
    fontSize: theme.fontSizes.body,
    paddingVertical: 16,
    paddingHorizontal: 16,
    color: theme.colors.textPrimary,
    paddingRight: 32,
  },
  inputAndroid: {
    fontSize: theme.fontSizes.body,
    paddingHorizontal: 16,
    paddingVertical: 16,
    color: theme.colors.textPrimary,
    paddingRight: 32,
  },
  placeholder: {
    color: theme.colors.textPrimary,
  },
});

const Dropdown = ({ items, onValueChange }) => (
  <RNPickerSelect
    items={items}
    onValueChange={onValueChange}
    style={styles}
    useNativeAndroidPickerStyle={false}
  />
);

export default Dropdown;
