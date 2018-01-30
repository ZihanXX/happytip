import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText'
import ThemeColors from "../../UI/Theme/ThemeColors";


const splitPrice = props => (
  <View style={styles.pricesContainer}>

    <View style={styles.price}>
      <MainText style={{color: ThemeColors.theme}}> {props.concurrency} </MainText>
      <HeadingText style={{color: ThemeColors.keyRed}}> {props.splitBill} </HeadingText>
    </View>

    <View style={styles.label}>
      <MainText>Split Price</MainText>
    </View>

  </View>
);


const styles = StyleSheet.create({
  pricesContainer: {
    flexDirection:'row'
  },
  price: {
    justifyContent: 'flex-start',
    flexDirection:'row',
    width: Dimensions.get('window').width * 0.40
  },
  label: {
    justifyContent: 'flex-end',
    flexDirection:'row',
    width: Dimensions.get('window').width * 0.40
  }
});


export default splitPrice;