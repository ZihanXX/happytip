import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import FaceImage from '../../assets/imgs/faceface.jpg';

const facePanel = (props) => (
    <View>
      <Image source={FaceImage} style={styles.imgStyle} />
    </View>
);

const styles = StyleSheet.create({
  imgStyle: {
    height: 100,
    width: 100
  }
});


export default facePanel;