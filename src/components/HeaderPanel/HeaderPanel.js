import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Image, Button } from 'react-native';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';


const headingPanel = (props) => {

  return (
    <View style={styles.container}>

      <View style={styles.percentage}>
        <HeadingText style={styles.text}> {props.tipPercentage}% </HeadingText>
      </View>

      <View style={styles.menu}>
        <TouchableHighlight onPress={props.goToSettings}>
          <View>
            <HeadingText style={styles.text}> # </HeadingText>
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
    paddingTop: 10
  },
  text: {
    color: 'white'
  },
  menu: {
    paddingLeft: 8
  },
  percentage: {
    paddingRight: 8
  }
});


export default headingPanel;