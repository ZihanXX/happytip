import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Image, Button } from 'react-native';
import AngryFace from '../../assets/imgs/angry.png';
import NotHappyFace from '../../assets/imgs/nothappy.png';
import HappyFace from '../../assets/imgs/happy.png';
import SuperHappyFace from '../../assets/imgs/superhappy.png';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';


const facePanel = (props) => {


    var faceSource = '';
    if (props.tipPercentage < 10) { // noinspection JSAnnotator
      faceSource = AngryFace;
    } else if (props.tipPercentage < 15) { // noinspection JSAnnotator
      faceSource = NotHappyFace;
    } else if (props.tipPercentage < 20) { // noinspection JSAnnotator
      faceSource = HappyFace;
    } else if (props.tipPercentage < 30) { // noinspection JSAnnotator
      faceSource = SuperHappyFace;
    } else { // noinspection JSAnnotator
      faceSource = 'YOU ARE RICH';
    }



    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={props.minusPercentage}>
          <View><MainText> - </MainText></View>
        </TouchableHighlight>
        {
          faceSource == 'YOU ARE RICH' ?
            <View>
              <TouchableHighlight onPress={props.goToTipMe}>
                <View>
                  <HeadingText>YOU ARE RICH!</HeadingText>
                  <MainText>Consider tipping this app?</MainText>
                </View>
              </TouchableHighlight>
            </View>
            :
            <View>
              <Image source={faceSource} style={styles.imgStyle}/>
            </View>
        }
        <TouchableHighlight onPress={props.addPercentage}>
          <View><MainText> + </MainText></View>
        </TouchableHighlight>
      </View>
    );


}


const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  imgStyle: {
    height: 170,
    width: 170
  }
});


export default facePanel;