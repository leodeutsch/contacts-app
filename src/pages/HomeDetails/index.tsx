import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import Header from '../../components/Header';
import ButtonIcon from '../../components/ButtonIcon';
import LineInfo from '../../components/LineInfo';

import styles from './style';

interface HomeRouteParams{
    avatar: string;
    name: string;
    number: string;
    email: string;
}

function HomeDetails(){
    const route = useRoute();
    const {navigate} = useNavigation();

    const params = route.params as HomeRouteParams;

    function handleToBack(){
        navigate('HomeList');
    }

    return(
        <View style={styles.container}>
            <Header title="Detalhes" left={(
                <RectButton style={{position: 'absolute', left: 25, top: 35}} onPress={handleToBack}>
                    <FontAwesome5 name="arrow-left" size={24} color="#FFF" />
                </RectButton>
            )}/>

            <View style={styles.main}>
                <View style={styles.mainBox1}>
                    <Image style={styles.image} source={{uri: params.avatar}}/>
                    <Text style={styles.textBox1}>{params.name}</Text>
                </View>
                <View style={styles.mainBox2}>
                    <ButtonIcon name="call" text="Call"/>
                    <ButtonIcon name="message" text="Message"/>
                    <ButtonIcon name="videocam" text="Video"/>
                    <ButtonIcon name="email" text="Email"/>
                </View>

                <View style={styles.mainBox3}>
                    <LineInfo icon="call" text={params.number} />
                    <LineInfo icon="email" text={params.email} />
                </View>
            </View>

            <RectButton style={styles.button}>
                <MaterialIcons name="edit" size={24} color="#FAFAFA"/>
                <Text style={styles.textButton}>Edit Contact</Text>
            </RectButton>
        </View>
    );
}

export default HomeDetails;