import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import FacePanel from '../../components/FacePanel/FacePanel';
import HeadingPanel from '../../components/HeadingPanel/HeadingPanel';
import KeyBoard from '../../components/KeyBoard/KeyBoard';

import MainText from '../../components/UI/MainText/MainText';
import TextHeading from '../../components/UI/HeadingText/HeadingText';



const TAXES = {
  CA: 9
}

class HappyTip extends React.Component {

  state = {
    taxIncluded: true,
    taxRate: 9.25,
    tipPercentage: 15,
    totalBill: '100',
    splitBy: 1,
    youPay: 0,
    splitBill: 0
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

  toggleTaxInclHandler = (splitBy) => {
    const taxIncluded = this.state.taxIncluded;
    this.setState({ taxIncluded: !taxIncluded });
    const totalBill = this.state.totalBill;
    const tipPercentage = this.state.tipPercentage;
    const taxRate = this.state.taxRate;
    const youPay = !taxIncluded
      ? totalBill * (1.00 + tipPercentage / 100.00)
      : totalBill / (1.00 + taxRate / 100.00) * (1.00 + tipPercentage / 100.00);
    const splitBill = youPay / splitBy;
    this.setState({ splitBy: splitBy });
    this.setState({ youPay: youPay.toFixed(2) });
    this.setState({ splitBill: splitBill.toFixed(2) });
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headingPanel}>
          <HeadingPanel
            tipPercentage={this.state.tipPercentage}
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
            // splitByHandler={this.state.splitByHandler}
            totalBill={this.state.totalBill}
            youPay={this.state.youPay}
            splitBill={this.state.splitBill}
          />
        </View>

        {/*<KeyBoard />*/}
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
    height: '40%',
    width: '100%',
    // paddingTop: 45
  },
  controlPanel: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    height: '50%',
    width: '100%'
  }
});


export default HappyTip;