import React,{useState, useRef, useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {Text, Alert} from 'react-native';
import {Input, Button, Image} from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { ProgressContext } from '../contexts';
//import {images} from '../utils/images';


const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items:center;
  background-color: ${({theme}) => theme.background};
  padding: 0 20px;
  padding-top: ${({insets:{top}}) => top}px;
  padding-bottom: ${({insets:{bottom}}) => bottom}px;
`;

const ErrorText = styled.Text`
  align-items:flex-start;
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({theme})=>theme.errorText};
`;


const Login = ({ navigation }) => {
  const {spinner} = useContext(ProgressContext);
  const insets=useSafeAreaFrame();

  const [email, setEmail] =useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(); // 아이디 다 치면 비밀번호 입력하게끔
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisaled] = useState(true);

  useEffect(() => {
    setDisaled(!(email && password && !errorMessage));
  }, [email, password, errorMessage]);

  const _handleEmailChange = changedEmail => {

    setEmail(changedEmail);
  
    if (changedEmail.length < 8) {
      setErrorMessage("아이디는 최소 8글자 이상이어야 합니다.");
    } else {
      setErrorMessage("");
    }
  };

  const _handlePasswordChange = password => {
    setPassword(password);
  };

  const _handleLoginButtonPress = async() => {
    try{
      spinner.start();
      //const user = await login({email, password});
      //Alert.alert("로그인 성공", user.email);
      navigation.navigate('Home');
    }catch(e) {
      //Alert.alert("로그인 오류", e.message);
      navigation.navigate('Home');
    }finally{
      spinner.stop();
    }
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex:1}} extraScrollHeight={20}>
      <Container insets={insets}>
       
        <Text style={{fontSize:30}}>로그인</Text>
        <Input 
          label="아이디"
          value={email}
          onChangeText={_handleEmailChange}
          onSubmitEditing={()=>passwordRef.current.focus()}
          placeholder="아이디(최소8글자)"
          returnKeyType="next" 
        />
        <Input 
          ref={passwordRef}
          label="비밀번호"
          value={password}
          onChangeText={_handlePasswordChange}
          onSubmitEditing={_handleLoginButtonPress}
          placeholder="비밀번호"
          returnKeyType="done" 
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button title="로그인" onPress={() => navigation.navigate('Home')} disabled={disabled} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;