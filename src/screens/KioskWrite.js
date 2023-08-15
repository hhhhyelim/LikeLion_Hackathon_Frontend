import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; 


const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const TitleContainer = styled.View`
  align-items: center;
  margin-top: 10%;
`;

const Line = styled.View`
  width: 93%;
  height: 2px;
  background-color: black;
  margin-top: 10px;
  border-radius: 10px;
`;
const Contents = styled.View`
  margin: 7px 18px 1px 18px;
  flex-direction: row; 
  align-items: center;
`;

const TextLabel = styled.Text`
  flex: 1;
  font-size: 15px;
`;

const Input = styled.TextInput`
  flex: 4; 
  background-color: #F3F3F3;
  padding-vertical:12px;
  padding-horizontal: 20px;
  border-radius: 10px;
  font-size: 15px;
  color: black;
`;


const Input2 = styled.TextInput`
  width: 100%;
  height: 300px;
  background-color: #F3F3F3;
  border-radius: 10px;
  font-size: 15px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
`;


const SubmitButton = styled.TouchableOpacity`
  background-color: ${({isFilled}) => 
    isFilled? '#FFDB7C': '#FFDB7C'};
  padding: 10px;
  border-radius: 30px;
  margin: 10px 18px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const ButtonText = styled.Text`
color: ${({ isFilled }) =>
    isFilled ? 'grey' : 'black'};
  color: black;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  
`;

const KioskWrite = ({navigation}) => {
  //const { addPost } = useKiosk(); // KioskProvider로부터 addPost 함수를 가져옴

  const [title, setTitle] = useState(""); // 제목 저장
  const [location, setLocation]=useState("");
  const [content, setContent] = useState("");
  const [disabled, setDisaled] = useState(true);
  
  

  const onChangeTitle = (payload) => setTitle(payload);
  const onChangeLocation = (payload) => setLocation(payload);
  const onChangeContent = (payload) => setContent(payload);

  useEffect(() => {
    setDisaled(!(title && location && content));
  }, [title, location, content]);

  /*
  const handlePostSubmit = () => {
    const newPost = {
      id: new Date().getTime(), // 임시로 시간을 ID로 사용
      title,
      location,
      content,
    };

    addPost(newPost); // 게시물 추가
    navigation.navigate('KioskList'); // 게시물 리스트로 이동
  };

*/
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }} // ScrollView의 크기 조절을 위해 contentContainerStyle 설정
        keyboardShouldPersistTaps="handled" // 키보드가 나타날 때 터치 이벤트 처리 설정
      >
      <Container>
        <TitleContainer>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>게시글 작성</Text>
          <Line />
        </TitleContainer>
        <Contents>
          <TextLabel>제목</TextLabel>
          <Input
            returnKeyType="next"
            onChangeText={onChangeTitle}
            value={title}
            placeholder="제목을 입력하세요"
          />
        </Contents>
        <Contents>
          <TextLabel>지역</TextLabel>
          <Input
            returnKeyType="next"
            onChangeText={onChangeLocation}
            value={location}
            placeholder="지역을 선택하세요"
          />
        </Contents>
        <Contents>
          <Input2
            returnKeyType="done"
            onChangeText={onChangeContent}
            value={content}
            multiline ={true}
            placeholder="내용을 작성해주세요"
          />
        </Contents>
        <SubmitButton onPress={() => navigation.navigate('KioskList')} disabled={disabled} isFilled={!disabled}>  
            <ButtonText isFilled={!disabled}>게시물 올리기</ButtonText>
        </SubmitButton>
      </Container>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default KioskWrite;
