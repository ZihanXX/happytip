import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
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
    color: ThemeColors.textLight,
    paddingTop: 5
  },
  menu: {
    paddingRight: 15,
    paddingTop: 8
  },
  percentage: {
    paddingLeft: 10
  }
});


export default headingPanel;