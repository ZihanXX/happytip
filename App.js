import { Navigation } from 'react-native-navigation';

import MainScreen from './src/screens/MainScreen/MainScreen';
import SettingsScreen from './src/screens/Settings/SettingsScreen';
import SettingTaxRateScreen from './src/screens/Settings/SettingItems/SettingTaxRateScreen';
import SettingConcurrencyScreen from './src/screens/Settings/SettingItems/SettingConcurrencyScreen';
import TipMeScreen from './src/screens/Settings/SettingItems/TipMeScreen';


Navigation.registerComponent("happy-tip.MainScreen", () => MainScreen);
Navigation.registerComponent("happy-tip.SettingsScreen", () => SettingsScreen);
Navigation.registerComponent("happy-tip.SettingTaxRateScreen", () => SettingTaxRateScreen);
Navigation.registerComponent("happy-tip.SettingConcurrencyScreen", () => SettingConcurrencyScreen);
Navigation.registerComponent("happy-tip.TipMeScreen", () => TipMeScreen);


Navigation.startSingleScreenApp({
  screen: {
    screen: 'happy-tip.MainScreen',
    title: 'Happy Tip',
    navigatorStyle: {
      navBarHidden: true
    },
    appStyle: {
      keepStyleAcrossPush: false
    }
  }
});

