import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import ThemeColors from "../../../components/UI/Theme/ThemeColors";


class TipMeScreen extends React.Component {

  render () {

    this.props.navigator.setStyle({
      navBarButtonColor: ThemeColors.theme
    });

    return (
      <View>
        <StatusBar hidden={false} barStyle="dark-content" />

        <Text>Considering Supporting Us?</Text>
      </View>
    );
  }
}


export default TipMeScreen;