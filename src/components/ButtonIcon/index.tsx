import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import styles from './style';

interface ButtonIconProps{
    name: string;
    text: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({name, text}) => {

    function handlePage404(){
        Alert.alert("Info", "Ops que pena! Funcionalidade ainda não criada")
    }

    return(
        <>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handlePage404}>
                <MaterialIcons name={name} size={36} color="#7D3F53"/>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </>
    );
}

export default ButtonIcon;