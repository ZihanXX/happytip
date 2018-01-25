import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Button } from 'react-native';
import TextHeading from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';


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

        <View style={styles.pricesContainer}>
          <MainText> $ </MainText>
          <TextHeading> {this.props.totalBill} </TextHeading>
          <MainText>Bill Price</MainText>
        </View>

        <View style={styles.pricesContainer}>
          <MainText> $ </MainText>
          <TextHeading> {this.props.youPay} </TextHeading>
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
          <TextHeading> {this.props.splitBill} </TextHeading>
          <MainText>Split Price</MainText>
        </View>


        <View>
          <Button title="calculate" onPress={() => this.props.doTheCalculate(this.state.splitBy)}></Button>
        </View>



        <TouchableOpacity onPress={() => this.props.toggleTaxInclHandler(this.state.splitBy)}>
          <View>
            {this.props.taxIncluded ?
              <Text>{this.props.taxRate}% tax incl.</Text> :
              <Text>{this.props.taxRate}% tax excl.</Text>
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