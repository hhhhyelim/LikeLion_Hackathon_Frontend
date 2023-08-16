import React from 'react';
import styled from 'styled-components/native';
import { Text, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;


const TitleContainer = styled.View`
  align-items: center;
  margin-top: 20%;
`;

const Eval = styled.View`
  flex-direction: row; 
  justify-content: center; 
  margin-top: 10px;
  
`;

const Inform = styled.View`
  align-items: center;
  margin-top: 10%;
  padding-top : 5%;
  width: 90%;
  height: 50%;
  align-self: center;
  background-color: #FFF2D1;
  border-radius: 15px;
`;

const Button = styled.TouchableOpacity`
margin: 0px 10px; 
`;



const Title = styled.View`
  align-items: center;
`;

const Content = styled.View`
  align-items: center;
`;


const KioskDetail = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TitleContainer>
          <Ionicons name="person-sharp" size={70} color="#FF7A2F" />
          <Text style={{ fontSize: 20, fontWeight: '500' }}>홍길동</Text>
          <Text style={{ fontSize: 15, fontWeight: '400' }}>남 | 은평구</Text>
        </TitleContainer>
        <Eval>
          <Button>
            <MaterialCommunityIcons name="emoticon-happy-outline" size={50} color="black" />
            
          </Button>
          <Button>
            <MaterialCommunityIcons name="emoticon-sad-outline" size={50} color="black" />
          </Button>
        </Eval>
        <Inform>
          <Title>
            <Text>제목이에요</Text>
          </Title>
          <Content>
            <Text>세부 내용입니다</Text>
          </Content>
        </Inform>
      </Container>
    </SafeAreaView>
  );
};

export default KioskDetail;
