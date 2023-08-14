import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import { Button } from '../components';

const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items:center;
  background-color: ${({theme}) => theme.background};
  padding: 10px 20px;
  
`;
const Title = styled.View`
  justify-content: center;
  align-items:center;
  background-color: ${({theme}) => theme.background};
  padding: 10px 20px;
  margin: 150px 0px;
`;

const Button1 = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.buttonBackground};
  padding: 10px 20px;
  border-radius: 10px;
  margin: 5px;
  width: 100%;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  
`;


const First = ({ navigation }) => {
  return (
    <Container>
      <Title>
        <Text style={{fontSize:30}}>우주선</Text>
        <Text style={{fontSize:15}}>우리 주변 선생님</Text>
      </Title>
     
      <Button1 onPress={() => navigation.navigate('Login')}>
        <ButtonText>로그인</ButtonText>
      </Button1>
      <Button1 onPress={() => navigation.navigate('Signup')}>
        <ButtonText>회원가입</ButtonText>
      </Button1>
    </Container>
  );
};

export default First;