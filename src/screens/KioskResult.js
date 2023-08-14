import React from 'react';
import styled from 'styled-components/native';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Head = styled.View`
  position: absolute;
  margin-top: 40%;
  margin-left: 10%;
  width: 80%;
  height: 200px;
  background-color: #FFF2D1;
  border-radius: 30px;
  `;

const TitleContainer = styled.View`
  align-items: center;
  margin-top: 91px;
`;

const Button = styled.TouchableOpacity`
  background-color: #F1F1F1;
  width: 400px;
  height: 50px;
  margin-left: 40px;
  border-radius: 30px;
  margin: 10px 18px;
  margin-top: 70%;

`;

const ButtonText = styled.Text`
  color: black;
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  padding-top: 10px;
`;




const KioskResult = ({navigation}) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Head />
          <TitleContainer>
            <Text style={{ fontSize: 30, fontWeight: '600' }}>선생님 자격시험</Text>
          </TitleContainer>
            <Text style={{fontSize: 17, fontWeight: '500', textAlign: 'center'}}>
              {"\n"}축하합니다 ! {"\n"}</Text>
                <Text style={{fontSize: 16, fontWeight: '500', textAlign: 'center'}}
                >점으로 키오스크 자격시험에 통과하셨습니다. {"\n"}
                {"\n"}키오스크 마스터 뱃지를 부여받아
                {"\n"}키오스크 선생님의 자격이 주어졌습니다!{"\n"}
                {"\n"}지금 바로 게시글을 작성하고 학생을 모집해보세요!</Text>
          <Button>  
            <ButtonText onPress= {() => navigation.navigate('Home')}>학생모집 게시글 작성하러 가기 </ButtonText>
          </Button>
        
        
        </Container>
      </SafeAreaView>
    );
  };
  
  export default KioskResult;