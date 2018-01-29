import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../../UI/Button/Button';
import Icon from 'react-native-vector-icons/Ionicons';


const keyBoard = props => {

  return (
    <View>

      <View style={styles.container}>
        <Button onPress={() => props.typeTaxRate('1')}>1</Button>
        <Button onPress={() => props.typeTaxRate('2')}>2</Button>
        <Button onPress={() => props.typeTaxRate('3')}>3</Button>
      </View>

      <View style={styles.container}>
        <Button onPress={() => props.typeTaxRate('4')}>4</Button>
        <Button onPress={() => props.typeTaxRate('5')}>5</Button>
        <Button onPress={() => props.typeTaxRate('6')}>6</Button>
      </View>

      <View style={styles.container}>
        <Button onPress={() => props.typeTaxRate('7')}>7</Button>
        <Button onPress={() => props.typeTaxRate('8')}>8</Button>
        <Button onPress={() => props.typeTaxRate('9')}>9</Button>
      </View>

      <View style={styles.container}>
        <Button onPress={() => props.typeTaxRate('.')}>.</Button>
        <Button onPress={() => props.typeTaxRate('0')}>0</Button>
        <Button onPress={() => props.typeTaxRate('del')}><Icon size={25} name='ios-backspace'/></Button>
      </View>

      <Button
        color='#e45c69'
        onPress={props.setTaxRate}
      >Set Tax Rate</Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection:'row',
    // alignItems: 'center',
  }
});

export default keyBoard;