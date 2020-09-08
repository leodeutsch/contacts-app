import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import ButtonIcon from '../../components/ButtonIcon';
import LineInfo from '../../components/LineInfo';

import styles from './style';

function HomeDetails(){

    const {navigate} = useNavigation();

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
                    <Image style={styles.image}/>
                    <Text style={styles.textBox1}>Nome do Contato</Text>
                </View>
                <View style={styles.mainBox2}>
                    <ButtonIcon name="call" text="Call"/>
                    <ButtonIcon name="message" text="Message"/>
                    <ButtonIcon name="videocam" text="Video"/>
                    <ButtonIcon name="email" text="Email"/>
                </View>

                <View style={styles.mainBox3}>
                    <LineInfo icon="call" text="(71) 98000-4000 " />
                    <LineInfo icon="email" text="teste@gmail.com " />
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