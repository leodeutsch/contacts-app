import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import HomeList from '../pages/HomeList';

const {Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="HomeList" component={HomeList}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;