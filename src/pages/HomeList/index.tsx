import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import Header from '../../components/Header';
import ContactItem from '../../components/ContactItem';

import styles from './style';
import api from '../../services/api';

function HomeList(){

    const [dados, setDados] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        
        async function loading(){
            const result =  await api.get('/dados');
            console.log(result);
            setDados(result.data);
        }

        loading();
    },[]);

    return(
        <View style={styles.container}>
            <Header title="Contatos" />
            
            {error ? (
                <View>
                    <Text>Erro ao carregar os dados</Text>
                </View>
            ) : (
                <FlatList
                    data={dados}
                    renderItem={({item, index}) => <ContactItem item={item} />}
                    keyExtractor={index => index}
                />
            )}
            
        </View>
    );
}

export default HomeList