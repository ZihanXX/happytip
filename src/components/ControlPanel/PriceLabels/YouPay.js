import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText'
import ThemeColors from "../../UI/Theme/ThemeColors";


const youPay = props => (
  <View style={styles.pricesContainer}>
    <MainText style={{color: ThemeColors.theme}}> {props.concurrency} </MainText>
    <HeadingText> {props.youPay} </HeadingText>

    <View>
      <TouchableOpacity onPress={props.toggleTaxInclHandler}>
        <MainText>You Pay</MainText>
        <View>
          {props.taxIncluded ?
            <Text style={{color: ThemeColors.textLightTheme}}>Tip After Tax</Text> :
            <Text style={{color: ThemeColors.textLightTheme}}>Tip Before {props.taxRate}% Tax</Text>
          }
        </View>
      </TouchableOpacity>
    </View>

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