import React from 'react';
import styled from 'styled-components/native';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import test4 from '../utils/Img/test4.png';
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
  height: 64%;
  background-color: #FFF2D1;
  border-radius: 0px 0px 30px 30px;
  `;

// const TitleContainer = styled.View`
//   align-items: center;
//   margin-top: 50px;
// `;

const ButtonText = styled.Text`
  color: black;
  font-size: 22px;
  font-weight: 500;
  textAlign: center;
`;


const Button2 = styled.TouchableOpacity`
  background-color: #F1F1F1;
  border-radius: 30px;
  margin: 35px 18px;
  padding-top: 3%;
  width: 130px;
  height: 50px;
  border: 1px solid #C9BCBC;
  flexDirection: "row";
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 4% 5% 0px 4%;
  position : center;
`;



const Button = styled.TouchableOpacity`
  background-color: #F1F1F1;
  border-radius: 30px;
  margin: 12px 18px;
  width: 130px;
  height : 80px;
  padding : 3%;
  border: 1px solid #C9BCBC;
  flexDirection: "row";


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
  height: 250px;
  resizeMode : contain;
  posision : center;
`;


const KoiskTest6= ({navigation}) => {

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (correctAnswer) => {
    if (correctAnswer) {
      setScore(score + 1);
    }
    navigation.navigate('KioskTest5', { score: score + (correctAnswer ? 1 : 0) });
  };

    return (

      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Head />

          <Text style={{fontSize:20, fontWeight: '400', textAlign: 'center'}}>
              {"\n"}다음 키오스크 화면에서</Text>
              <Text style={{fontSize:20, fontWeight: '700', textAlign: 'center', color: 'blue'}}
              >할 수 없는 활동을</Text> 
              {/* 글자색상 파란색 */}
              <Text style={{fontSize:20, fontWeight: '400', textAlign: 'center'}}
              >한가지 찾아{"\n"}목록버튼을 선택해주세요.{"\n"}</Text>
          
            <Imagee source={test4} />
          
            
          <ButtonRow>
            <Button2 onPress={() => handleAnswerButtonClick(false)}>
              <ButtonText>영화 예매</ButtonText>
            </Button2>
            <Button2 onPress={() => handleAnswerButtonClick(false)}>
              <ButtonText>예매내역 찾기</ButtonText>
            </Button2>
          </ButtonRow>
          <ButtonRow>
            <Button2 onPress={() => handleAnswerButtonClick(true)}>
              <ButtonText>영화 환불</ButtonText>
            </Button2>
            <Button onPress={() => handleAnswerButtonClick(false)}>
              <ButtonText>음성으로 영화예매</ButtonText>
            </Button>
          </ButtonRow>
          
        
        </Container>
      </SafeAreaView>
    );
  };
  
  export default KoiskTest6;