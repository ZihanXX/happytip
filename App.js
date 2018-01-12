import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    placeName: ''
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            value={this.state.placeName}
            placeholder='An Awesome Place'
            onChange={this.placeNameChangedHandler}
          />
          <Button style={styles.placeButton} title='Add' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30
  },
  inputContainer: {
    // flex: 1,
    // width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '10%'
  }
});
