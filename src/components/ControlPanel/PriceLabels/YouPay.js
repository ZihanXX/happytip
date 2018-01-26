import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText'


const youPay = props => (
  <View style={styles.pricesContainer}>
    <MainText> {props.concurrency} </MainText>
    <HeadingText> {props.youPay} </HeadingText>
    <MainText>You Pay</MainText>
    <TouchableOpacity onPress={props.toggleTaxInclHandler}>
      <View>
        {props.taxIncluded ?
          <Text>{props.taxRate}% tax incl.</Text> :
          <Text>{props.taxRate}% tax excl.</Text>
        }
      </View>
    </TouchableOpacity>
  </View>
);


const styles = StyleSheet.create({
  pricesContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  }
});


export default youPay;