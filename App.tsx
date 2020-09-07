import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppStack from './src/routes/AppStack';
import { AppLoading } from 'expo';
import {Ubuntu_700Bold, Ubuntu_400Regular, useFonts} from '@expo-google-fonts/ubuntu';

export default function App() {

  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading /> 
  }else{
    return (
      <>
        <StatusBar style="auto" translucent />
        <AppStack />
      </>
    );
  }
  
}

