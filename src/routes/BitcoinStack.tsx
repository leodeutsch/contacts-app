import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import BitcoinList from '../pages/BitcoinList';
import HomeDetails from '../pages/HomeDetails';

const {Navigator, Screen} = createStackNavigator();

function BitcoinStack(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="BitcointList" component={BitcoinList}/>
      <Screen name="HomeDetails" component={HomeDetails}/>
    </Navigator>
  );
}

export default BitcoinStack;