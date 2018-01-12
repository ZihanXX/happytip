import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import ToggleTaxIncl from '../ControlPanel/ToggleTaxIncl/ToggleTaxIncl';


class ControlPanel extends React.Component {

  state = {
    taxIncluded: true,
    showToggleTaxIncl: false
  }


  toggleTaxInclHandler = () => {
    const showToggleTaxIncl = this.state.showToggleTaxIncl;
    if (showToggleTaxIncl) {
      this.setState({ showToggleTaxIncl: false });
    } else {
      this.setState({ showToggleTaxIncl: true });
    }
  }


  render () {
    return (
      <View>

        <TouchableOpacity onPress={this.toggleTaxInclHandler}>
          <View>
            <Text>change tax incl.</Text>
          </View>
        </TouchableOpacity>

        <ToggleTaxIncl show={this.state.showToggleTaxIncl}/>

      </View>
    );
  }

}




export default ControlPanel;