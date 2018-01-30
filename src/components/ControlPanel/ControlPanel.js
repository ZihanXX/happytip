import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Button, Dimensions} from 'react-native';
import TextHeading from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import BillPrice from '../ControlPanel/PriceLabels/BillPrice';
import YouPay from '../ControlPanel/PriceLabels/YouPay';
import SplitPrice from '../ControlPanel/PriceLabels/SplitPrice';
import FriendSplit from '../ControlPanel/PriceLabels/FriendsSplit';
import Icon from 'react-native-vector-icons/Ionicons';



class ControlPanel extends React.Component {

  state = {
    splitBy: 1,
    faces: [true, false, false, false, false]
  }


  splitByHandler = (splitBy) => {
    var faces = [true, true, true, true, true];
    switch (splitBy) {
      case 1:
        faces = [true, false, false, false, false];
        break;
      case 2:
        faces = [true, true, false, false, false];
        break;
      case 3:
        faces = [true, true, true, false, false];
        break;
      case 4:
        faces = [true, true, true, true, false];
        break;
      case 5:
        faces = [true, true, true, true, true];
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
      <View style={styles.container}>

        <View style={styles.pricesContainer1}>
          <TouchableOpacity onPress={this.props.showKeyPad}>
            <BillPrice
              totalBill={this.props.totalBill}
              concurrency={this.props.concurrency}
            />
          </TouchableOpacity>
        </View>


        <View style={styles.pricesContainer2}>
          <YouPay
            youPay={this.props.youPay}
            toggleTaxInclHandler={this.props.toggleTaxInclHandler}
            splitBy={this.state.splitBy}
            taxIncluded={this.props.taxIncluded}
            taxRate={this.props.taxRate}
            concurrency={this.props.concurrency}
          />
        </View>


        <View style={styles.pricesContainer3}>
          <FriendSplit
            splitBy={this.state.splitBy}
            faces={this.state.faces}
            splitByHandler={this.splitByHandler}
          />
        </View>


        <View style={styles.pricesContainer4}>
          <SplitPrice
            splitBill={this.props.splitBill}
            concurrency={this.props.concurrency}
          />
        </View>


      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    paddingTop: Dimensions.get('window').height * 0.06,
    width: Dimensions.get('window').width * 0.80
  },
  pricesContainer1: {
    height: Dimensions.get('window').height * 0.09
  },
  pricesContainer2: {
    height: Dimensions.get('window').height * 0.10
  },
  pricesContainer3: {
    height: Dimensions.get('window').height * 0.09
  },
  pricesContainer4: {
    height: Dimensions.get('window').height * 0.08
  }
});



export default ControlPanel;