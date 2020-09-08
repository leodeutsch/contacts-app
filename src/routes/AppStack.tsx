import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import HomeList from '../pages/HomeList';
import HomeDetails from '../pages/HomeDetails';

const {Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="HomeList" component={HomeList}/>
                <Screen name="HomeDetails" component={HomeDetails}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;