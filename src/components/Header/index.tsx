import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

interface HeaderProps{
    title: string;
    left?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({title, left}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            {left}
        </View>
    );
}

export default Header;