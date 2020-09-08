import React from 'react';
import { View, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

import Header from '../../components/Header';
import ContactItem from '../../components/ContactItem';

import styles from './style';

function HomeList(){

    return(
        <View style={styles.container}>
            <Header title="Contatos" />

            <ScrollView>
                <ContactItem nome="Gustavo"  />

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