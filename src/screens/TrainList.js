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
  margin-left: 30  px;
 
`;
  
const List = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 20px;
  margin: 10px;
 
`;

const TrainList = ({navigation}) => {
 
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TitleContainer>
          <DropdownContainer>  
            <Dropdown />
          </DropdownContainer>
          <Title>기차표예매</Title>
          <Button onPress={() => navigation.navigate('TrainWrite')}>
            <Text>글작성</Text>
          </Button>
        </TitleContainer>
      
      </Container>
    </SafeAreaView>
  );
}

export default TrainList;