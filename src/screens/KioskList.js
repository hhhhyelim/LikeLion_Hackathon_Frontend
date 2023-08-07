import React from 'react';
import styled from 'styled-components/native';
import { Text, SafeAreaView, ScrollView } from 'react-native';

const KioskList = () => {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TitleContainer>
          <Text style={{ fontSize: 25, fontWeight: '700' }}>지역 선택</Text>
        </TitleContainer>
        
      </Container>
  
    </SafeAreaView>
  );
}

export default KioskList;