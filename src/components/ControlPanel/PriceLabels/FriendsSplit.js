import React from 'react';
import {StyleSheet, View, Button, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import ThemeColors from '../../UI/Theme/ThemeColors';


const friendSplit = props => {
  if (props.splitBy <= 5) {
    return (
      <View style={styles.pricesContainer}>
        {props.faces[0] ?
          <TouchableWithoutFeedback onPress={() => props.splitByHandler(1)}><IconFontAwesome size={25} name="user" color={ThemeColors.textLightTheme} /></TouchableWithoutFeedback> :
          <TouchableWithoutFeedback onPress={() => props.splitByHandler(1)}><IconFontAwesome size={25} name="user-o" color={ThemeColors.textLightTheme} /></TouchableWithoutFeedback>}
        {props.faces[1] ?
          <TouchableWithoutFeedback onPress={() => props.splitByHandler(2)}><IconFontAwesome size={25} name="user" color={ThemeColors.textLightTheme} /></TouchableWithoutFeedback> :
          <TouchableWithoutFeedback onPress={() => props.splitByHandler(2)}><IconFontAwesome size={25} name="user-o" color={ThemeColors.textLightTheme} /></TouchableWithoutFeedback>}
        {props.faces[2] ?
          <TouchableWithoutFeedback onPress={() => props.splitByHandler(3)}><IconFontAwesome size={25} name="user" color={ThemeColors.textLightTheme} /></TouchableWithoutFeedback> :
          <TouchableWithoutFeedback onPress={() => props.splitByHandler(3)}><IconFontAwesome size={25} name="user-o" color={ThemeColors.textLightTheme} /></TouchableWithoutFeedback>}
        {props.faces[3] ?
          <TouchableWithoutFeedback onPress={() => props.splitByHandler(4)}><IconFontAwesome size={25} name="user" color={ThemeColors.textLightTheme} /></TouchableWithoutFeedback> :
          <TouchableWithoutFeedback onPress={() => props.splitByHandler(4)}><IconFontAwesome size={25} name="user-o" color={ThemeColors.textLightTheme} /></TouchableWithoutFeedback>}
        {props.faces[4] ?
          <TouchableWithoutFeedback onPress={() => props.splitByHandler(5)}><IconFontAwesome size={25} name="user" color={ThemeColors.textLightTheme} /></TouchableWithoutFeedback> :
          <TouchableWithoutFeedback onPress={() => props.splitByHandler(5)}><IconFontAwesome size={25} name="user-o" color={ThemeColors.textLightTheme} /></TouchableWithoutFeedback>}

        <TouchableOpacity onPress={() => props.splitByHandler(props.splitBy + 1)}><Icon size={25} name='md-add' color={ThemeColors.textLightTheme} /></TouchableOpacity>
        <MainText> Friends Split </MainText>
      </View>
    );
  } else {
    return (
      <View style={styles.pricesContainer}>
        <TouchableOpacity onPress={() => props.splitByHandler(props.splitBy - 1)}><Icon size={25} name='md-remove' color={ThemeColors.textLightTheme} /></TouchableOpacity>
        <HeadingText> {props.splitBy} </HeadingText>
        <TouchableOpacity onPress={() => props.splitByHandler(props.splitBy + 1)}><Icon size={25} name='md-add' color={ThemeColors.textLightTheme} /></TouchableOpacity>
        <MainText> Friends Split </MainText>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  pricesContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
    flexDirection:'row',
  }
});


export default friendSplit;