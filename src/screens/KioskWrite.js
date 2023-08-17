import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text, SafeAreaView,StyleSheet,View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; 
import DropDownPicker from 'react-native-dropdown-picker';
import axios from "axios";

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
  padding-bottom: 10px;
  padding-top: 10px;
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
  //const [location, setLocation]=useState("");
  const [content, setContent] = useState("");
  const [disabled, setDisaled] = useState(true);
  
  const [open, setOpen] = useState(false);
  
  // 라이브러리에 기본값을 설정할 수 있는 defaultValue 속성이 없어졌다고 하여 value를 초기화할 때 기본값을 지정해주었다.
  const [value, setValue] = useState({label: '송파구', value: '1'});

  // 드롭다운 메뉴에 들어갈 아이템들 {label: '메뉴명', value: '값} 형태
  const [location, setLocation] = useState([
    { label: '송파구', value: '1' },
    { label: '강서구', value: '2' },
    { label: '노원구', value: '3' },
    { label: '은평구', value: '4' },
  ]);
  

  const onChangeTitle = (payload) => setTitle(payload);
  const onChangeLocation = (payload) => setLocation(payload);
  const onChangeContent = (payload) => setContent(payload);

  useEffect(() => {
    setDisaled(!(title && location && content));
  }, [title, location, content]);

 
  /*
  const handlePostSubmit = async () => {
    try {
      const response = await axios.post('/', {
        title,
        location,
        content,
      });

      console.log('response Data', response.data);
      navigation.navigate('KioskList');
    } catch (error) {
      console.error('Eroor:', error);
    }
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
          <View style={styles.container}>
            <DropDownPicker 
              open={open}
              value={value}
              items={location}
              placeholder="송파구"
              setOpen={setOpen}
              setValue={setValue}
              setItems={setLocation}
            /> 
          </View>
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


const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: 'white',
    zIndex: 1000,
  },

});


export default KioskWrite;
