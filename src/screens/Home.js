import React from 'react';
import styled from 'styled-components/native';
import { Text, SafeAreaView, ScrollView } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const Head = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.homeBackground};
  border-radius: 0px 0px 30px 30px;
`;

const TitleContainer = styled.View`
  align-items: center;
  margin-top: 23%;
`;


const Button1 = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.testButton};
  padding: 10px 20px;
  border-radius: 10px;
  margin: 5% 18px;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  
`;
const ButtonText2 = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  
`;


const Button2 = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.testButton};
  width: 174px;
  height: 174px;
  border-radius: 10px;
  border: 1px solid #C9BCBC;
  background: #FFF;
  flexDirection: "row";
`;
const KioskButtonText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  margin-top: 80%;
  
`;
const DeliveryButtonText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  margin-top: 80%;
  margin-top: 80%;
  
`;
const SearchButtonText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  margin-top: 80%;
  
`;
const TrainButtonText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  margin-top: 80%;
`;


const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 18px;
`;



const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Head />
        <TitleContainer>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>목록</Text>
        </TitleContainer>
        <ScrollView>
          <Button1 onPress={() => navigation.navigate('TestMain')}>
            <ButtonText>시험</ButtonText>
            <ButtonText2>시험보고 선생님이 되어보세요!</ButtonText2>
          </Button1>
          <ButtonRow>
            <Button2 onPress={() => navigation.navigate('KioskList')}>
              <KioskButtonText>키오스크</KioskButtonText>
            </Button2>
            <Button2>
              <DeliveryButtonText>배달</DeliveryButtonText>
            </Button2>
          </ButtonRow>
          <ButtonRow>
            <Button2>
              <SearchButtonText>검색</SearchButtonText>
            </Button2>
            <Button2>
              <TrainButtonText>기차표예매</TrainButtonText>
            </Button2>
          </ButtonRow>
          
        </ScrollView>
      </Container>
      
    </SafeAreaView>
  );
};

export default Home;
