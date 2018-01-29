import React from 'react';
import {View, Text, StyleSheet, Button, Dimensions, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import Icon from 'react-native-vector-icons/Ionicons';


const settings = props => {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <HeadingText>This is the settings</HeadingText>
      </View>


      <TouchableHighlight onPress={props.goToTaxRate}>
        <View style={styles.settingItem}>
          <MainText>Tax rate</MainText>
          <View style={styles.settingItemInfo}>
            <MainText>{props.taxRate}  </MainText>
            <Icon size={25} name='ios-arrow-forward' color='gray'/>
          </View>
        </View>
      </TouchableHighlight>


      <TouchableHighlight onPress={props.toggleTaxIncl}>
        <View style={styles.settingItem}>
          <MainText>Tax Included</MainText>

          {props.taxIncluded ?
            <MainText>yes</MainText> :
            <MainText>no</MainText>
          }
        </View>
      </TouchableHighlight>


      <TouchableHighlight onPress={props.goToConcurrency}>
        <View style={styles.settingItem}>
          <MainText>Concurrency</MainText>
          <View style={styles.settingItemInfo}>
            <MainText>{props.concurrency}  </MainText>
            <Icon size={25} name='ios-arrow-forward' color='gray'/>
          </View>
        </View>
      </TouchableHighlight>


      <View style={styles.settingItem}></View>

      <TouchableHighlight onPress={() => {alert("go to app store")}}>
        <View style={styles.settingItem}>
          <MainText>Rate Me</MainText>
          <Icon size={25} name='ios-arrow-forward' color='gray'/>
        </View>
      </TouchableHighlight>


      <TouchableHighlight onPress={props.goToTipMe}>
        <View style={styles.settingItem}>
          <MainText>Tip Me</MainText>
          <Icon size={25} name='ios-arrow-forward' color='gray'/>
        </View>
      </TouchableHighlight>


    </View>
  );
}


styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    height: '100%',
    width: Dimensions.get("window").width,
    backgroundColor: 'white'
  },
  settingItem: {
    margin: 10,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  settingItemInfo: {
    flexDirection:'row',
  },
  header: {
    margin: 20
  }
});


export default settings;