import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import KioskResult from '../screens/KioskResult'; // 경로는 실제 상황에 맞게 설정해주세요
import styled from 'styled-components/native';
import { SafeAreaView, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // React Navigation에서 useNavigation을 가져옴



const test2 = require('../utils/Img/test2.png');
const test3 = require('../utils/Img/test3.png');
const test4 = require('../utils/Img/test4.png');
const test5 = require('../utils/Img/test5.png');



const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Head = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 68%;
  background-color: #FFF2D1;
  border-radius: 0px 0px 30px 30px;
  `;

const TitleContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  textAlign: center;
`;


const Button = styled.TouchableOpacity`
background-color: #F1F1F1;
padding: 10px;
border-radius: 30px;
margin: 10px 18px;
border: 1px solid #C9BCBC;
flexDirection: "row";
height: 45px;
`;

const Button2 = styled.TouchableOpacity`
  background-color: #F1F1F1;
  border-radius: 30px;
  margin: 12px 18px;
  padding-top: 3%;
  width: 160px;
  height: 45px;
  border: 1px solid #C9BCBC;
  flexDirection: "row";
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 30px;
  position : center;
`;



const KioskTest = () => {

  const questions = [
    {
      questionText: '\n\n질문 1.\n 키오스크를 직접 사용해보신 경험은 \n 얼마나 있나요?',
      image: null,
      answerOptions: [
        { answerText: '전혀 없다', isCorrect: false },
        { answerText: '1~5회', isCorrect: false },
        { answerText: '5~10회', isCorrect: false },
        { answerText: '10회 이상, 자유롭게', isCorrect: true },

      ],
    },
    {
      questionText: '\n\n질문 2.\n [아이스카페라떼]를 주문하기위해,\n 눌러야 할 버튼을 선택해주세요.',
      image: test2,
      answerOptions: [
        { answerText: '커피', isCorrect: true },
        { answerText: '밀크티', isCorrect: false },
        { answerText: '음료류', isCorrect: false },
        { answerText: '파르페/빙수', isCorrect: false },
        ],
    },

    {
        questionText: '\n\n질문 3.\n [카드결제]를 하기위해,\n 눌러야 할 버튼을 선택해주세요.',
        image: test3,
        answerOptions: [
          { answerText: '전체삭제', isCorrect: false },
          { answerText: '흑당 버블 라떼', isCorrect: false },
          { answerText: '결제하기', isCorrect: true },
          { answerText: '선택한 상품', isCorrect: false },
          ],
      },  


      {
        questionText: '\n\n질문 4.\n 다음 화면에서 [할 수 없는 활동]을,\n 찾아 버튼을 선택해주세요.',
        image: test4,
        answerOptions: [
          { answerText: '영화 예매', isCorrect: false },
          { answerText: '예매내역 찾기', isCorrect: false },
          { answerText: '영화 환불', isCorrect: true },
          { answerText: '음성으로 영화예매', isCorrect: false },
          ],
      }, 

      {
        questionText: '\n\n질문 5.\n 다음 사진을 보고 [덮밥류] 주문을 \n 위해 눌러야 할 버튼을 선택해주세요.',
        image: test5,
        answerOptions: [
          { answerText: '[덮밥류] 버튼', isCorrect: false },
          { answerText: '[일품메뉴] 버튼', isCorrect: false },
          { answerText: '노란색 바탕, [주문하기] 버튼', isCorrect: true },
          { answerText: '파란색 바탕, [주문하기] 버튼', isCorrect: false },
          ],
      },
    
    ];


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const navigation = useNavigation(); // useNavigation 훅을 이용하여 navigation 객체 가져옴


  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigation.navigate('KioskResult', { score }); // 화면 전환 및 스코어 전달
    }
  };

  const windowWidth = Dimensions.get('window').width;


  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Container>
        <Head />
        <TitleContainer>
            <Text style={{ fontSize: 25, fontWeight: '700' }}>키오스크 자격시험</Text>
        </TitleContainer>
        <Text style={{fontSize: 19, fontWeight: '400', textAlign: 'center', }}>{questions[currentQuestion].questionText}</Text>
          {questions[currentQuestion].image && (
            <Image
              source={questions[currentQuestion].image}
              style={{
                width: Math.min(500, windowWidth),
                height: Math.min(500, (windowWidth * 300) / windowWidth),
                resizeMode: 'contain',
              }}
            />
          )}
          {questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <ButtonRow key={index}>
              <Button2
                title={answerOption.answerText}
                onPress={() => handleAnswerClick(answerOption.isCorrect)}
                style={{
                  fontsize: 10, fontWeight: '400', textAlign: 'center',
                  width: answerOption.answerText.length > 4 ? 'auto' : answerOption.answerText.length * 20,
                  marginVertical: 2,
                }}
            >
                <ButtonText>{answerOption.answerText}</ButtonText>
              </Button2>
            </ButtonRow>
          ))}
      </Container>
    </SafeAreaView>
  );
};

export default KioskTest;
