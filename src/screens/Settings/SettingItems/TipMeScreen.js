import React from 'react';
import {View, Text, StatusBar, Linking, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText';
import ThemeColors from "../../../components/UI/Theme/ThemeColors";



class TipMeScreen extends React.Component {

  goToMyPersonalSite = () => {
    Linking.openURL('https://zihanx.com');
  }

  render () {

    this.props.navigator.setStyle({
      navBarButtonColor: ThemeColors.theme
    });

    return (
      <View>
        <StatusBar hidden={false} barStyle="dark-content" />

        <View style={styles.header}>
          <HeadingText>Thank You!</HeadingText>
        </View>

        <View style={styles.contents}>
          <MainText>Happy Tip is an independently designed and developed application, served on both iOS and Android platform.</MainText>
          <View style={{padding: 10}}></View>
          <MainText>I'm Zihan Xie. For advices and responses, if any, please contacts me via zihanxxie@gmail.com. Thanks in advance.</MainText>
        </View>

        <View style={{padding: 10}}></View>
        <TouchableOpacity onPress={this.goToMyPersonalSite}>
          <View style={{justifyContent: 'flex-end', flexDirection:'row', paddingRight: '6%'}}>
            <MainText style={{textDecorationLine: 'underline', justifyContent: 'flex-end', flexDirection:'row'}}>Zihan</MainText>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: Dimensions.get('window').width * 0.05
  },
  contents: {
    width: '90%',
    marginLeft: '5%'
  }
});


export default TipMeScreen;