import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Image,
  StyleSheet,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors';

const data = [
  {
    title: '더 이상 시간 낭비하지마세요!',
    text: '관심있는 스터디를 손쉽게 찾아드려요.',
    image: require('../assets/images/Onboard1.png'),
  },
  {
    title: '지금 스터디 자리 있을까?',
    text: '실시간으로 스터디원 현황을 알려드려요.',
    image: require('../assets/images/Onboard2.png'),
  },
  {
    title: '카페에서 같이 공부하실 분?',
    text: '쉽게 스터디를 모집해서 같이 공부하세요.',
    image: require('../assets/images/Onboard3.png'),
  },
];

const Onboard = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = item => item.title;
  const renderDoneButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 60,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    marginHorizontal: 60,
  },
  text: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
    marginHorizontal: 60,
    marginTop: 20,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightText: {
    color: colors.blue,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftText: {
    color: colors.blue,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  dotStyle: {
    backgroundColor: colors.blueFaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
});

export default Onboard;
