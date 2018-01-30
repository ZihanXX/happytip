import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText';
import ThemeColors from "../../../components/UI/Theme/ThemeColors";


class SettingConcurrencyScreen extends React.Component {

  render () {

    this.props.navigator.setStyle({
      navBarButtonColor: ThemeColors.theme
    });

    return (
      <View>
        <View style={styles.header}>
          <MainText>Your Concurrency:</MainText>
        </View>

        <TouchableHighlight onPress={() => this.props.setConcurrency('$')}>
          <View style={styles.item}>
            <MainText>$</MainText>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.setConcurrency('€')}>
          <View style={styles.item}>
            <MainText>€</MainText>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.setConcurrency('￡')}>
          <View style={styles.item}>
            <MainText>￡</MainText>
          </View>
        </TouchableHighlight>

        {/*<TouchableHighlight onPress={() => this.props.setConcurrency('￥')}>*/}
          {/*<View style={styles.item}>*/}
            {/*<MainText>￥</MainText>*/}
          {/*</View>*/}
        {/*</TouchableHighlight>*/}

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
  item: {
    margin: 10,
    alignItems: 'center'
  }
});


export default SettingConcurrencyScreen;