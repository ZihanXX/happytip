import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import FacePanel from '../../components/FacePanel/FacePanel';
import KeyBoard from '../../components/KeyBoard/KeyBoard';

import MainText from '../../components/UI/MainText/MainText';
import TextHeading from '../../components/UI/HeadingText/HeadingText';



const TAXES = {
  CA: 9
}

class HappyTip extends React.Component {

  state = {
    taxIncluded: true,
    taxRate: 9.25,
    tipPercentage: 15
  }



  render() {
    return (
      <View style={styles.container}>

        <View style={styles.facePanel} >
          <FacePanel
            tipPercentage={this.state.tipPercentage}
          />
        </View>

        <View style={styles.controlPanel} >
          <ControlPanel
            taxIncluded={this.state.taxIncluded}
            taxRate={this.state.taxRate}
            tipPercentage={this.state.tipPercentage}
          />
        </View>

        {/*<KeyBoard />*/}
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
    paddingTop: 20,
    height: '100%'
  },
  facePanel: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ce5f4',
    height: '50%',
    width: '100%'
  },
  controlPanel: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebfad1',
    height: '50%',
    width: '100%'
  }
});


export default HappyTip;