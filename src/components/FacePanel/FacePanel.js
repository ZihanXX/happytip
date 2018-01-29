import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Image, Button } from 'react-native';
import Face1 from '../../assets/imgs/face1.png';
import Face2 from '../../assets/imgs/face2.png';
import Face3 from '../../assets/imgs/face3.png';
import Face4 from '../../assets/imgs/face4.png';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import Icon from 'react-native-vector-icons/Ionicons';


const facePanel = (props) => {


    var faceSource = '';
    if (props.tipPercentage < 15) { // noinspection JSAnnotator
      faceSource = Face1;
    } else if (props.tipPercentage < 18) { // noinspection JSAnnotator
      faceSource = Face2;
    } else if (props.tipPercentage < 20) { // noinspection JSAnnotator
      faceSource = Face3;
    } else if (props.tipPercentage < 30) { // noinspection JSAnnotator
      faceSource = Face4;
    } else { // noinspection JSAnnotator
      faceSource = 'YOU ARE RICH';
    }



    return (
      <View>

        <View style={styles.container}>
          {
            faceSource == 'YOU ARE RICH' ?
              <View>
                <TouchableHighlight onPress={props.goToTipMe}>
                  <View>
                    <HeadingText>Dude, You are rich!</HeadingText>
                    <MainText>Consider tipping this app?</MainText>
                  </View>
                </TouchableHighlight>
              </View>
              :
              <View>
                <Image source={faceSource} style={styles.imgStyle}/>
              </View>
          }
        </View>


        <View style={styles.container}>
          <TouchableHighlight onPress={props.minusPercentage}>
            <View><Icon size={25} name='md-remove' color='white' /></View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => props.setPercentageTo(15)}>
            <View><MainText> 15% </MainText></View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => props.setPercentageTo(18)}>
            <View><MainText> 18% </MainText></View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => props.setPercentageTo(20)}>
            <View><MainText> 20% </MainText></View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => props.setPercentageTo(25)}>
            <View><MainText> 25% </MainText></View>
          </TouchableHighlight>

          <TouchableHighlight onPress={props.addPercentage}>
            <View><Icon size={25} name='md-add' color='white' /></View>
          </TouchableHighlight>
        </View>
      </View>

    );


}


const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection:'row',
  },
  imgStyle: {
    height: 170,
    width: 170
  }
});


export default facePanel;