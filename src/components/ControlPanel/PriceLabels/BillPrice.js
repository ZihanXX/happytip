import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText';
import ThemeColors from '../../UI/Theme/ThemeColors';


const billPrice = props => (
  <View style={styles.pricesContainer}>
    <MainText style={{color: ThemeColors.theme}}> {props.concurrency} </MainText>
    {props.totalBill == '' || Number(props.totalBill) == 0 ?
      <MainText style={{color: ThemeColors.textLightTheme}}>Tap to Input </MainText> :
      <HeadingText> {props.totalBill} </HeadingText>
    }
    <MainText>Bill Price</MainText>
  </View>
);


const styles = StyleSheet.create({
  pricesContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row'
  }
});


export default billPrice;