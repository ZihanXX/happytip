import React from 'react';
import {StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';


const friendSplit = props => {
  if (props.splitBy <= 5) {
    return (
      <View style={styles.pricesContainer}>
        {props.faces[0] ?
          <TouchableOpacity onPress={() => props.splitByHandler(1)}><IconFontAwesome size={25} name="user" color='gray' /></TouchableOpacity> :
          <TouchableOpacity onPress={() => props.splitByHandler(1)}><IconFontAwesome size={25} name="user-o" color='gray' /></TouchableOpacity>}
        {props.faces[1] ?
          <TouchableOpacity onPress={() => props.splitByHandler(2)}><IconFontAwesome size={25} name="user" color='gray' /></TouchableOpacity> :
          <TouchableOpacity onPress={() => props.splitByHandler(2)}><IconFontAwesome size={25} name="user-o" color='gray' /></TouchableOpacity>}
        {props.faces[2] ?
          <TouchableOpacity onPress={() => props.splitByHandler(3)}><IconFontAwesome size={25} name="user" color='gray' /></TouchableOpacity> :
          <TouchableOpacity onPress={() => props.splitByHandler(3)}><IconFontAwesome size={25} name="user-o" color='gray' /></TouchableOpacity>}
        {props.faces[3] ?
          <TouchableOpacity onPress={() => props.splitByHandler(4)}><IconFontAwesome size={25} name="user" color='gray' /></TouchableOpacity> :
          <TouchableOpacity onPress={() => props.splitByHandler(4)}><IconFontAwesome size={25} name="user-o" color='gray' /></TouchableOpacity>}
        {props.faces[4] ?
          <TouchableOpacity onPress={() => props.splitByHandler(5)}><IconFontAwesome size={25} name="user" color='gray' /></TouchableOpacity> :
          <TouchableOpacity onPress={() => props.splitByHandler(5)}><IconFontAwesome size={25} name="user-o" color='gray' /></TouchableOpacity>}

        <TouchableOpacity onPress={() => props.splitByHandler(props.splitBy + 1)}><Icon size={25} name='md-add' color='gray' /></TouchableOpacity>
        <MainText> Friends Split </MainText>
      </View>
    );
  } else {
    return (
      <View style={styles.pricesContainer}>
        <TouchableOpacity onPress={() => props.splitByHandler(props.splitBy - 1)}><Icon size={25} name='md-remove' color='gray' /></TouchableOpacity>
        <MainText> {props.splitBy} </MainText>
        <TouchableOpacity onPress={() => props.splitByHandler(props.splitBy + 1)}><Icon size={25} name='md-add' color='gray' /></TouchableOpacity>
        <MainText> Friends Split </MainText>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  pricesContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  }
});


export default friendSplit;