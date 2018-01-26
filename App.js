import { Navigation } from 'react-native-navigation';

import MainScreen from './src/screens/MainScreen/MainScreen';
import SettingsScreen from './src/screens/Settings/SettingsScreen';
import SettingTaxRateScreen from './src/screens/Settings/SettingItems/SettingTaxRateScreen';
// import SettingLocationScreen from './src/screens/Settings/SettingItems/SettingLocationScreen';
import SettingConcurrencyScreen from './src/screens/Settings/SettingItems/SettingConcurrencyScreen';
import TipMeScreen from './src/screens/Settings/SettingItems/TipMeScreen';


Navigation.registerComponent("happy-tip.MainScreen", () => MainScreen);
Navigation.registerComponent("happy-tip.SettingsScreen", () => SettingsScreen);
Navigation.registerComponent("happy-tip.SettingTaxRateScreen", () => SettingTaxRateScreen);
// Navigation.registerComponent("happy-tip.SettingLocationScreen", () => SettingLocationScreen);
Navigation.registerComponent("happy-tip.SettingConcurrencyScreen", () => SettingConcurrencyScreen);
Navigation.registerComponent("happy-tip.TipMeScreen", () => TipMeScreen);


Navigation.startSingleScreenApp({
  screen: {
    screen: 'happy-tip.MainScreen', // unique ID registered with Navigation.registerScreen
    title: 'Happy Tip', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {
      navBarHidden: true
    }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  // drawer: {
  //   left: {
  //     screen: 'happy-tip.SettingsScreen', // unique ID registered with Navigation.registerScreen
  //     // passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  //     disableOpenGesture: false, // can the drawer be opened with a swipe instead of button (optional, Android only)
  //     // fixedWidth: '70%' // a fixed width you want your left drawer to have (optional) //只管android
  //   },
  //   style: { // ( iOS only )
  //     drawerShadow: false, // optional, add this if you want a side menu drawer shadow
  //     contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
  //     leftDrawerWidth: 70, // optional, add this if you want a define left drawer width (50=percent)
  //   },
  //   type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
  //   animationType: 'parallax', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
  //   disableOpenGesture: false // optional, can the drawer, both right and left, be opened with a swipe instead of button
  // },
  // // passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  // animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});

