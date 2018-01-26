import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';


const button = props => (
  <TouchableHighlight onPress={props.onPress}>
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text style={styles.contents}>{props.children}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    borderColor: '#bbb',
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 2
  },
  contents: {
    width: 50
  }
});


export default button;