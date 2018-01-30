import React from 'react';
import { StyleSheet, View, Dimensions, AsyncStorage, StatusBar, Platform } from 'react-native';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import FacePanel from '../../components/FacePanel/FacePanel';
import HeadingPanel from '../../components/HeaderPanel/HeaderPanel';
import KeyPad from '../../components/KeyPad/KeyPad';
import Modal from 'react-native-modalbox';
import ThemeColors from '../../components/UI/Theme/ThemeColors';



class MainScreen extends React.Component {


  state = {
    concurrency: '$',
    taxIncluded: true,
    taxRate: 0,
    tipPercentage: 15,
    totalBill: '',
    splitBy: 1,
    youPay: 0,
    splitBill: 0
  }

  componentDidMount() {
    AsyncStorage.getItem("concurrency").then((value) => {
      value !== null ? this.setState({concurrency: value}) : null;
    }).done();
    AsyncStorage.getItem("taxIncluded").then((value) => {
      value !== null ? this.setState({taxIncluded: value == 'true' ? true : false}) : null;
    }).done();
    AsyncStorage.getItem("taxRate").then((value) => {
      value !== null ? this.setState({taxRate: Number(value)}) : null;
    }).done();
    AsyncStorage.getItem("tipPercentage").then((value) => {
      value !== null ? this.setState({tipPercentage: Number(value)}) : null;
    }).done();
    AsyncStorage.getItem("taxRate").then((value) => {
      value !== null ? this.setState({taxRate: value}) : this.goToTaxRateHandler();
    }).done();
  }


  addPercentage = () => {
    const tipPercentage = this.state.tipPercentage < 100 ? this.state.tipPercentage : 100;
    this.setState({ tipPercentage: tipPercentage + 1 });
    AsyncStorage.setItem('tipPercentage', String(tipPercentage + 1));
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
    AsyncStorage.setItem('tipPercentage', String(tipPercentage - 1));
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
    this.refs.keyPadModal.close();
  }

  toggleTaxInclHandler = () => {
    const taxIncluded = !this.state.taxIncluded;
    this.setState({ taxIncluded: taxIncluded });
    AsyncStorage.setItem('taxIncluded', taxIncluded ? 'true' : 'false');
    const totalBill = this.state.totalBill;
    const tipPercentage = this.state.tipPercentage;
    const taxRate = this.state.taxRate;
    const youPay = taxIncluded
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
        concurrency: this.state.concurrency,
        setConcurrency: this.setConcurrencyHandler,
        setTaxRate: this.setTaxRateHandler,
        // navigatorStyle: {navBarTextColor: ThemeColors.theme}
      }
    });
  }

  setConcurrencyHandler = (concurrency) => {
    this.setState({ concurrency: concurrency });
    AsyncStorage.setItem('concurrency', concurrency);
  }

  setTaxRateHandler = (taxRate) => {
    this.setState({ taxRate: taxRate });
    AsyncStorage.setItem('taxRate', String(taxRate));
    const totalBill = this.state.totalBill;
    const tipPercentage = this.state.tipPercentage;
    const splitBy = this.state.splitBy;
    const taxIncluded = this.state.taxIncluded;
    const youPay = taxIncluded
      ? totalBill * (1.00 + tipPercentage / 100.00)
      : totalBill / (1.00 + taxRate / 100.00) * (1.00 + tipPercentage / 100.00);
    const splitBill = youPay / splitBy;
    this.setState({ splitBy: splitBy });
    this.setState({ youPay: youPay.toFixed(2) });
    this.setState({ splitBill: splitBill.toFixed(2) });
  }

  showKeyPadHandler = () => {
    this.refs.keyPadModal.open();
  }

  goToTipMeHandler = () => {
    this.props.navigator.push({
      screen: 'happy-tip.TipMeScreen',
    });
  }

  setPercentageToHandler = (tipPercentage) => {
    this.setState({ tipPercentage: tipPercentage });
  }

  goToTaxRateHandler = () => {
    this.props.navigator.push({
      screen: 'happy-tip.SettingTaxRateScreen',
      passProps: {
        taxRate: 0,
        setTaxRate: this.setTaxRateHandler
      }
    });
  }


  render () {
    return (

      <View>
        <StatusBar hidden={false} barStyle="light-content" />


        <View style={styles.container}>

          <View style={Platform.OS == 'ios' ? styles.headingPanelIOS : styles.headingPanelAndroid}>
            <HeadingPanel
              tipPercentage={this.state.tipPercentage}
              goToSettings={this.goToSettingsHandler}
            />
          </View>

          <View style={Platform.OS == 'ios' ? styles.facePanelIOS : styles.facePanelAndroid} >
            <FacePanel
              tipPercentage={this.state.tipPercentage}
              addPercentage={this.addPercentage}
              minusPercentage={this.minusPercentage}
              goToTipMe={this.goToTipMeHandler}
              setPercentageTo={this.setPercentageToHandler}
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
              showKeyPad={this.showKeyPadHandler}
            />
          </View>

          <Modal style={styles.keyPadModal} backdrop={false}  position={"bottom"} ref={"keyPadModal"}>
            <KeyPad
              doTheCalculate={this.doTheCalculate}
              splitBy={this.state.splitBy}
              billPriceHandler={this.billPriceHandler}
            />
          </Modal>

        </View>
      </View>


    );
  }

}



const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColors.backGround,
    height: Dimensions.get('window').height
  },
  headingPanelIOS: {
    backgroundColor: ThemeColors.theme,
    height: 65,
    width: '100%',
    paddingTop: 20
  },
  headingPanelAndroid: {
    backgroundColor: ThemeColors.theme,
    height: 45,
    width: '100%'
  },
  facePanelIOS: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeColors.theme,
    height: Dimensions.get('window').height * 0.5 - 65,
    width: '100%',
  },
  facePanelAndroid: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeColors.theme,
    height: Dimensions.get('window').height * 0.5 - 45,
    width: '100%',
  },
  controlPanel: {
    alignItems: 'center',
    backgroundColor: ThemeColors.backGround,
    height: '50%',
    width: '100%'
  },
  keyPadModal: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('window').height * 0.37,
    width: '100%'
  },
});


export default MainScreen;
