import React from 'react';
import { View, Text, Button } from 'react-native';
import HappyTip from '../../containers/HappyTip/HappyTip';


class MainScreen extends React.Component {

  goToSettingsHandler = props => {
    this.props.navigator.toggleDrawer({
      side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
      animated: true, // does the toggle have transition animation or does it happen immediately (optional)
      to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
    });
    // this.props.navigator.push({
    //   screen: 'happy-tip.SettingsScreen',
    // });
  }

  render () {
    return (
      <HappyTip
        goToSettings={this.goToSettingsHandler}
      />
    );
  }
}


export default MainScreen;