import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import HomeList from '../pages/HomeList';
import HomeDetails from '../pages/HomeDetails';

const {Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="HomeList" component={HomeList}/>
            <Screen name="HomeDetails" component={HomeDetails}/>
        </Navigator>
    );
}

export default AppStack;