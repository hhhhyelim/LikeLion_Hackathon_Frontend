import React from 'react';
import styled from 'styled-components/native';
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

const Inform = styled.View`
  
`;

const Mypage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TitleContainer>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>마이페이지</Text>
          <Line />
        </TitleContainer>
        
        <Inform>

        </Inform>
      </Container>
    </SafeAreaView>
  );
};

export default Mypage;
