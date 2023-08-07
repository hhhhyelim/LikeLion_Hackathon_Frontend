import React from 'react';
import styled from 'styled-components/native';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Head = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 338px;
  background-color: #FFF2D1;
  border-radius: 0px 0px 30px 30px;
  `;

const TitleContainer = styled.View`
  align-items: center;
  margin-top: 91px;
`;

const Button = styled.TouchableOpacity`
  background-color: #F1F1F1;
  padding: 10px;
  border-radius: 30px;
  margin: 10px 18px;
  

`;

const ButtonText = styled.Text`
  color: 'black';
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  
`;




const TestMain = ({navigation}) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Head />
          <TitleContainer>

            <Text style={{ fontSize: 25, fontWeight: '600' }}>선생님 자격시험</Text>
          </TitleContainer>
            <Text style={{fontSize:13, fontWeight: '400', textAlign: 'center'}}>
              {"\n"}각 테스트에 통과하시면 {"\n"}
                해당 주제에 대한 선생님이 될 수 있는 {"\n"}
                인증 뱃지가 주어집니다. {"\n"}{"\n"}
                아래 버튼을 선택하면 {"\n"}
                바로 시험이 시작되니 {"\n"}

                주의하세요! {"\n"}{"\n"}</Text>
          <Button>  
            <ButtonText onPress= {() => navigation.navigate('KioskTest1')}>키오스크</ButtonText>
          </Button>
          <Button>  
            <ButtonText>배달음식 주문</ButtonText>
          </Button>
          <Button>  
            <ButtonText>인터넷 검색</ButtonText>
          </Button>
          <Button>  
            <ButtonText>기차표 예매</ButtonText>
          </Button>
        
        
        </Container>
      </SafeAreaView>
    );
  };
  
  export default TestMain;