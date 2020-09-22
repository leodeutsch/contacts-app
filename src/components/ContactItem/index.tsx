import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

interface Contact{
    item: ContactProps;
}

export interface ContactProps{
    avatar?: string;
    name: string;
    number?: string;
}

const ContactItem: React.FC<Contact> = ({item}) =>{

    const navigation = useNavigation();

    function handleToDetails(){
        navigation.navigate('HomeDetails', {avatar: item.avatar, name: item.name});
    }
    
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={handleToDetails}>
            <Image style={styles.image} source={{uri: item.avatar}}/> 
            <View>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textNumber}>{item.number}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ContactItem;