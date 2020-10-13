import React, { useRef } from 'react';
import { StyleSheet, StatusBar, ImageBackground, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function LabelCategory({ route, navigation }) {
    const {userIdx} = route.params

    return(
        <ImageBackground source={require('./assets/labelCategory/선택화면(배경).jpg')} style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>

            <TouchableOpacity onPress={() => navigation.navigate('LabelHobby', { userIdx: userIdx , teamIdx: 3})}>
                    <Image style={styles.hobbyImage} source={require('./assets/labelCategory/선택화면(관심사_반짝).png')}/> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('LabelAgeGender', { userIdx: userIdx, teamIdx: 1 })}>
                <Image style={styles.ageGenderImage} source={require('./assets/labelCategory/선택화면(성별나이_반짝).png')}/> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('LabelRegion', { userIdx: userIdx, teamIdx: 4 })}>
                <Image style={styles.regionImage} source={require('./assets/labelCategory/선택화면(지역_반짝).png')}/> 
            </TouchableOpacity>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    hobbyImage: {
        width: 231,
        height: 236,
        marginLeft: '46%',
        marginTop: '3%'
    },
    ageGenderImage: {
        width: 283,
        height: 245,
        marginTop: '7%'
    },
    regionImage: {
        width: 306,
        height: 328,
        marginLeft: '28%',
        marginTop: '3%'
    }
  });