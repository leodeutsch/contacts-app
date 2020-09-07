import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './style';
import Header from '../../components/Header';
import ContactItem from '../../components/ContactItem';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

function HomeList(){
    return(
        <View style={styles.container}>
            <Header title="Contatos" />

            <ScrollView>
                <ContactItem nome="Gustavo" />

                <ContactItem nome="Alice" />
                <ContactItem nome="Claudia" />
                <ContactItem nome="Anderson" />
                <ContactItem nome="Carlos" />
                <ContactItem nome="Feijão" />
                <ContactItem nome="Cero" />
                <ContactItem nome="Pai" />
                <ContactItem nome="Mãe" />
                <ContactItem nome="Cesar" />
            </ScrollView>

            <RectButton style={styles.button}>
                <FontAwesome5 name="plus" size={24} color="#FAFAFA"/>
            </RectButton>
        </View>
    );
}

export default HomeList