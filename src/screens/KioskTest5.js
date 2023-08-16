import React from 'react';
import styled from 'styled-components/native';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import test5 from '../utils/Img/test5.png';
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
  height: 60%;
  background-color: #FFF2D1;
  border-radius: 0px 0px 30px 30px;
  `;

// const TitleContainer = styled.View`
//   align-items: center;
//   margin-top: 50px;
// `;

const ButtonText = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 500;
  textAlign: center;
  
`;


const Button = styled.TouchableOpacity`
  background-color: #F1F1F1;
  border-radius: 30px;
  margin-top: 10px;
  margin: 12px 18px;
  width: 150px;
  height : 70px;
  padding : 3%;
  border: 1px solid #C9BCBC;
  flexDirection: "row";


`;

const Button2 = styled.TouchableOpacity`
  background-color: #F1F1F1;
  padding-top: 3%;
  border-radius: 30px;
  margin: 18px;
  width: 150px;
  height: 50px;
  border: 1px solid #C9BCBC;
  flexDirection: "row";
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 10px 10px 5px;
`;


// const ImgContainer = styled.View`
//   align-items: center;
//   margin-top: 91px;
//   width: 10%;
//   height: 7%;

// `;


const Imagee= styled.ImageBackground`
  margin-left: 5%;
  width: 95%;
  height: 200px;
  resizeMode : contain;
  position : 'center';
`;


const KoiskTest5= ({navigation}) => {

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
            <Text style={{ fontSize: 20, fontWeight: '900',color : 'blue', textAlign: 'center'}}>3번 문항</Text>
          </TitleContainer> */}

          <Text style={{fontSize:20, fontWeight: '400', textAlign: 'center'}}>
              {"\n"}{"\n"}다음 키오스크 화면을 보고 </Text>
              <Text style={{fontSize:20, fontWeight: '700', textAlign: 'center', color: 'blue'}}
              >'덮밥류'을 주문할 때</Text> 
              {/* '카드결제' 글자색상 파란색 */}
              <Text style={{fontSize:20, fontWeight: '400', textAlign: 'center'}}
              >눌러야 할{"\n"}목록을 선택해주세요.{"\n"}</Text>
                    
            <Imagee source={test5} />
          
        <ButtonRow>
          <Button onPress={() => handleAnswerButtonClick(true)}>
            <ButtonText>노란색 바탕, '주문하기' 버튼</ButtonText>
          </Button>
          <Button onPress={() => handleAnswerButtonClick(false)}>
            <ButtonText>파란색 바탕, '주문하기' 버튼</ButtonText>
          </Button>
        </ButtonRow>
        <ButtonRow>
          <Button2 onPress={() => handleAnswerButtonClick(false)}>
            <ButtonText>'일품메뉴' 버튼</ButtonText>
          </Button2>
          <Button2 onPress={() => handleAnswerButtonClick(false)}>
            <ButtonText>'덮밥류' 버튼</ButtonText>
          </Button2>
        </ButtonRow>
        
        </Container>
      </SafeAreaView>
    );
  };
  
  export default KoiskTest5;