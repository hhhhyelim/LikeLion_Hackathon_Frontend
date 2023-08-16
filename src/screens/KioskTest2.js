import React from 'react';
import styled from 'styled-components/native';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import test2 from '../utils/Img/test2.png';
import {useState} from 'react';
import {Image} from 'react-native';


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

// const TitleContainer = styled.View`
//   align-items: center;
//   margin-top: 50px;
// `;

const ButtonText = styled.Text`
  color: 'black';
  font-size: 22px;
  font-weight: 500;
  textAlign: center;
`;


const Button2 = styled.TouchableOpacity`
  background-color: #F1F1F1;
  border-radius: 30px;
  margin: 12px 18px;
  padding-top: 3%;
  width: 130px;
  height: 50px;
  border: 1px solid #C9BCBC;
  flexDirection: "row";
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 30px;
  position : center;
`;


// const ImgContainer = styled.View`
//   align-items: center;
//   margin-top: 2px;
//   width: 100%;
//   resizeMode : contain;

// `;

const Imagee= styled.ImageBackground`
  margin-left: 5%;
  width: 95%;
  height: 290px;
  resizeMode : contain;
  posision : center;
`;


const KoiskTest2= ({navigation}) => {

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (correctAnswer) => {
    if (correctAnswer) {
      setScore(score + 1);
    }
    navigation.navigate('KioskTest3', { score: score + (correctAnswer ? 1 : 0) });
  };

    return (

      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Head />
          <TitleContainer>
            <Text style={{ fontSize: 30, fontWeight: '700' }}>키오스크 자격시험</Text>
          </TitleContainer>

          <Text style={{fontSize:20, fontWeight: '400', textAlign: 'center'}}>
              {"\n"}다음 키오스크 화면을 보고{"\n"}</Text>
              <Text style={{fontSize:20, fontWeight: '400', textAlign: 'center', color: 'blue'}}
              >아이스 카페라떼</Text> 
              {/* '아이스 카페라떼' 글자색상 파란색 */}
              <Text style={{fontSize:20, fontWeight: '400', textAlign: 'center'}}
              >를 주문하기 위해 눌러야 할{"\n"}목록버튼을 선택해주세요.{"\n"}{"\n"}{"\n"}</Text>
            
          <ButtonRow>
            <Button2 onPress={() => handleAnswerButtonClick(true)}>
              <ButtonText>커피</ButtonText>
            </Button2>
            <Button2 onPress={() => handleAnswerButtonClick(false)}>
              <ButtonText>밀크티</ButtonText>
            </Button2>
          </ButtonRow>
          <ButtonRow>
            <Button2 onPress={() => handleAnswerButtonClick(false)}>
              <ButtonText>파르페/빙수</ButtonText>
            </Button2>
            <Button2 onPress={() => handleAnswerButtonClick(false)}>
              <ButtonText>음료류</ButtonText>
            </Button2>
          </ButtonRow>
          
        
        </Container>
      </SafeAreaView>
    );
  };
  
  export default KoiskTest2;