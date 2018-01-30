import React from 'react';
import {View, Text, StyleSheet, Button, Dimensions, TouchableHighlight, TouchableWithoutFeedback, StatusBar} from 'react-native';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native';
import ThemeColors from '../../components/UI/Theme/ThemeColors';



const settings = props => {

  return (

    <View>
      <StatusBar hidden={false} barStyle="dark-content" />

      <View style={styles.container}>

        <View style={styles.header}>
          <HeadingText>Welcome</HeadingText>
        </View>


        <TouchableHighlight onPress={props.goToTaxRate}>
          <View style={styles.settingItem}>
            <MainText>Tax rate</MainText>
            <View style={styles.settingItemInfo}>
              <MainText>{props.taxRate}  </MainText>
              <Icon size={25} name='ios-arrow-forward' color={ThemeColors.themeLight}/>
            </View>
          </View>
        </TouchableHighlight>


        <View style={styles.settingItem}>
          <MainText>Pay before tax</MainText>
          <View>
            <ToggleSwitch
              isOn={props.taxIncluded ? false : true}
              onColor={ThemeColors.themeLight}
              onToggle={props.toggleTaxIncl}
            />
          </View>
        </View>


        <TouchableHighlight onPress={props.goToConcurrency}>
          <View style={styles.settingItem}>
            <MainText>Concurrency</MainText>
            <View style={styles.settingItemInfo}>
              <MainText>{props.concurrency}  </MainText>
              <Icon size={25} name='ios-arrow-forward' color={ThemeColors.themeLight}/>
            </View>
          </View>
        </TouchableHighlight>


        <View style={styles.settingItem}></View>


        <TouchableHighlight onPress={() => {alert("go to app store")}}>
          <View style={styles.settingItem}>
            <MainText>Rate Me</MainText>
            <Icon size={25} name='ios-arrow-forward' color={ThemeColors.themeLight}/>
          </View>
        </TouchableHighlight>


        <TouchableHighlight onPress={props.goToTipMe}>
          <View style={styles.settingItem}>
            <MainText>Tip Me</MainText>
            <Icon size={25} name='ios-arrow-forward' color={ThemeColors.themeLight}/>
          </View>
        </TouchableHighlight>

      </View>


    </View>

  );
}


styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '98%',
    paddingTop: 30,
    paddingLeft: Dimensions.get('window').width * 0.05
  },
  settingItem: {
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  settingItemInfo: {
    flexDirection:'row',
  },
  header: {
    paddingBottom: 20
  }
});


export default settings;