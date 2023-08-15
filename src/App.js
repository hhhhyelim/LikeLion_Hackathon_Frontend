import React, {useState} from 'react';
import { StatusBar,Image } from 'react-native';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import Navigation from './navigations';
import {images} from './utils/images';
import { ProgressProvider } from './contexts';


/*
const cacheFonts =fonts =>{
  return fonts.map(font => Font.loadAsync(font));
};

*/

const App = ()=>{
  /*
  const [isReady, setIsReady]= useState(false);

  
  const _loadAssets = async() => {
    const fontAssets = cacheFonts([]);

    await Promise.all([...fontAssets]);
  };
 
  */


  return (
    <ThemeProvider theme ={theme}>
      <ProgressProvider>
      
        <StatusBar barStyle="dark-conent" />
        <Navigation />
        
      </ProgressProvider>
    </ThemeProvider>
  );
  
  
};

export default App;

