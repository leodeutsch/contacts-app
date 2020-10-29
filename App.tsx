import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppStack from './src/routes/AppStack';
import { AppLoading } from 'expo';
import {Ubuntu_700Bold, Ubuntu_400Regular, useFonts, Ubuntu_300Light_Italic} from '@expo-google-fonts/ubuntu';
import AppTab from './src/routes/AppTab';

export default function App() {

  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
    Ubuntu_300Light_Italic
  });

  if(!fontsLoaded){
    return <AppLoading /> 
  }else{
    return (
      <>
        <StatusBar style="light" translucent />
        <AppTab />
      </>
    );
  }
  
}

