import React,{useState, useRef, useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {Text, Alert, View} from 'react-native';

import {Input, Button} from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { ProgressContext } from '../contexts';
import DatePicker from 'react-datepicker';
import {RadioButton } from 'react-native-paper';


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
  const [birth, setBirth] =useState('');
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState('');
  const [selectedIdx, setSelectedIdx] = useState();
  const genderSelect = ['male', 'female'];

  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisaled] = useState(true);
 
  const emailRef = useRef();
  const passwordRef = useRef(); // 아이디 다 치면 비밀번호 입력하게끔
  const passwordConfirmRef = useRef();
  const birthRef = useRef();
  const phoneRef = useRef();

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
      }else if(!birth){
        _errorMessage ='생년월일을 입력하세요';
      }else if(!phone){
        _errorMessage ='휴대전화 번호를 입력하세요';
      } else if(!gender){
        _errorMessage ='성별을 선택하세요';
      }
      else {
        _errorMessage ='';
      }
      setErrorMessage(_errorMessage);
    }else {
      didMountRef.current=true;
    }
  }, [name, email, password, passwordConfirm, birth, phone, gender]);

  useEffect(() => {
    setDisaled(!(name && email && password && passwordConfirm && birth && gender && phone &&!errorMessage));
  }, [name, email, password, passwordConfirm, birth, phone, gender, errorMessage]);

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
          label="이메일(아이디)"
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
          returnKeyType="next" 
          isPassword
        />
        <Input 
          label="비밀번호 확인"
          value={passwordConfirm}
          onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
          onSubmitEditing={()=>birthRef.current.focus()}
          placeholder="비밀번호 확인"
          returnKeyType="next" 
          isPassword
        />
        <Input 
          ref={birthRef}
          label="생년월일"
          value={birth}
          onChangeText={text => setBirth(removeWhitespace(text))}
          onSubmitEditing={()=>phoneRef.current.focus()}
          placeholder="예시) 1987.05.27"
          returnKeyType="next" 
        />
        <RadioButton.Group
          onValueChange={gender => setGender(gender)} 
          value={gender}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20 }}>
            <Text style={{ color: '#a6a6a6', fontSize: 16, marginRight: 40 }}>성별</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <RadioButton value="male" color="orange" />
              <Text style={{ color: 'black' }}>남성</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="female" color="orange" />
              <Text style={{ color: 'black' }}>여성</Text>
            </View>
          </View>
        </RadioButton.Group>
        
       
        
        <Input 
          ref={phoneRef}
          label="휴대전화"
          value={phone}
          onChangeText={text => setPhone(removeWhitespace(text))}
          onSubmitEditing={_handleSignupButtonPress}
          placeholder="예시) 010-1234-5678"
          returnKeyType="done" 
        />

        <ErrorText>{errorMessage}</ErrorText>
        <Button title="가입하기" onPress={_handleSignupButtonPress} disabled={disabled} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signup;