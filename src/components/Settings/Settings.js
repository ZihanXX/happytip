import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const settings = props => {
    return (
      <View style={styles.container}>
        <Text>This is the settings</Text>
      </View>
    );
}


styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    height: '100%',
    backgroundColor: 'white'
  }
});


export default settings;