import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import FacePanel from '../../components/FacePanel/FacePanel';
import HeadingPanel from '../../components/HeaderPanel/HeaderPanel';
import KeyBoard from '../../components/KeyBoard/KeyPad';


const TAXES = {
  CA: 9
}


class MainScreen extends React.Component {

  state = {
    taxIncluded: true,
    taxRate: 9.25,
    tipPercentage: 15,
    totalBill: '',
    splitBy: 1,
    youPay: 0,
    splitBill: 0,
    concurrency: '￥'
  }


  addPercentage = () => {
    const tipPercentage = this.state.tipPercentage < 100 ? this.state.tipPercentage : 100;
    this.setState({ tipPercentage: tipPercentage + 1 });
    const totalBill = this.state.totalBill;
    const taxRate = this.state.taxRate;
    const taxIncluded = this.state.taxIncluded;
    const newTipPercentage = tipPercentage + 1;
    const youPay = taxIncluded
      ? totalBill * (1.00 + newTipPercentage / 100.00)
      : totalBill / (1.00 + taxRate / 100.00) * (1.00 + newTipPercentage / 100.00);
    const splitBy = this.state.splitBy;
    const splitBill = youPay / splitBy;
    this.setState({ youPay: youPay.toFixed(2) });
    this.setState({ splitBill: splitBill.toFixed(2) });
  }

  minusPercentage = () => {
    const tipPercentage = this.state.tipPercentage > 0 ? this.state.tipPercentage : 0;
    this.setState({ tipPercentage: tipPercentage - 1 });
    const totalBill = this.state.totalBill;
    const taxRate = this.state.taxRate;
    const taxIncluded = this.state.taxIncluded;
    const newTipPercentage = tipPercentage - 1;
    const youPay = taxIncluded
      ? totalBill * (1.00 + newTipPercentage / 100.00)
      : totalBill / (1.00 + taxRate / 100.00) * (1.00 + newTipPercentage / 100.00);
    const splitBy = this.state.splitBy;
    const splitBill = youPay / splitBy;
    this.setState({ youPay: youPay.toFixed(2) });
    this.setState({ splitBill: splitBill.toFixed(2) });
  }

  doTheCalculate = (splitBy) => {
    const totalBill = this.state.totalBill;
    const tipPercentage = this.state.tipPercentage;
    const taxRate = this.state.taxRate;
    const taxIncluded = this.state.taxIncluded;
    const youPay = taxIncluded
      ? totalBill * (1.00 + tipPercentage / 100.00)
      : totalBill / (1.00 + taxRate / 100.00) * (1.00 + tipPercentage / 100.00);
    const splitBill = youPay / splitBy;
    this.setState({ splitBy: splitBy });
    this.setState({ youPay: youPay.toFixed(2) });
    this.setState({ splitBill: splitBill.toFixed(2) });
  }

  toggleTaxInclHandler = () => {
    const taxIncluded = this.state.taxIncluded;
    this.setState({ taxIncluded: !taxIncluded });
    const totalBill = this.state.totalBill;
    const tipPercentage = this.state.tipPercentage;
    const taxRate = this.state.taxRate;
    const youPay = !taxIncluded
      ? totalBill * (1.00 + tipPercentage / 100.00)
      : totalBill / (1.00 + taxRate / 100.00) * (1.00 + tipPercentage / 100.00);
    const splitBy = this.state.splitBy;
    const splitBill = youPay / splitBy;
    this.setState({ splitBy: splitBy });
    this.setState({ youPay: youPay.toFixed(2) });
    this.setState({ splitBill: splitBill.toFixed(2) });
  }

  billPriceHandler = (key) => {
    var totalBill = String(this.state.totalBill);
    if (key === 'del') {
      totalBill = totalBill.slice(0, -1);
    } else if (key === '.') {
      if (!totalBill.includes('.')) totalBill = totalBill + key;
    } else totalBill = totalBill + key;
    if (totalBill.length <= 8) this.setState({ totalBill: totalBill });
  }


  // the settings
  goToSettingsHandler = () => {
    this.props.navigator.push({
      screen: 'happy-tip.SettingsScreen',
      passProps: {
        taxRate: this.state.taxRate,
        taxIncluded: this.state.taxIncluded,
        toggleTaxIncl: this.toggleTaxInclHandler,
        concurrency: this.state.concurrency
      }
    });
  }


  render () {
    return (
      <View style={styles.container}>

        <View style={styles.headingPanel}>
          <HeadingPanel
            tipPercentage={this.state.tipPercentage}
            goToSettings={this.goToSettingsHandler}
          />
        </View>

        <View style={styles.facePanel} >
          <FacePanel
            tipPercentage={this.state.tipPercentage}
            addPercentage={this.addPercentage}
            minusPercentage={this.minusPercentage}
          />
        </View>

        <View style={styles.controlPanel} >
          <ControlPanel
            taxIncluded={this.state.taxIncluded}
            taxRate={this.state.taxRate}
            tipPercentage={this.state.tipPercentage}
            toggleTaxInclHandler={this.toggleTaxInclHandler}
            doTheCalculate={this.doTheCalculate}
            totalBill={this.state.totalBill}
            youPay={this.state.youPay}
            splitBill={this.state.splitBill}
            concurrency={this.state.concurrency}
          />
        </View>

        <KeyBoard
          doTheCalculate={this.doTheCalculate}
          splitBy={this.state.splitBy}
          billPriceHandler={this.billPriceHandler}
        />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    // flex: 1, //doesn't work for android
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    height: '100%'
  },
  headingPanel: {
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#412061',
    height: 45,
    width: '100%'
  },
  facePanel: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292961',
    height: '30%',
    width: '100%',
    // paddingTop: 45
  },
  controlPanel: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    height: '25%',
    width: '100%'
  },
  keyBoard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    height: '30%',
    width: '100%'
  }
});


export default MainScreen;