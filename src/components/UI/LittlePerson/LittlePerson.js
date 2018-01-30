import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import ThemeColors from '../../UI/Theme/ThemeColors';


const littlePerson = props => (
  <View style={styles.person}>
    {
      props.faces[props.idx - 1] ?
        <TouchableWithoutFeedback onPress={() => props.splitByHandler(props.idx)}>
          <IconFontAwesome size={props.size} name="user" color={ThemeColors.textLightTheme} />
        </TouchableWithoutFeedback>
        :
        <TouchableWithoutFeedback onPress={() => props.splitByHandler(props.idx)}>
          <IconFontAwesome size={props.size} name="user-o" color={ThemeColors.textLightTheme} />
        </TouchableWithoutFeedback>
    }
  </View>

);

const styles = StyleSheet.create({
  person: {
    width: 27
  }
});


export default littlePerson;