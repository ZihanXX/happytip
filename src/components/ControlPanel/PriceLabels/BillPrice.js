import React from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText';
import ThemeColors from '../../UI/Theme/ThemeColors';


const billPrice = props => (
  <View style={styles.pricesContainer}>

    <View style={styles.price}>
      <MainText style={{color: ThemeColors.theme}}> {props.concurrency} </MainText>

      {props.totalBill == '' || Number(props.totalBill) == 0 ?
        <MainText style={{color: ThemeColors.textLightTheme}}>Tap to Input </MainText> :
        <HeadingText> {props.totalBill} </HeadingText>
      }
    </View>

    <View style={styles.label}>
      <MainText>Bill Price</MainText>
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


export default billPrice;