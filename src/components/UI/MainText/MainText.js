import React from 'react';
import {Text, StyleSheet} from 'react-native';
import ThemeColors from '../../UI/Theme/ThemeColors';

const mainText = props => (
  <Text {...props} style={[styles.mainText, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
  mainText: {
    fontSize: 18,
    color: ThemeColors.textDark
  }
});

export default mainText;