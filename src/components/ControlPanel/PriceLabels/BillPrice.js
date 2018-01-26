import React from 'react';
import {StyleSheet, View} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText'


const billPrice = props => (
  <View style={styles.pricesContainer}>
    <MainText> {props.concurrency} </MainText>
    <HeadingText> {props.totalBill} </HeadingText>
    <MainText>Bill Price</MainText>
  </View>
);


const styles = StyleSheet.create({
  pricesContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  }
});


export default billPrice;