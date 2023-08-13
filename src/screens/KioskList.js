import React from 'react';
import styled from 'styled-components/native';
import { Text, SafeAreaView, ScrollView } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;


const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10%;
 
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
  margin: 10px;
 
`;

const KioskList = ({navigation}) => {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TitleContainer>
          <Title>키오스크</Title>
          <Button onPress={() => navigation.navigate('KioskWrite')}>
            <Text>글작성</Text>
          </Button>
        </TitleContainer>
        {posts.map((post, index) => (
          <PostItem key={index}>
            <PostTitle>{post.title}</PostTitle>
            <PostLocation>{post.location}</PostLocation>
          </PostItem>
        ))}
      </Container>
  
    </SafeAreaView>
  );
}

export default KioskList;