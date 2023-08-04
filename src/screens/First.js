import React from 'react';
import styled from 'styled-components/native';
import {Text, Button} from 'react-native';

const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items:center;
  background-color: ${({theme}) => theme.background};
`;


const First = ({ navigation }) => {
  return (
    <Container>
      <Text style={{fontSize:30}}>앱 이름</Text>
      <Button title="로그인" onPress={()=>navigation.navigate('Login')} />
      <Button title="회원가입" onPress={()=>navigation.navigate('Signup')} />
    </Container>
  );
};

export default First;