import React from 'react';
import Settings from '../../components/Settings/Settings';


class SettingsScreen extends React.Component {

  state = {
    taxIncluded: this.props.taxIncluded,
    taxRate: this.props.taxRate,
    concurrency: this.props.concurrency
  }

  // goToLocationHandler = () => {
  //   this.props.navigator.push({
  //     screen: 'happy-tip.SettingLocationScreen',
  //   });
  // }

  goToTaxRateHandler = () => {
    this.props.navigator.push({
      screen: 'happy-tip.SettingTaxRateScreen',
    });
  }

  goToConcurrencyHandler = () => {
    this.props.navigator.push({
      screen: 'happy-tip.SettingConcurrencyScreen',
    });
  }

  toggleTaxInclHandler = () => {
    const taxIncluded = this.state.taxIncluded;
    this.setState({ taxIncluded: !taxIncluded });
    this.props.toggleTaxIncl();
  }

  goToTipMeHandler = () => {
    this.props.navigator.push({
      screen: 'happy-tip.TipMeScreen',
    });
  }

  render () {
    return (
      <Settings
        // goToLocation={this.goToLocationHandler}
        goToTaxRate={this.goToTaxRateHandler}
        taxRate={this.state.taxRate}
        taxIncluded={this.state.taxIncluded}
        toggleTaxIncl={this.toggleTaxInclHandler}
        goToConcurrency={this.goToConcurrencyHandler}
        concurrency={this.state.concurrency}
        goToTipMe={this.goToTipMeHandler}
      />
    );
  }
}


export default SettingsScreen;