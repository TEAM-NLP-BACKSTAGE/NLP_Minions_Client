import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native';

import ResultLoading from './ResultLoading'

export default function Result({ navigation }) {
    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => { setIsLoading(false) }, 1000);

    if(isLoading) {
      return <ResultLoading/>
    }

    return(
      <ImageBackground source={require('./assets/result/결과화면-배경.jpg')} style={styles.container}>
          <StatusBar barStyle='light-content'></StatusBar>
          <View style={styles.idView}>
            <Image style={styles.fishLeft} source={require('./assets/result/보라물고기-왼쪽.png')}/>
            <Text style={styles.idText}>@ Whaleing</Text>
            <Image style={styles.idIs} source={require('./assets/result/님은.png')}/>
            <Image style={styles.fishRight} source={require('./assets/result/보라물고기-오른쪽.png')}/>
          </View>
          
          <View style={styles.resultView}>
              <Image style={styles.image} source={require('./assets/result/결과이미지.png')}/>
              <Image style={styles.ageBubble} source={require('./assets/result/수정-물방울(나이).png')}/>
              <Text style={styles.ageText}>10대</Text>
              <Image style={styles.regionBubble} source={require('./assets/result/수정물방울(지역).png')}/>
              <Text style={styles.regionText}>수도권</Text>
              <Image style={styles.genderBubble} source={require('./assets/result/수정물방울(성별).png')}/>
              <Text style={styles.genderText}>남자</Text>
              <Image style={styles.hobbyBubble} source={require('./assets/result/수정물방울(관심사).png')}/>
              <Text style={styles.hobbyText}>축구</Text>
          </View>
          
          <View style={styles.buttonView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.completeButton} source={require('./assets/result/분석완료버튼.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.shareButton} source={require('./assets/result/공유버튼.png')}/>
            </TouchableOpacity>
          </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    idView: {
      height: '15%',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center'
    },
    idText: {
      fontSize: 25, 
      color: '#747474', 
      marginHorizontal: 10, 
      color: '#D04C5B'
    },
    idIs: {
      width: 40, 
      height: 25, 
      marginRight: 10
    },
    fishLeft: {
      width: 40, 
      height: 25
    },
    fishRight: {
      width: 37, 
      height: 20, 
      marginBottom: 1
    },
    resultView: {
      height: '69%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      height: 370, 
      resizeMode: 'contain', 
      marginTop: '15%'
    },
    ageBubble: {
      width: 120, 
      height: 120, 
      position: 'absolute', 
      right: '7%', 
      top: '13%'
    },
    ageText: {
      fontSize: 45, 
      color: '#767677', 
      position: 'absolute', 
      right: '11%', 
      top: '18%', 
      transform: [{rotate:'10deg'}]
    },
    regionBubble: {
      width: 100, 
      height: 105, 
      position: 'absolute', 
      left: '5%', 
      bottom: '15%'
    },
    regionText: {
      fontSize: 25, 
      color: '#767677', 
      position: 'absolute', 
      left: '8%', 
      bottom: '22%', 
      transform: [{rotate:'30deg'}]
    },
    genderBubble: {
      width: 91, 
      height: 88, 
      position: 'absolute', 
      left: '10%', 
      top: '10%'
    },
    genderText: {
      fontSize: 30, 
      color: '#767677', 
      position: 'absolute', 
      left: '14%', 
      top: '14%', 
      transform: [{rotate:'-10deg'}]
    },
    hobbyBubble: {
      width: 87, 
      height: 87, 
      position: 'absolute', 
      right: '7%', 
      bottom: '5%'
    },
    hobbyText: {
      fontSize: 25, 
      color: '#767677', 
      position: 'absolute', 
      right: '12%', 
      bottom: '10%', 
      transform: [{rotate:'-20deg'}]
    },
    buttonView: {
      height: '16%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    completeButton: {
      width: 147, 
      height: 52
    },
    shareButton: {
      width: 32, 
      height: 32, 
      marginTop: 10,
      marginLeft: 10
    }
  });