import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { Text, SafeAreaView } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const TitleContainer = styled.View`
  align-items: center;
  margin-top: 23%;
`;

const Line = styled.View`
  width: 93%;
  height: 2px;
  background-color: black;
  margin-top: 10px;
  border-radius: 10px;
`;


const Line2 = styled.View`
  width: 70%;
  height: 2px;
  background-color: #9F9F9F;
  border-radius: 10px;
  align-self: center;
`;

const Picture = styled.View`
  align-items: center;
  margin-top: 10%;
  margin-bottom: 30%;
`;

const InformRow = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin: 20px 80px;
`;

const Inform = styled.Text`
  font-size: 15px;
`;

const InformDetail = styled.Text`
  font-size: 15px;
`;



const Mypage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TitleContainer>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>마이페이지</Text>
          <Line />
        </TitleContainer>
        <Picture>
          <Ionicons name="person-sharp" size={100} color="#FF7A2F" />
        </Picture>
        <InformRow>
          <Inform>이름</Inform>
          <InformDetail></InformDetail>
        </InformRow>
        <Line2 />
        <InformRow>
          <Inform>성별</Inform>
          <InformDetail></InformDetail>
        </InformRow>
        <Line2 />
        <InformRow>
          <Inform>생년월일</Inform>
          <InformDetail></InformDetail>
        </InformRow>
        <Line2 />
      </Container>
    </SafeAreaView>
  );
};

export default Mypage;
