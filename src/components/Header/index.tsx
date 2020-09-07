import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

interface HeaderProps{
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

export default Header;