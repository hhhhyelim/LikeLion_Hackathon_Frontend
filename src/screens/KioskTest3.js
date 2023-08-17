import React from 'react';
import styled from 'styled-components/native';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import test3 from '../utils/Img/test3.png';
import {Image} from 'react-native';
import {useState} from 'react';



const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Head = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 65%;
  background-color: #FFF2D1;
  border-radius: 0px 0px 30px 30px;
  `;

const TitleContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  textAlign: center;
  
`;
const Button2 = styled.TouchableOpacity`
  background-color: #F1F1F1;
  padding-top: 3%;
  border-radius: 30px;
  margin: 18px;
  width: 130px;
  height: 50px;
  border: 1px solid #C9BCBC;
  flexDirection: row;
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 16px 5px 15px;
`;


// const ImgContainer = styled.View`
//   align-items: center;
//   margin-top: 91px;
//   width: 10%;
//   height: 7%;

// `;


const Imagee= styled.ImageBackground`
  margin-left: 7%;
  width: 95%;
  height: 250px;
  resizeMode : contain;
  position : 'center';
`;


const KioskTest3= ({navigation}) => {

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (correctAnswer) => {
    if (correctAnswer) {
      setScore(score + 1);
    }
    navigation.navigate('KioskTest4', { score: score + (correctAnswer ? 1 : 0) });
  };
  // const { score } = route.params; // 전달받은 점수

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Head />
          {/* <TitleContainer>
            <Text style={{ fontSize: 30, fontWeight: '700' }}>키오스크 자격시험</Text>
          </TitleContainer> */}

          <Text style={{fontSize:20, fontWeight: '400', textAlign: 'center'}}>
              {"\n"}다음 키오스크 화면을 보고 {"\n"}</Text>
              <Text style={{fontSize:20, fontWeight: '700', textAlign: 'center', color: 'blue'}}
              >카드 결제</Text> 
              {/* '카드결제' 글자색상 파란색 */}
              <Text style={{fontSize:20, fontWeight: '400', textAlign: 'center'}}
              >를 하기 위해 눌러야 할{"\n"}목록을 선택해주세요.{"\n"}{"\n"}{"\n"}</Text>
                    
              <Imagee source={test3} />
          
          <ButtonRow>            
{/* 
          <Button2 onPress={() => navigation.navigate('KioskResult')}>
              <ButtonText>민트모카</ButtonText>
            </Button2> */}
            <Button2 onPress={() => handleAnswerButtonClick(false)}>
              <ButtonText>흑당 버블 라떼</ButtonText>
            </Button2>
            <Button2 onPress={() => handleAnswerButtonClick(false)}>
              <ButtonText>전체 삭제</ButtonText>
            </Button2>
          </ButtonRow>
          <ButtonRow>
            <Button2 onPress={() => handleAnswerButtonClick(false)}>
              <ButtonText>선택한 상품</ButtonText>
            </Button2>
            <Button2 onPress={() => handleAnswerButtonClick(true)}>
              <ButtonText>결제하기</ButtonText>
            </Button2>
          </ButtonRow>
          
        
        </Container>
      </SafeAreaView>
    );
  };
  
  export default KioskTest3;