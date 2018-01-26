import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../KeyBoard/Button/Button';


const keyBoard = props => {

  return (
    <View>

      <View style={styles.container}>
        <Button onPress={() => props.billPriceHandler('1')}>1</Button>
        <Button onPress={() => props.billPriceHandler('2')}>2</Button>
        <Button onPress={() => props.billPriceHandler('3')}>3</Button>
      </View>

      <View style={styles.container}>
        <Button onPress={() => props.billPriceHandler('4')}>4</Button>
        <Button onPress={() => props.billPriceHandler('5')}>5</Button>
        <Button onPress={() => props.billPriceHandler('6')}>6</Button>
      </View>

      <View style={styles.container}>
        <Button onPress={() => props.billPriceHandler('7')}>7</Button>
        <Button onPress={() => props.billPriceHandler('8')}>8</Button>
        <Button onPress={() => props.billPriceHandler('9')}>9</Button>
      </View>

      <View style={styles.container}>
        <Button onPress={() => props.billPriceHandler('.')}>.</Button>
        <Button onPress={() => props.billPriceHandler('0')}>0</Button>
        <Button onPress={() => props.billPriceHandler('del')}>DEL</Button>
      </View>

      <Button
        color='#e45c69'
        onPress={() => props.doTheCalculate(props.splitBy)}
      >DONE</Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  }
});

export default keyBoard;