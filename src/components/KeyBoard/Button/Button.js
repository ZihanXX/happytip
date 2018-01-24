import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';


const button = props => (
  <TouchableHighlight onPress={() => {alert('hahah');}}>
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text>{props.children}</Text>
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
  }
});


export default button;