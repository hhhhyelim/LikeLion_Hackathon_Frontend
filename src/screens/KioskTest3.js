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
  height: 287px;
  background-color: #FFF2D1;
  border-radius: 0px 0px 30px 30px;
  `;

const TitleContainer = styled.View`
  align-items: center;
  margin-top: 91px;
`;

const ButtonText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  
`;
const Button2 = styled.TouchableOpacity`
  background-color: #F1F1F1;
  padding-top: 12px;
  border-radius: 30px;
  margin: 12px 18px;
  width: 130px;
  height: 50px;
  border: 1px solid #C9BCBC;
  flexDirection: row;
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 30px;
`;


const KoiskTest3= ({navigation}) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Head />
          <TitleContainer>
            <Text style={{ fontSize: 25, fontWeight: '700' }}>키오스크 자격시험</Text>
          </TitleContainer>

          <Text style={{fontSize:15, fontWeight: '400', textAlign: 'center'}}>
              {"\n"}다음 키오스크 화면을 보고 {"\n"}</Text>
              <Text style={{fontSize:15, fontWeight: '400', textAlign: 'center', color: 'blue'}}
              >카드 결제</Text> 
              {/* '카드결제' 글자색상 파란색 */}
              <Text style={{fontSize:15, fontWeight: '400', textAlign: 'center'}}
              >를 하기 위해 눌러야 할{"\n"}목록을 선택해주세요.{"\n"}{"\n"}{"\n"}</Text>
                    <ButtonRow>
            
            <Button2 onPress={() => navigation.navigate('KioskResult')}>
              <ButtonText>민트모카</ButtonText>
            </Button2>
            <Button2 onPress={() => navigation.navigate('KioskResult')}>
              <ButtonText>전체 취소</ButtonText>
            </Button2>
          </ButtonRow>
          <ButtonRow>
            <Button2 onPress={() => navigation.navigate('KioskResult')}>
              <ButtonText>현금</ButtonText>
            </Button2>
            <Button2 onPress={() => navigation.navigate('KioskResult')}>
              <ButtonText>카드</ButtonText>
            </Button2>
          </ButtonRow>
          
        
        </Container>
      </SafeAreaView>
    );
  };
  
  export default KoiskTest3;