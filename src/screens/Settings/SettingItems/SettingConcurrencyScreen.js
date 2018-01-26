import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText';


class SettingConcurrencyScreen extends React.Component {

  render () {
    return (
      <View>
        <View>
          <HeadingText>Concurrency: </HeadingText>
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

        <TouchableHighlight onPress={() => this.props.setConcurrency('￥')}>
          <View style={styles.item}>
            <MainText>￥</MainText>
          </View>
        </TouchableHighlight>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  item: {
    margin: 10,
    alignItems: 'center'
  }
});


export default SettingConcurrencyScreen;