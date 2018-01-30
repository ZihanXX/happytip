import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Image, Button, StatusBar } from 'react-native';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import Icon from 'react-native-vector-icons/Ionicons';
import ThemeColors from '../../components/UI/Theme/ThemeColors';


const headingPanel = (props) => {

  return (


    <View style={styles.container}>

      <View style={styles.percentage}>
        <HeadingText style={styles.text}> {props.tipPercentage}% </HeadingText>
      </View>

      <View style={styles.menu}>
        <TouchableHighlight onPress={props.goToSettings}>
          <View>
            <Icon size={30} name='md-menu' color={ThemeColors.textLight} />
          </View>
        </TouchableHighlight>
      </View>

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingTop: 8
  },
  text: {
    color: ThemeColors.textLight
  },
  menu: {
    paddingRight: 15,
    paddingTop: 5
  },
  percentage: {
    paddingLeft: 10
  }
});


export default headingPanel;