import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet, Dimensions, Platform } from 'react-native';
import MainText from '../../UI/MainText/MainText';
import ThemeColors from '../../UI/Theme/ThemeColors';


const button = props => (
  <TouchableHighlight onPress={props.onPress}>
    <View style={Platform.OS == 'ios' ?
      [styles.buttonIOS, {backgroundColor: props.backgroundColor}] :
      [styles.buttonAndroid, {backgroundColor: props.backgroundColor}]
    }>
    <View style={Platform.OS == 'ios' ? styles.contentsIOS : styles.contentsAndroid}>
      <MainText style={{color: props.color}}>{props.children}</MainText>
    </View>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  buttonIOS: {
    // borderColor: '#eeeeff',
    borderColor: ThemeColors.buttonBorder,
    alignItems: 'center',
    borderWidth: 1,
    margin: 1,
    height: Dimensions.get('window').height * 0.07
  },
  buttonAndroid: {
    // borderColor: '#eeeeff',
    borderColor: ThemeColors.buttonBorder,
    alignItems: 'center',
    borderWidth: 1,
    margin: 1,
    height: Dimensions.get('window').height * 0.06
  },
  contentsIOS: {
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height * 0.035 - 12,
    width: Dimensions.get('window').width * 0.32
  },
  contentsAndroid: {
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height * 0.03 - 12,
    width: Dimensions.get('window').width * 0.32
  }
});


export default button;