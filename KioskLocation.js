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
  width: 360px;
  height: 411px;
  background-color: yellow;
  border-radius: 30px;
  margin-top: 29px;
  margin-left: 19px;
`;

const LocationText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  padding: 26px 32px ;
  
`;

const KioskLocation = ({}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Head />
        <TitleContainer>
          <Text style={{ fontSize: 25, fontWeight: '700' }}>지역 선택</Text>
        </TitleContainer>
        <BoxContainer>
          <LocationText># 서울시</LocationText>
        </BoxContainer>
      
      </Container>
    </SafeAreaView>
  );
};

export default KioskLocation;
