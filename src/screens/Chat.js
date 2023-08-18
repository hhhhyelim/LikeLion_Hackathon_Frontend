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


const Chat = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TitleContainer>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>채팅</Text>
          
        </TitleContainer>
        
      </Container>
    </SafeAreaView>
  );
};

export default Chat;
