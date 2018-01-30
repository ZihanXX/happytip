import React from 'react';
import {StyleSheet, View} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText'
import ThemeColors from "../../UI/Theme/ThemeColors";


const splitPrice = props => (
  <View style={styles.pricesContainer}>
    <MainText style={{color: ThemeColors.theme}}> {props.concurrency} </MainText>
    <HeadingText> {props.splitBill} </HeadingText>
    <MainText>Split Price</MainText>
  </View>
);


const styles = StyleSheet.create({
  pricesContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  }
});


export default splitPrice;