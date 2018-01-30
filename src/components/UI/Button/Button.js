import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet, Dimensions, Platform } from 'react-native';


const button = props => (
  <TouchableHighlight onPress={props.onPress}>
    <View style={Platform.OS == 'ios' ?
      [styles.buttonIOS, {backgroundColor: props.color}] :
      [styles.buttonAndroid, {backgroundColor: props.color}]
    }>
      <Text style={styles.contents}>{props.children}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  buttonIOS: {
    borderColor: '#bbb',
    borderWidth: 1,
    margin: 1,
    borderRadius: 2,
    height: Dimensions.get('window').height * 0.07
  },
  buttonAndroid: {
    borderColor: '#bbb',
    borderWidth: 1,
    margin: 1,
    borderRadius: 2,
    height: Dimensions.get('window').height * 0.06
  },
  contents: {
    width: Dimensions.get('window').width * 0.32
  }
});


export default button;