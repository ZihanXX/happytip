import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Dimensions} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText'
import ThemeColors from "../../UI/Theme/ThemeColors";


const youPay = props => (
  <View style={styles.pricesContainer}>


    <View style={styles.price}>
      <MainText style={{color: ThemeColors.theme}}> {props.concurrency} </MainText>
      <HeadingText> {props.youPay} </HeadingText>
    </View>


    <View style={styles.label}>
      <TouchableOpacity onPress={props.toggleTaxInclHandler}>

        <View style={styles.label}>
          <MainText>You Pay</MainText>
        </View>

        <View style={styles.label}>
          {props.taxIncluded ?
            <Text style={{color: ThemeColors.textLightTheme}}>Tip After Tax</Text> :
            <Text style={{color: ThemeColors.textLightTheme}}>Before {props.taxRate}% Tax</Text>
          }
        </View>

      </TouchableOpacity>
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


export default youPay;