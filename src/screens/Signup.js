import React,{useState, useRef, useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {Text, Alert, View, TextInput} from 'react-native';

import { Button} from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { removeWhitespace } from '../utils/common';
import { ProgressContext } from '../contexts';
import DatePicker from 'react-datepicker';
import {RadioButton } from 'react-native-paper';
import axios from "axios";


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 40px 20px;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;

const Signup = ({ navigation }) => {
  const { spinner } = useContext(ProgressContext);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ck_password, setPasswordConfirm] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState();
  const [phoneNumber, setPhoneNumber] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const birthRef = useRef();
  const phoneRef = useRef();

  const didMountRef = useRef();

  useEffect(() => {
    if (didMountRef.current) {
      let _errorMessage = '';
      if (!username) {
        _errorMessage = '아이디를 입력하세요 (최소 10글자)';
      } else if (password !== ck_password) {
        _errorMessage = '비밀번호가 다릅니다';
      } else if (!name) {
        _errorMessage = '이름을 입력하세요';
      } else if (!birth) {
        _errorMessage = '생년월일을 입력하세요';
      } else if (!phoneNumber) {
        _errorMessage = '휴대전화 번호를 입력하세요';
      } else if (!gender) {
        _errorMessage = '성별을 선택하세요';
      } else {
        _errorMessage = '';
      }
      setErrorMessage(_errorMessage);
    } else {
      didMountRef.current = true;
    }
  }, [name, username, password, ck_password, birth, phoneNumber, gender]);

  useEffect(() => {
    setDisabled(
      !(
        name &&
        username &&
        password &&
        ck_password &&
        birth &&
        gender &&
        phoneNumber &&
        !errorMessage
      )
    );
  }, [name, username, password, ck_password, birth, phoneNumber, gender, errorMessage]);

  const _handleSignupButtonPress = async () => {
    if (username.length < 8) {
      Alert.alert('아이디는 8글자 이상 작성해야 합니다.');
      return;
    }

    spinner.start();

    const userData = {
      username,
      password,
      ck_password,
      name,
      birth,
      gender,
      phoneNumber,
    };

    axios
      .post(`http://172.30.1.67:8080/api/signup`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('성공');
      })
      .catch((error) => {
        console.log(error);
        console.log(error.res);
      });
  };

  return (
    <KeyboardAwareScrollView extraScrollHeight={20}>
      <Container>
        <Text style={{ fontSize: 30 }}>회원가입</Text>
        <TextInput
          label="이름"
          value={name}
          onChangeText={(text) => setName(text)}
          onSubmitEditing={() => {
            setName(name.trim());
            emailRef.current.focus();
          }}
          onBlur={() => setName(name.trim())}
          placeholder="이름"
          returnKeyType="next"
        />
        <TextInput
          ref={emailRef}
          label="아이디"
          value={username}
          onChangeText={(text) => setUsername(text)}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="아이디"
          returnKeyType="next"
        />
        <TextInput
          ref={passwordRef}
          label="비밀번호"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={() => passwordConfirmRef.current.focus()}
          placeholder="비밀번호"
          returnKeyType="next"
          secureTextEntry
        />
        <TextInput
          label="비밀번호 확인"
          value={ck_password}
          onChangeText={(text) => setPasswordConfirm(text)}
          onSubmitEditing={() => birthRef.current.focus()}
          placeholder="비밀번호 확인"
          returnKeyType="next"
          secureTextEntry
        />
        <TextInput
          ref={birthRef}
          label="생년월일"
          value={birth}
          onChangeText={(text) => setBirth(text)}
          onSubmitEditing={() => phoneRef.current.focus()}
          placeholder="예시) 1987.05.27"
          returnKeyType="next"
        />
        <RadioButton.Group onValueChange={(value) => setGender(value)} value={gender}>
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
        <TextInput
          ref={phoneRef}
          label="휴대전화"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
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
