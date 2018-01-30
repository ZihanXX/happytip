import React from 'react';
import Settings from '../../components/Settings/Settings';
import ThemeColors from '../../components/UI/Theme/ThemeColors';




class SettingsScreen extends React.Component {

  state = {
    taxIncluded: this.props.taxIncluded,
    taxRate: this.props.taxRate,
    concurrency: this.props.concurrency
  }


  goToTaxRateHandler = () => {
    this.props.navigator.push({
      screen: 'happy-tip.SettingTaxRateScreen',
      passProps: {
        taxRate: this.props.taxRate,
        setTaxRate: this.setTaxRateHandler
      }
    });
  }

  goToConcurrencyHandler = () => {
    this.props.navigator.push({
      screen: 'happy-tip.SettingConcurrencyScreen',
      passProps: {
        setConcurrency: this.setConcurrencyHanlder
      }
    });
  }

  setConcurrencyHanlder = (concurrency) => {
    this.setState({ concurrency: concurrency });
    this.props.setConcurrency(concurrency);
  }

  toggleTaxInclHandler = () => {
    const taxIncluded = this.state.taxIncluded;
    this.setState({ taxIncluded: !taxIncluded });
    this.props.toggleTaxIncl();
  }

  setTaxRateHandler = (taxRate) => {
    this.setState({ taxRate: taxRate });
    this.props.setTaxRate(taxRate);
  }

  goToTipMeHandler = () => {
    this.props.navigator.push({
      screen: 'happy-tip.TipMeScreen',
    });
  }



  render () {

    this.props.navigator.setStyle({
      navBarButtonColor: ThemeColors.theme
    });

    return (
      <Settings
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