/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StatusBar, Image, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors';

const data = [
  {
    title: 'Amet minim mollit non deserunt ullamco est nvhgc.',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    image: require('../assets/images/step1.png'),
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit mbhg.',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    image: require('../assets/images/step2.png'),
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit.',
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: require('../assets/images/step3.png'),
  },
];

const Onboard = (props) => {

  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title} >{item.title}</Text>
          <Text style={styles.text} >{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Done</Text>
      </View>
    );
  }
  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  }
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  }

  const handleDone = () => {
      props.handleDone();
  }
  
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor= {keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 30,

  },
  title: {
    fontSize: 18,
    color: colors.black,
    textAlign: "center",
    fontFamily: "OpenSans-Bold",
    marginHorizontal: 60,
  },
  text: {
    fontSize: 13,
    color: colors.gray,
    textAlign: "center",
    fontFamily: "OpenSans-Regular",
    marginHorizontal: 60,
    marginTop: 20,
  },

  rightTextWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 22,
  },
  rightText: {
    color: colors.green,
    fontFamily: "OpenSans-Bold",
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 22,
  },
  leftText: {
    color: colors.green,
    fontFamily: "OpenSans-Bold",
    fontSize: 14,
  },

  dotStyle: {
    backgroundColor: colors.fadegreen,
  },
  activeDotStyle: {
    backgroundColor: colors.green,
  },
});


export default Onboard;
