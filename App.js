import React from 'react';
import { View, Text } from 'react-native';
import HappyTip from './src/containers/HappyTip/HappyTip';

export default class App extends React.Component {

  render() {
    return (
      <View>
        <HappyTip />
      </View>
    );
  }
}

