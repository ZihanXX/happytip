import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Button } from 'react-native';
import TextHeading from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import BillPrice from '../ControlPanel/PriceLabels/BillPrice';
import YouPay from '../ControlPanel/PriceLabels/YouPay';
import SplitPrice from '../ControlPanel/PriceLabels/SplitPrice';
import FriendSplit from '../ControlPanel/PriceLabels/FriendsSplit';


class ControlPanel extends React.Component {

  state = {
    splitBy: 1,
    faces: ['o', '-', '-', '-', '-']
  }


  splitByHandler = (splitBy) => {
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
    this.setState({ faces: faces });
    this.props.doTheCalculate(splitBy);
  }


  render () {

    return (
      <View>

        <TouchableOpacity onPress={this.props.showKeyPad}>
          <BillPrice
            totalBill={this.props.totalBill}
            concurrency={this.props.concurrency}
          />
        </TouchableOpacity>


        <YouPay
          youPay={this.props.youPay}
          toggleTaxInclHandler={this.props.toggleTaxInclHandler}
          splitBy={this.state.splitBy}
          taxIncluded={this.props.taxIncluded}
          taxRate={this.props.taxRate}
          concurrency={this.props.concurrency}
        />


        <FriendSplit
          splitBy={this.state.splitBy}
          faces={this.state.faces}
          splitByHandler={this.splitByHandler}
        />


        <SplitPrice
          splitBill={this.props.splitBill}
          concurrency={this.props.concurrency}
        />


      </View>
    );
  }

}


// const styles = StyleSheet.create({
//   pricesContainer: {
//     flexWrap: 'wrap',
//     alignItems: 'flex-start',
//     flexDirection:'row',
//   }
// });



export default ControlPanel;