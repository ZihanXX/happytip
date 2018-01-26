import React from 'react';
import {View, Text, StyleSheet, Button, Dimensions, TouchableHighlight} from 'react-native';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';


const settings = props => {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <HeadingText>This is the settings</HeadingText>
      </View>


      <TouchableHighlight onPress={props.goToTaxRate}>
        <View style={styles.settingItem}>
          <MainText>Tax rate</MainText>
          <MainText>{props.taxRate} > </MainText>
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
          <MainText>{props.concurrency} > </MainText>
        </View>
      </TouchableHighlight>


      <View style={styles.settingItem}></View>

      <TouchableHighlight onPress={() => {alert("go to app store")}}>
        <View style={styles.settingItem}>
          <MainText>Rate Me</MainText>
          <MainText> > </MainText>
        </View>
      </TouchableHighlight>


      <TouchableHighlight onPress={props.goToTipMe}>
        <View style={styles.settingItem}>
          <MainText>Tip Me</MainText>
          <MainText> > </MainText>
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
  header: {
    margin: 20
  }
});


export default settings;