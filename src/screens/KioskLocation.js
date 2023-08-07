import React from 'react';
import styled from 'styled-components/native';
import { Text, SafeAreaView, ScrollView } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;


const Head = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 281px;
  background-color: ${({ theme }) => theme.homeBackground};
  border-radius: 0px 0px 30px 30px;
`;


const TitleContainer = styled.View`
  align-items: center;
  margin-top: 91px;

  `;

const BoxContainer = styled.View`
  width: 370px;
  height: 450px;
  
  background-color: #FFF2D1;
  border-radius: 30px;
  margin-top: 29px;
  margin-left: 19px;
`;

const LocationText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  padding: 26px 32px ;
  
`;

const Button = styled.TouchableOpacity`
  background-color: white;
  padding: 10px;
  border-radius: 30px;
  margin: 15px 18px;
  

`;

const ButtonText = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  
`;



const KioskLocation = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Head />
        <TitleContainer>
          <Text style={{ fontSize: 25, fontWeight: '700' }}>지역 선택</Text>
        </TitleContainer>
        <BoxContainer>
          <LocationText># 서울시</LocationText>
           <Button onPress={() => navigation.navigate('KioskList')}>  
            <ButtonText>서울시 송파구</ButtonText>
          </Button>
          <Button>  
            <ButtonText>서울시 강서구</ButtonText>
          </Button>
          <Button>  
            <ButtonText>서울시 노원구</ButtonText>
          </Button>
          <Button>  
            <ButtonText>서울시 은평구</ButtonText>
          </Button>
        </BoxContainer>
      
      </Container>
  
    </SafeAreaView>
  );
};

export default KioskLocation;
