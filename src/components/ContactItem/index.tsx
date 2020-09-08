import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

interface ContactProps{
    avatar?: string;
    nome: string;
}

const ContactItem: React.FC<ContactProps> = ({avatar, nome}) =>{

    const {navigate} = useNavigation();

    function handleToDetails(){
        navigate('HomeDetails');
    }
    
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={handleToDetails}>
            <Image style={styles.image} source={{uri: avatar}}/> 
            <Text style={styles.text}>{nome}</Text>
        </TouchableOpacity>
    );
}

export default ContactItem;