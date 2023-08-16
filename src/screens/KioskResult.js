import React from 'react';
import styled from 'styled-components/native';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import KioskMaster from '../utils/Img/kioskmaster.jpeg';


const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Head = styled.View`
  position: absolute;
  margin-top: 35%;
  margin-left: 10%;
  width: 80%;
  height: 200px;
  border-radius: 30px;
  background-colors={['#FFF2D1', '#A0BFE0']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
>
  `;

const TitleContainer = styled.View`
  align-items: center;
  margin-top: 91px;
`;

const Button = styled.TouchableOpacity`
  background-color: #FF7A2F;
  width: 400px;
  height: 50px;
  margin-left: 40px;
  border-radius: 30px;
  margin: 10px 18px;
  margin-top: 40%;

`;

const ButtonText = styled.Text`
  color: 'black';
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  padding-top: 5%;
`;


const ButtonText2 = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  padding-top: 3.5%;
`;



const IconContainer = styled.View`
  align-items: center;
  margin-top: 91px;
  margin-left: 10%;
  width: 80%;
  height: 7%;
`;



const IconText = styled.Text`
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  padding-top: 3.5%;
`;




const KioskResult = ({ navigation, route }) => {
  const { score } = route.params;
  const passed = score >= 10; // 점수가 10점 이상인 경우 통과

  return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Head />
          <TitleContainer>
            <Text style={{ fontSize: 30, fontWeight: '600' }}>선생님 자격시험</Text>
          </TitleContainer>
        {passed ? (
            

            <>
            <ButtonText style={{ fontSize: 18, fontWeight: '500', textAlign: 'center' }}>
              {"\n"}축하합니다 ! {"\n"}
            </ButtonText>
            <ButtonText style={{ fontSize: 18, fontWeight: '500', textAlign: 'center' }}>
              점으로 키오스크 자격시험에 통과하셨습니다. {"\n"}
              {"\n"}키오스크 마스터 뱃지를 부여받아
              {"\n"}키오스크 선생님의 자격이 주어졌습니다!{"\n"}
              {"\n"}지금 바로 게시글을 작성하고 학생을 모집해보세요!
            </ButtonText>
            <IconContainer>
              <IconText style={{ color: 'blue', textAlign: 'center' }}>성공!</IconText>
              {/* 뱃지 아이콘 등의 JSX를 여기에 추가 */}
              <IconText style={{ color: 'blue', textAlign: 'center' }}>
                '나는야 키오스크 마스터'
                <Image source={test1} />
              </IconText>
            </IconContainer>
          </>


        ) : (
          <ButtonText style={{ fontSize: 18, fontWeight: '500', textAlign: 'center' }}>
            {"\n"}키오스크 자격시험에 불합격하셨습니다.{"\n"}
            {"\n"}다음에 공부하고 다시 도전해주세요!
          </ButtonText>
        )}

        <Button>  
            <ButtonText2 onPress= {() => navigation.navigate('KioskTest1')}>학생모집 게시글 작성하러 가기 </ButtonText2>
          </Button>
        </Container>
      </SafeAreaView>
    );
  };
  
  export default KioskResult;

  