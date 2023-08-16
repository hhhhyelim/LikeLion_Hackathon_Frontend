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
  flexDirection: "row";
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 30px;
`;


const KoiskTest2= ({navigation}) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Head />
          <TitleContainer>
            <Text style={{ fontSize: 25, fontWeight: '700' }}>키오스크 자격시험</Text>
          </TitleContainer>

          <Text style={{fontSize:15, fontWeight: '400', textAlign: 'center'}}>
              {"\n"}다음 키오스크 화면을 보고{"\n"}</Text>
              <Text style={{fontSize:15, fontWeight: '400', textAlign: 'center', color: 'blue'}}
              >아이스 카페라떼</Text> 
              {/* '아이스 카페라떼' 글자색상 파란색 */}
              <Text style={{fontSize:15, fontWeight: '400', textAlign: 'center'}}
              >를 주문하기 위해 눌러야 할{"\n"}목록버튼을 선택해주세요.{"\n"}{"\n"}{"\n"}</Text>
                    <ButtonRow>
            
            <Button2 onPress={() => navigation.navigate('KioskTest3')}>
              <ButtonText>커피</ButtonText>
            </Button2>
            <Button2 onPress={() => navigation.navigate('KioskTest3')}>
              <ButtonText>밀크티</ButtonText>
            </Button2>
          </ButtonRow>
          <ButtonRow>
            <Button2 onPress={() => navigation.navigate('KioskTest3')}>
              <ButtonText>파르페/빙수</ButtonText>
            </Button2>
            <Button2 onPress={() => navigation.navigate('KioskTest3')}>
              <ButtonText>음료류</ButtonText>
            </Button2>
          </ButtonRow>
          
        
        </Container>
      </SafeAreaView>
    );
  };
  
  export default KoiskTest2;