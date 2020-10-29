import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

interface LineInfoProps{
    icon: string;
    text: string;
    right?: ReactNode;
}

const LineInfo: React.FC<LineInfoProps> = ({icon, text, right}) => {
    return(
        <View style={styles.container}>
            <MaterialIcons name={icon} size={28} color="#020202" /> 
            <Text style={styles.text}>{text}</Text>
            {right}
        </View>
    );
}

export default LineInfo;