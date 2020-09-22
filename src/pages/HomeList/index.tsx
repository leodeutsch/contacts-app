import React, { useState } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

import Header from '../../components/Header';
import ContactItem from '../../components/ContactItem';

import styles from './style';

function HomeList(){

    let dados = [
        {
            "id": '01',
            "name": "Bruno Kurt",
            "avatar": "https://randomuser.me/api/portraits/men/91.jpg",
            "number": "(55) 98252-6432"
        },
        {
            "id": '02',
            "name": "Alexandria Silva",
            "avatar": "https://randomuser.me/api/portraits/women/17.jpg",
            "number": "(11) 98888-1158"
        },
        {
            "id": '03',
            "name": "Karine Mioto",
            "avatar": "https://randomuser.me/api/portraits/women/10.jpg",
            "number": "(79) 99852-2498"
        },
        {
            "id": '04',
            "name": "Weller Brow",
            "avatar": "https://randomuser.me/api/portraits/women/22.jpg",
            "number": "(71) 92518-6883"
        },
        {
            "id": '05',
            "name": "Laís Lorena Ayla",
            "avatar": "https://randomuser.me/api/portraits/women/25.jpg",
            "number": "(71) 92518-6883"
        },
        {
            "id": '06',
            "name": "Kevin Yago",
            "avatar": "https://randomuser.me/api/portraits/men/2.jpg",
            "number": "(71) 92518-6883"
        },
        {
            "id": '07',
            "name": "Antônio Henrique",
            "avatar": "https://randomuser.me/api/portraits/men/29.jpg",
            "number": "(71) 92518-6883"
        },
        {
            "id": '08',
            "name": "Felipe Tiago",
            "avatar": "https://randomuser.me/api/portraits/men/14.jpg",
            "number": "(71) 92518-6883"
        },
        {
            "id": '09',
            "name": "Catarina Beatriz",
            "avatar": "https://randomuser.me/api/portraits/women/90.jpg",
            "number": "(71) 92518-6883"
        },
        {
            "id": '10',
            "name": "Carolina Raquel",
            "avatar": "https://randomuser.me/api/portraits/women/35.jpg",
            "number": "(71) 92518-6883"
        },
        {
            "id": '11',
            "name": "Thales Ryan",
            "avatar": "https://randomuser.me/api/portraits/men/13.jpg",
            "number": "(71) 92518-6883"
        },
        {
            "id": '12',
            "name": "Weller Brow",
            "avatar": "https://randomuser.me/api/portraits/men/48.jpg",
            "number": "(71) 92518-6883"
        },
        {
            "id": '13',
            "name": "Raimundo Calebe",
            "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
            "number": "(71) 92518-6883"
        },
        {
            "id": '14',
            "name": "Vanessa Silveira",
            "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
            "number": "(71) 92518-6883"
        },
        {
            "id": '15',
            "name": "Ruan Victor",
            "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
            "number": "(71) 92518-6883"
        },
    ]

    return(
        <View style={styles.container}>
            <Header title="Contatos" />

            <FlatList
                data={dados}
                renderItem={({item}) => <ContactItem item={item} />}
                keyExtractor={item => item.id}
            />

            <RectButton style={styles.button}>
                <FontAwesome5 name="plus" size={24} color="#FAFAFA"/>
            </RectButton>
        </View>
    );
}

export default HomeList