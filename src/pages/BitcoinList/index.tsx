import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Header';
import ContactItem from '../../components/ContactItem';
import styles from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

interface BitcoinItemProps {
  name: string;
  bitcoinAdress: string;
}

interface BitCointProps {
  item: BitcoinItemProps;
}

function BitcoinList(){

  const [dados, setDados] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loading(){
        const result =  await api.get('/users');
        setDados(result.data);
    }
    loading();
  },[]);

  return(
    <View style={styles.container}>
      <Header title="Bitcoin Wallets" />
      {error ? (
        <View>
            <Text>Erro ao carregar os dados</Text>
        </View>
      ) : (
        <FlatList
          data={dados}
          renderItem={({item}) => <BitcoinItem item={item} />}
          keyExtractor={({item, index}) => index}
        />
      )}
    </View>
  );
}

export default BitcoinList;

const BitcoinItem: React.FC<BitCointProps> = ({ item }) =>{

  const navigation = useNavigation();

  function handleToDetails(){
      navigation.navigate('HomeDetails', {name: item.name, walletAddress: item.bitcoinAdress});
  }
  
  return(
      <TouchableOpacity style={styles.containerItem} activeOpacity={0.8} onPress={handleToDetails}>
          {/* <Image style={styles.image} source={{uri: item.avatar}}/>  */}
          <View>
              <Text style={styles.textName}>{item.name}</Text>
              <Text style={styles.textNumber}>{item.bitcoinAdress}</Text>
          </View>
      </TouchableOpacity>
  );
}
  