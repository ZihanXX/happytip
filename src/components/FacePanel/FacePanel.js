import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Image, Button, Dimensions } from 'react-native';
import Face1 from '../../assets/imgs/face1.png';
import Face2 from '../../assets/imgs/face2.png';
import Face3 from '../../assets/imgs/face3.png';
import Face4 from '../../assets/imgs/face4.png';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import Icon from 'react-native-vector-icons/Ionicons';
import ThemeColors from '../../components/UI/Theme/ThemeColors';


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
              <View style={styles.imgContainer}>
                <TouchableHighlight onPress={props.goToTipMe}>
                  <View>
                    <HeadingText style={{color: ThemeColors.keyRed}}>Dude, You Are Rich!</HeadingText>
                    <MainText style={{color: ThemeColors.textLight}}>Consider Tipping This App?</MainText>
                  </View>
                </TouchableHighlight>
              </View>
              :
              <View style={styles.imgContainer}>
                <Image source={faceSource} style={styles.imgStyle}/>
              </View>
          }
        </View>


        <View style={styles.container}>
          <TouchableHighlight onPress={props.minusPercentage}>
            <View style={styles.icon}><Icon size={23} name='md-remove' color={ThemeColors.textLightTheme} /></View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => props.setPercentageTo(15)}>
            <View><MainText style={{color: ThemeColors.textLightTheme}}> 15% </MainText></View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => props.setPercentageTo(18)}>
            <View><MainText style={{color: ThemeColors.textLightTheme}}> 18% </MainText></View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => props.setPercentageTo(20)}>
            <View><MainText style={{color: ThemeColors.textLightTheme}}> 20% </MainText></View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => props.setPercentageTo(25)}>
            <View><MainText style={{color: ThemeColors.textLightTheme}}> 25% </MainText></View>
          </TouchableHighlight>

          <TouchableHighlight onPress={props.addPercentage}>
            <View style={styles.icon}><Icon size={23} name='md-add' color={ThemeColors.textLightTheme} /></View>
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
    paddingTop: 10
  },
  imgContainer: {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    height: (Dimensions.get('window').height * 0.5 - 65) * 0.65
  },
  imgStyle: {
    height: (Dimensions.get('window').height * 0.5 - 65) * 0.65,
    width: (Dimensions.get('window').height * 0.5 - 65) * 0.65
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 1
  }
});


export default facePanel;