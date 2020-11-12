import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import BitcoinList from '../pages/BitcoinList';
import WalletDetails from '../pages/WalletDetails';

const {Navigator, Screen} = createStackNavigator();

function BitcoinStack(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="BitcoinList" component={BitcoinList}/>
      <Screen name="WalletDetails" component={WalletDetails}/>
    </Navigator>
  );
}

export default BitcoinStack;