import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText';
import KeyPad from '../../../components/Settings/SettingItems/SettingTaxRate/TaxRateKeyPad';



class SettingTaxRateScreen extends React.Component {

  // const locations = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'D.C.',
  //   'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  //   'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  //   'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  //   'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
  //   'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

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
    return (
      <View style={styles.container}>

        <View>
          <HeadingText>Your Tax Rate: </HeadingText>
        </View>

        <View style={styles.item}>
          <MainText>{this.state.taxRate} % </MainText>
        </View>

        <View style={styles.keyPad}>
          <KeyPad
            typeTaxRate={this.typeTaxRateHandler}
            setTaxRate={() => this.props.setTaxRate(this.state.taxRate)}
          />
        </View>


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
  item: {
    margin: 10,
    alignItems: 'center'
  },
  keyPad: {
    //
  }

});

export default SettingTaxRateScreen;