import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import FacePanel from '../../components/FacePanel/FacePanel';



const TAXES = {
  CA: 9
}

class HappyTip extends React.Component {

  state = {
    taxIncluded: true
  }



  render() {
    return (
      <View style={styles.container}>
        <Text>HEY!</Text>
        <ControlPanel />
        <FacePanel />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    // flex: 1, //doesn't work for android
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100
  }
});


export default HappyTip;