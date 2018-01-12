import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';


const toggleTaxIncl = (props) => {

  let attachedStyles = null;
  if (props.show) {
    attachedStyles = [styles.dropBox, styles.open];
  } else {
    attachedStyles = [styles.dropBox, styles.close];
  }

  // let visible = false;
  // if (props.show) {
  //   visible = true;
  // } else {
  //   visible = false;
  // }

  return (

      <View>
        <Text style={attachedStyles}>Do you want to include tax? </Text>
      </View>
  );

}



const styles = StyleSheet.create({
  // dropBox: {
  //   height: 40,
  //   width: 150
  // },
  open: {
    color: 'red'
  },
  close: {
    color: 'blue'
  }
});



export default toggleTaxIncl;


