import React,{useState, useRef, useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {Text, Alert} from 'react-native';
import {Input, Button} from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { ProgressContext } from '../contexts';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items:center;
  background-color: ${({theme}) => theme.background};
  padding: 40px 20px;
`;


const ErrorText = styled.Text`
  align-items:flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({theme})=>theme.errorText};
`;

const Signup = ({}) => {
  const {spinner} = useContext(ProgressContext);

  const [name, setName] =useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisaled] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef(); // 아이디 다 치면 비밀번호 입력하게끔
  const passwordConfirmRef = useRef();
  const didMountRef = useRef();

  useEffect(() => {
    if(didMountRef.current){
      let _errorMessage ='';
      if(!email){
        _errorMessage ='이메일을 입력하세요';
      } else if(!validateEmail(email)){
       _errorMessage ='유효하지 않은 이메일 형식입니다';
      } else if(password !== passwordConfirm){
        _errorMessage ='비밀번호가 다릅니다';
      } else if(!name){
        _errorMessage ='이름을 입력하세요';
      } else {
        _errorMessage ='';
      }
      setErrorMessage(_errorMessage);
    }else {
      didMountRef.current=true;
    }
  }, [name, email, password, passwordConfirm]);

  useEffect(() => {
    setDisaled(!(name && email && password && passwordConfirm &&!errorMessage));
  }, [name, email, password, passwordConfirm, errorMessage]);

  const _handleSignupButtonPress = async () => {
    try{
      spinner.start();
      //const user = await signup({email, password, name});
      console.log(user);
      Alert.alert("회원가입 성공", user.email);
    }catch(e) {
      Alert.alert("회원가입 오류", e.message);
    }finally{
      spinner.stop();
    }
  };

  return (
    <KeyboardAwareScrollView extraScrollHeight={20}>
      <Container>
        <Text style={{fontSize:30}}>회원가입</Text>
        <Input 
          label="이름"
          value={name}
          onChangeText={text => setName(text)}
          onSubmitEditing={ ()=>{
            setName(name.trim());
            emailRef.current.focus();
          }}
          onBlur={()=>setName(name.trim())}
          placeholder="이름"
          returnKeyType="next" 
        />
        <Input 
          ref={emailRef}
          label="이메일"
          value={email}
          onChangeText={text => setEmail(removeWhitespace(text))}
          onSubmitEditing={()=>passwordRef.current.focus()}
          placeholder="이메일"
          returnKeyType="next" 
        />
        <Input 
          ref={passwordRef}
          label="비밀번호"
          value={password}
          onChangeText={text =>setPassword(removeWhitespace(text))}
          onSubmitEditing={()=>passwordConfirmRef.current.focus()}
          placeholder="비밀번호"
          returnKeyType="done" 
          isPassword
        />
        <Input 
          ref={passwordConfirmRef}
          label="비밀번호 확인"
          value={passwordConfirm}
          onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
          onSubmitEditing={_handleSignupButtonPress}
          placeholder="비밀번호 확인"
          returnKeyType="done" 
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button title="회원가입" onPress={_handleSignupButtonPress} disabled={disabled} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signup;