import React from 'react';
import styled from 'styled-components/native';
import { Text, SafeAreaView, ScrollView } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;


const TitleContainer = styled.View`
  align-items: center;
  margin-top: 10%;
`;


const KioskList = () => {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TitleContainer>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>키오스크</Text>
        </TitleContainer>
        
      </Container>
  
    </SafeAreaView>
  );
}

export default KioskList;