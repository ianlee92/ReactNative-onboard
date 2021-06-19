import React from 'react';
import {SafeAreaView, Text, View, StatusBar, Image} from 'react-native';
import Onboard from './components/Onboard';
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
    title: '더 이상 시간을 낭비하지마세요!',
    text: '현재 주변의 공부하기 좋은 카페를 찾아드려요.',
    image: require('./assets/images/Onboard1.png'),
  },
  {
    title: '지금 스터디 카페 자리 있을까?',
    text: '실시간으로 스카 자리 현황을 알려드려요.',
    image: require('./assets/images/Onboard2.png'),
  },
  {
    title: '카페에서 같이 공부하실 분?',
    text: '쉽게 스터디를 모집해서 같이 공부하세요.',
    image: require('./assets/images/Onboard3.png'),
  },
];

const App = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <Image source={item.image} />
        <View>
          <Text>{item.title}</Text>
          <Text>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = item => item.title;

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
      />
    </View>
  );
};

export default App;
