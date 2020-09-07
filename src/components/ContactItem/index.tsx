import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

interface ContactProps{
    avatar?: string;
    nome: string;
}

const ContactItem: React.FC<ContactProps> = ({avatar, nome}) =>{
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <Image style={styles.image} source={{uri: avatar}}/> 
            <Text style={styles.text}>{nome}</Text>
        </TouchableOpacity>
    );
}

export default ContactItem;