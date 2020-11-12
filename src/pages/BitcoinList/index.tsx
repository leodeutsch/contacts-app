import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Header';
import ContactItem from '../../components/ContactItem';
import styles from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-generator';

interface BitcoinItemProps {
  name: string;
  bitcoinAddress: string;
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
      navigation.navigate('WalletDetails', {name: item.name, bitcoinAddress: item.bitcoinAddress});
  }
  
  return(
      <TouchableOpacity style={styles.containerItem} activeOpacity={0.8} onPress={handleToDetails}>
          {/* <Image style={styles.image} source={{uri: item.avatar}}/>  */}
          <QRCode
          value={item.bitcoinAddress}
          size={50}
          bgColor='black'
          fgColor='white'/>
          <View>
              <Text style={styles.textName}>{item.name}</Text>
              <Text style={styles.textNumber}>{item.bitcoinAddress}</Text>
          </View>
      </TouchableOpacity>
  );
}
  