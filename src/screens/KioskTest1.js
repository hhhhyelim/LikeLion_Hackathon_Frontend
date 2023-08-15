import React from 'react';
import styled from 'styled-components/native';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Head = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 287px;
  background-color: #FFF2D1;
  border-radius: 0px 0px 30px 30px;
  `;

const TitleContainer = styled.View`
  align-items: center;
  margin-top: 91px;
`;

const Button = styled.TouchableOpacity`
  background-color: #F1F1F1;
  border-radius: 30px;
  margin: 12px 18px;
  height : 7%;
  padding : 3%;

`;

const ButtonText = styled.Text`
  color: black;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  
`;


const BlankContainer = styled.View`
  align-items: center;
  margin-top: 91px;
  width: 10%;
  height: 7%;
`;



const KioskTest1 = ({navigation}) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Head />
          <TitleContainer>
            <Text style={{ fontSize: 30, fontWeight: '700' }}>키오스크 자격시험</Text>
          </TitleContainer>
            <Text style={{fontSize: 25, fontWeight: '400', textAlign: 'center'}}>
              {"\n"}키오스크를 실제로 사용해보신 경험은 {"\n"}
               얼마나 되시나요? </Text>
          <BlankContainer>

          </BlankContainer>
          <Button>  
            <ButtonText onPress= {() => navigation.navigate('KioskTest2')}>전혀 사용해 본 적이 없다.</ButtonText>
          </Button>
          <Button>  
            <ButtonText onPress= {() => navigation.navigate('KioskTest2')}>1 ~ 5번 미만</ButtonText>
          </Button>
          <Button>  
            <ButtonText onPress= {() => navigation.navigate('KioskTest2')}>5번 이상</ButtonText>
          </Button>
          <Button>  
            <ButtonText onPress= {() => navigation.navigate('KioskTest2')}>처음 보는 키오스크도 자유롭게 사용 가능</ButtonText>
          </Button>
        
        
        </Container>
      </SafeAreaView>
    );
  };
  
  export default KioskTest1;