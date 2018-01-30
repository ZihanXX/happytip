import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText';
import KeyPad from '../../../components/Settings/SettingItems/SettingTaxRate/TaxRateKeyPad';
import ThemeColors from "../../../components/UI/Theme/ThemeColors";



class SettingTaxRateScreen extends React.Component {

  state = {
    taxRate: this.props.taxRate
  }

  typeTaxRateHandler = (key) => {
    var taxRate = String(this.state.taxRate);
    if (key === 'del') {
      taxRate = taxRate.slice(0, -1);
    } else if (key === '.') {
      if (!taxRate.includes('.')) taxRate = taxRate + key;
    } else taxRate = taxRate + key;
    if (taxRate.length <= 5) this.setState({ taxRate: taxRate });
  }


  render () {

    this.props.navigator.setStyle({
      navBarButtonColor: ThemeColors.theme
    });


    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <MainText>Your Tax Rate: </MainText>
        </View>

        <View style={styles.item}>
          <HeadingText>{this.state.taxRate} % </HeadingText>
        </View>

        <KeyPad
          typeTaxRate={this.typeTaxRateHandler}
          setTaxRate={() => this.props.setTaxRate(this.state.taxRate)}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 30,
    paddingLeft: Dimensions.get('window').width * 0.05
  },
  item: {
    alignItems: 'center'
  }
});

export default SettingTaxRateScreen;