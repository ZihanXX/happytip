import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText'


const friendSplit = props => {
  if (props.splitBy <= 5) {
    return (
      <View style={styles.pricesContainer}>
        <Button title={props.faces[0]} onPress={() => props.splitByHandler(1)} ></Button>
        <Button title={props.faces[1]} onPress={() => props.splitByHandler(2)} ></Button>
        <Button title={props.faces[2]} onPress={() => props.splitByHandler(3)} ></Button>
        <Button title={props.faces[3]} onPress={() => props.splitByHandler(4)} ></Button>
        <Button title={props.faces[4]} onPress={() => props.splitByHandler(5)} ></Button>
        <Button title="+" onPress={() => props.splitByHandler(6)} ></Button>
        <MainText> Friends Split </MainText>
      </View>
    );
  } else {
    return (
      <View style={styles.pricesContainer}>
        <Button title="-" onPress={() => props.splitByHandler(props.splitBy - 1)} ></Button>
        <MainText> {props.splitBy} </MainText>
        <Button title="+" onPress={() => props.splitByHandler(props.splitBy + 1)} ></Button>
        <MainText> Friends Split </MainText>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  pricesContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  }
});


export default friendSplit;