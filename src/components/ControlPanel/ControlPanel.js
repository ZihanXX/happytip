import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Button } from 'react-native';
import TextHeading from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';


class ControlPanel extends React.Component {

  state = {
    taxIncluded: true,
    taxRate: this.props.taxRate,
    tipPercentage: this.props.tipPercentage,
    totalBill: '100',
    youPay: 0,
    splitBy: 1,
    splitBill: 0,
    faces: ['o', '-', '-', '-', '-']
  }



  toggleTaxInclHandler = () => {
    const taxIncluded = this.state.taxIncluded;
    this.setState({ taxIncluded: !taxIncluded });
    const totalBill = this.state.totalBill;
    const tipPercentage = this.props.tipPercentage;
    const taxRate = this.state.taxRate;
    const splitBy = this.state.splitBy;
    const youPay = !taxIncluded
      ? totalBill * (1.00 + tipPercentage / 100.00)
      : totalBill / (1.00 + taxRate / 100.00) * (1.00 + tipPercentage / 100.00);
    const splitBill = youPay / splitBy;
    this.setState({ youPay: youPay.toFixed(2) });
    this.setState({ splitBill: splitBill.toFixed(2) });
  }

  doTheCalculate = () => {
    const totalBill = this.state.totalBill;
    const tipPercentage = this.props.tipPercentage;
    const taxRate = this.state.taxRate;
    const taxIncluded = this.state.taxIncluded;
    const splitBy = this.state.splitBy;
    const youPay = taxIncluded
      ? totalBill * (1.00 + tipPercentage / 100.00)
      : totalBill / (1.00 + taxRate / 100.00) * (1.00 + tipPercentage / 100.00);
    const splitBill = youPay / splitBy;
    this.setState({ youPay: youPay.toFixed(2) });
    this.setState({ splitBill: splitBill.toFixed(2) });
  }

  splitByHandler = (splitBy) => {
    const totalBill = this.state.totalBill;
    const tipPercentage = this.props.tipPercentage;
    const taxRate = this.state.taxRate;
    const taxIncluded = this.state.taxIncluded;
    const youPay = taxIncluded
      ? totalBill * (1.00 + tipPercentage / 100.00)
      : totalBill / (1.00 + taxRate / 100.00) * (1.00 + tipPercentage / 100.00);
    const splitBill = youPay / splitBy;
    var faces = ['o', 'o', 'o', 'o', 'o'];
    switch (splitBy) {
      case 1:
        faces = ['o', '-', '-', '-', '-'];
        break;
      case 2:
        faces = ['o', 'o', '-', '-', '-'];
        break;
      case 3:
        faces = ['o', 'o', 'o', '-', '-'];
        break;
      case 4:
        faces = ['o', 'o', 'o', 'o', '-'];
        break;
      case 5:
        faces = ['o', 'o', 'o', 'o', 'o'];
        break;
      default:
        break;
    }
    this.setState({ splitBy: splitBy });
    this.setState({ youPay: youPay.toFixed(2) });
    this.setState({ splitBill: splitBill.toFixed(2) });
    this.setState({ faces: faces });
  }


  render () {

    return (
      <View>

        <Text>{this.props.tipPercentage} %</Text>

        <View style={styles.pricesContainer}>
          <MainText> $ </MainText>
          <TextHeading> {this.state.totalBill} </TextHeading>
          <MainText>Bill Price</MainText>
        </View>

        <View style={styles.pricesContainer}>
          <MainText> $ </MainText>
          <TextHeading> {this.state.youPay} </TextHeading>
          <MainText>You Pay</MainText>
        </View>

        {
          this.state.splitBy <= 5 ?
            <View style={styles.pricesContainer}>
              <Button title={this.state.faces[0]} onPress={() => this.splitByHandler(1)} ></Button>
              <Button title={this.state.faces[1]} onPress={() => this.splitByHandler(2)} ></Button>
              <Button title={this.state.faces[2]} onPress={() => this.splitByHandler(3)} ></Button>
              <Button title={this.state.faces[3]} onPress={() => this.splitByHandler(4)} ></Button>
              <Button title={this.state.faces[4]} onPress={() => this.splitByHandler(5)} ></Button>
              <Button title="+" onPress={() => this.splitByHandler(6)} ></Button>
              <MainText> Friends Split </MainText>
            </View>
            :
            <View style={styles.pricesContainer}>
              <Button title="-" onPress={() => this.splitByHandler(this.state.splitBy - 1)} ></Button>
              <MainText> {this.state.splitBy} </MainText>
              <Button title="+" onPress={() => this.splitByHandler(this.state.splitBy + 1)} ></Button>
              <MainText> Friends Split </MainText>
            </View>
        }


        <View style={styles.pricesContainer}>
          <MainText> $ </MainText>
          <TextHeading> {this.state.splitBill} </TextHeading>
          <MainText>Split Price</MainText>
        </View>


        <View>
          <Button title="calculate" onPress={this.doTheCalculate}></Button>
        </View>



        <TouchableOpacity onPress={this.toggleTaxInclHandler}>
          <View>
            {this.state.taxIncluded ?
              <Text>{this.state.taxRate}% tax incl.</Text> :
              <Text>{this.state.taxRate}% tax excl.</Text>
            }
          </View>
        </TouchableOpacity>


      </View>
    );
  }

}


const styles = StyleSheet.create({
  pricesContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  }
});




export default ControlPanel;