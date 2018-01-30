import React from 'react';
import {StyleSheet, View, Button, TouchableWithoutFeedback, TouchableOpacity, Dimensions} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import HeadingText from '../../../components/UI/HeadingText/HeadingText';
import Icon from 'react-native-vector-icons/Ionicons';
import ThemeColors from '../../UI/Theme/ThemeColors';
import LittlePerson from '../../UI/LittlePerson/LittlePerson';


const friendSplit = props => {
  if (props.splitBy <= 5) {
    return (
      <View style={styles.pricesContainer}>

        <View style={styles.people}>
          <View style={styles.icons}>
            <LittlePerson idx={1} faces={props.faces} splitByHandler={props.splitByHandler} size={25}/>
            <LittlePerson idx={2} faces={props.faces} splitByHandler={props.splitByHandler} size={25}/>
            <LittlePerson idx={3} faces={props.faces} splitByHandler={props.splitByHandler} size={25}/>
            <LittlePerson idx={4} faces={props.faces} splitByHandler={props.splitByHandler} size={25}/>
            <LittlePerson idx={5} faces={props.faces} splitByHandler={props.splitByHandler} size={25}/>
          </View>

          <View style={styles.add}>
            <TouchableOpacity onPress={() => props.splitByHandler(props.splitBy + 1)}>
              <Icon size={23} name='md-add' color={ThemeColors.textLightTheme} style={{paddingRight: 3, paddingTop: 4}} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.label}>
          <MainText> Friends </MainText>
        </View>

      </View>
    );
  } else {
    return (
      <View style={styles.pricesContainer}>

        <View style={styles.people}>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => props.splitByHandler(props.splitBy - 1)}>
              <Icon size={23} name='md-remove' color={ThemeColors.textLightTheme} style={{paddingRight: 3, paddingTop: 4}} />
            </TouchableOpacity>
            <HeadingText style={{paddingLeft: 47}}> {props.splitBy} </HeadingText>
          </View>

          {/*<View style={styles.num}>*/}
            {/*<HeadingText> {props.splitBy} </HeadingText>*/}
          {/*</View>*/}

          <TouchableOpacity onPress={() => props.splitByHandler(props.splitBy + 1)}>
            <Icon size={23} name='md-add' color={ThemeColors.textLightTheme} style={{paddingLeft: 3, paddingTop: 4}} />
          </TouchableOpacity>
        </View>


        <View style={styles.label}>
          <MainText> Friends </MainText>
        </View>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  pricesContainer: {
    flexDirection:'row'
  },
  people: {
    justifyContent: 'center',
    flexDirection:'row',
    width: Dimensions.get('window').width * 0.50
  },
  label: {
    justifyContent: 'flex-end',
    flexDirection:'row',
    width: Dimensions.get('window').width * 0.30
  },
  icons: {
    justifyContent: 'flex-start',
    flexDirection:'row',
    width: 138
  }
});



export default friendSplit;