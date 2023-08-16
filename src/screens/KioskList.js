import React,{useEffect, useState} from 'react';
import styled from 'styled-components/native';
import { Text, SafeAreaView, ScrollView, FlatList } from 'react-native';
import Dropdown from './Dropdown';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;


const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  margin-top: 10%;
 
`;

const DropdownContainer = styled.View`
  flex: 1; 
  background-color: white;
  z-index: 1000;
  
`;


const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-left: 40%;
`;
  
const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.writeBg};
  padding: 10px 20px;
  border-radius: 20px;
  margin-left: 40px;
 
`;
  
const List = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 20px;
  margin: 10px;
 
`;

const KioskList = ({navigation}) => {
  /*
  const [boardList, setBoardList] = useState([]);

  const getBoardList = async () => {
    const resp = await (await axios.get('//localhost:8080/board')).data; // 2) 게시글 목록 데이터에 할당
    setBoardList(resp.data); // 3) boardList 변수에 할당

    const pngn = resp.pagination;
    console.log(pngn);
  }
  useEffect(() => {
    getBoardList(); // 1) 게시글 목록 조회 함수 호출
  }, []);
*/
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TitleContainer>
          <DropdownContainer>  
            <Dropdown />
          </DropdownContainer>
          <Title>키오스크</Title>
          <Button onPress={() => navigation.navigate('KioskWrite')}>
            <Text>글작성</Text>
          </Button>
        </TitleContainer>
      
      </Container>
    </SafeAreaView>
  );
}

export default KioskList;