import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function LabelHobby({ route, navigation }) {
    const [point, setPoint] = useState([])
    const [pointLoading, setPointLoading] = useState(true)
    const [data, setData] = useState([])
    const [dataLoading, setDataLoading] = useState(true)
    const [hobby, setHobby] = useState('')
    const {userIdx} = route.params
    const {teamIdx} = route.params

    const getPoint = () => {
        fetch(`http://220.90.200.172:3000/user/point/${userIdx}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => setPoint(json.data))
        .catch((error) => console.error('Error:', error))
        .finally(() => setPointLoading(false))
    }

    const getData = () => {
        fetch(`http://220.90.200.172:3000/label/user_idx/${userIdx}/team_idx/${teamIdx}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => setData(json.data))
        .catch((error) => console.error('Error:', error))
        .finally(() => setDataLoading(false))
    }

    const saveHobby = () => {
        fetch(`http://220.90.200.172:3000/label/saveLabel`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                label_idx: data.label_idx,
                user_idx: userIdx,
                answer: hobby
            })
        })
        .catch((error) => console.error('Error:', error))
    }

    const refreshData = () => {
        setHobby('');
        setDataLoading(true);
        setPointLoading(true);
        getData();
        getPoint();
        saveHobby();
    }

    useEffect(() => {
        getPoint();
        getData();
    }, [])

    return(
        <ImageBackground source={require('./assets/모든배경.jpg')} style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <View style={styles.backToRankingView}>
                <TouchableOpacity onPress={() => navigation.popToTop()}>
                    <Image style={styles.rankButton} source={require('./assets/label/랭킹버튼.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.pointView}>
                <View style={styles.points}>
                    <Image style={styles.accumulatedPoints} source={require('./assets/points/채집된-물고기.png')}/>
                    <ImageBackground source={require('./assets/points/회색바.png')} style={styles.pointBar}>
                        {!pointLoading && (point.stack_point) >= 1 && <Image style={{width:33, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(1).png')}/>}
                        {!pointLoading && (point.stack_point) >= 2 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(2).png')}/>}
                        {!pointLoading && (point.stack_point) >= 3 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(3).png')}/>}
                        {!pointLoading && (point.stack_point) >= 4 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(4).png')}/>}
                        {!pointLoading && (point.stack_point) >= 5 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(5).png')}/>}
                        {!pointLoading && (point.stack_point) >= 6 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(6).png')}/>}
                        {!pointLoading && (point.stack_point) >= 7 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(7).png')}/>}
                        {!pointLoading && (point.stack_point) >= 8 && <Image style={{width:31, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(8).png')}/>}
                        {!pointLoading && (point.stack_point) >= 8 && <Image style={{width:19, height:17}} source={require('./assets/points/파랑배경물고기_마지막-숫자표시공간.png')}/>}
                        {!pointLoading && (point.stack_point) >= 8 && <Text style={styles.pointNumber}>{point.stack_point}</Text>}
                    </ImageBackground>
                    <Image style={styles.availablePoints} source={require('./assets/points/사용가능한-물고기.png')}/>
                    <ImageBackground source={require('./assets/points/회색바.png')} style={styles.pointBar}>
                        {!pointLoading && (point.point) >= 1 && <Image style={{width:33, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(1).png')}/>}
                        {!pointLoading && (point.point) >= 2 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(2).png')}/>}
                        {!pointLoading && (point.point) >= 3 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(3).png')}/>}
                        {!pointLoading && (point.point) >= 4 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(4).png')}/>}
                        {!pointLoading && (point.point) >= 5 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(5).png')}/>}
                        {!pointLoading && (point.point) >= 6 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(6).png')}/>}
                        {!pointLoading && (point.point) >= 7 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(7).png')}/>}
                        {!pointLoading && (point.point) >= 8 && <Image style={{width:31, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(8).png')}/>}
                        {!pointLoading && (point.point) >= 8 && <Image style={{width:19, height:17}} source={require('./assets/points/분홍배경물고기_마지막-숫자표시공간.png')}/>}
                        {!pointLoading && (point.point) >= 8 && <Text style={styles.pointNumber}>{point.point}</Text>}
                    </ImageBackground>
                </View>
                <Image style={{width:87, height: 82}} source={require('./assets/points/그물안에-물고기.png')}/> 
            </View>

            <View style={styles.contentView}>
                <Image style={styles.contentContainer} source={require('./assets/label/중간스퀘어.jpg')}/>
                {!dataLoading && <Text style={styles.idText}>{data.insta_id}</Text>}

                <ScrollView style={styles.textView}>
                    <View style={styles.questionView}>
                        <Image style={{width: 36, height: 17}} source={require('./assets/label/게시글용(보라물고기1).png')}/>
                        <View style={styles.question}>
                            {!dataLoading && <Text style={styles.questionId}>{data.insta_id}</Text>} 
                            <Image style={{width: 135, height: 13}} source={require('./assets/label/게시글용-질문.png')}/>
                        </View>
                        <Image style={{width: 38, height: 17}} source={require('./assets/label/게시글용(보라물고기2).png')}/>
                    </View>
                    {!dataLoading && <Text style={styles.contentText}>{data.content}</Text>}
                    <Image style={styles.divisionLine} source={require('./assets/label/구분선.png')}/>

                    <View style={styles.questionView}>
                        <Image style={{width: 36, height: 17}} source={require('./assets/label/게시글용(노랑물고기1).png')}/>
                        <View style={styles.question}>
                            {!dataLoading && <Text style={styles.questionId}>{data.insta_id}</Text>}
                            <Image style={{width: 147, height: 13}} source={require('./assets/label/해시태그용-질문.png')}/>
                        </View>
                        <Image style={{width: 38, height: 17}} source={require('./assets/label/해시태그용(노랑물고기2).png')}/>
                    </View>
                    {!dataLoading && <Text style={styles.contentText}>{data.hashtag}</Text>}
                    <Image style={styles.divisionLine} source={require('./assets/label/구분선.png')}/>

                    <View style={styles.questionView}>
                        <Image style={{width: 36, height: 15}} source={require('./assets/label/지역용(주황색물고기1).png')}/>
                        <View style={styles.question}>
                            {!dataLoading && <Text style={styles.questionId}>{data.insta_id}</Text>}
                            <Image style={{width: 133, height: 16}} source={require('./assets/label/지역-질문.png')}/>
                        </View>
                        <Image style={{width: 37, height: 16}} source={require('./assets/label/지역용(주황색물고기2).png')}/>
                    </View>
                    {!dataLoading && <Text style={styles.contentText}>{data.region_tag}</Text>}
                    <Image style={styles.divisionLine} source={require('./assets/label/구분선.png')}/>
                </ScrollView>
            </View>

            <View style={styles.buttonView}>
                <View style={styles.buttons}>
                    <View style={hobby == '스포츠' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setHobby('스포츠')} hitSlop={styles.buttonTouch}>
                            <Text style={hobby == '스포츠' ? styles.clickedButtonText : styles.buttonText}>스포츠</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={hobby == '게임' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setHobby('게임')} hitSlop={styles.buttonTouch}>
                            <Text style={hobby == '게임' ? styles.clickedButtonText : styles.buttonText}>게임</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={hobby == '미디어 감상' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setHobby('미디어 감상')} hitSlop={styles.buttonTouch}>
                            <Text style={hobby == '미디어 감상' ? styles.clickedButtonText : styles.buttonText}>미디어 감상</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={hobby == '반려동물' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setHobby('반려동물')} hitSlop={styles.buttonTouch}>
                            <Text style={hobby == '반려동물' ? styles.clickedButtonText : styles.buttonText}>반려동물</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.buttons}>
                    <View style={hobby == '카페' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setHobby('카페')} hitSlop={styles.buttonTouch}>
                            <Text style={hobby == '카페' ? styles.clickedButtonText : styles.buttonText}>카페</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={hobby == '맛집' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setHobby('맛집')} hitSlop={styles.buttonTouch}>
                            <Text style={hobby == '맛집' ? styles.clickedButtonText : styles.buttonText}>맛집</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={hobby == '패션' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setHobby('패션')} hitSlop={styles.buttonTouch}>
                            <Text style={hobby == '패션' ? styles.clickedButtonText : styles.buttonText}>패션</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={hobby == '여행' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setHobby('여행')} hitSlop={styles.buttonTouch}>
                            <Text style={hobby == '여행' ? styles.clickedButtonText : styles.buttonText}>여행</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={hobby == 'no_type' ? styles.clickedButton : styles.button}>
                        <TouchableOpacity onPress = {() => setHobby('no_type')} hitSlop={styles.buttonTouch}>
                            <Text style={hobby == 'no_type' ? styles.clickedButtonText : styles.buttonText}>해당없음</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={refreshData}>
                    <Image style={{width: 52, height: 49}} source={require('./assets/label/넥스트하트버튼.png')}/>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    backToRankingView: {
        height:'10%',
        justifyContent: 'flex-end'
    },
    rankButton: {
        width: 62, 
        height: 65, 
        top: '20%',
    },
    pointView: {
        height: '8%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    points: {
        alignItems: 'flex-end',
        marginRight: width / 30
    },
    accumulatedPoints: {
        width: 53, 
        height: 9, 
        marginBottom: 1, 
        marginRight: 5
    },
    availablePoints: {
        width: 69, 
        height: 10, 
        marginBottom: 1, 
        marginRight: 5
    },
    pointBar: {
        width: 265, 
        height: 17, 
        marginBottom: 4, 
        flexDirection: "row"
    },
    pointNumber: {
        fontSize: 12,
        position: 'absolute',
        right: '0%',
        bottom: '10%'
    },
    contentView: {
        height: '55%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: '5%'
    },
    contentContainer: {
        height: '100%', 
        width: '100%', 
        resizeMode: 'contain'
    },
    idText: {
        fontSize: 20, 
        position: 'absolute', 
        top: '18%', 
        left: '44%', 
        color: '#D04C5B'
    },
    textView: {
        backgroundColor: '#f3f4f5', 
        position:'absolute', 
        height: '63%', 
        bottom: '7%', 
        width: '85%'
    },
    questionView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        marginVertical: '3%', 
        marginHorizontal: '1%'
    },
    question: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    questionId: {
        color: '#d04c5b', 
        fontSize: 13
    },
    contentText: {
        marginHorizontal: '3%'
    },
    divisionLine: {
        width: '94%', 
        resizeMode: 'contain', 
        marginTop: '3%',
        marginHorizontal: '3%'
    },
    buttonView: {
        height: '21%', 
        marginHorizontal: '5%', 
        justifyContent: 'space-around', 
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row', 
        height: '27%', 
        width: '100%',
        backgroundColor: '#d9e1e3',
        borderRadius: 7
    },
    button: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d9e1e3',
        borderRadius: 7
    },
    clickedButton: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a8cdd7',
        borderRadius: 7
    },
    buttonText: {
        fontSize: 18, 
        color: '#595656',
        fontWeight: '500'
    },
    clickedButtonText: {
        fontSize: 18, 
        color: '#c54a57',
        fontWeight: '500'
    },
    buttonTouch: {
        top: 20, 
        bottom: 20, 
        left: 20, 
        right: 20
    }
  });