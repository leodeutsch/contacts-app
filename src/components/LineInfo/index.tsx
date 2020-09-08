import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface LineInfoProps{
    icon: string;
    text: string;
    right?: ReactNode;
}

const LineInfo: React.FC<LineInfoProps> = ({icon, text, right}) => {
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10, borderBottomWidth: 0.8, marginHorizontal: 10, paddingBottom: 5}}>
            <MaterialIcons name={icon} size={28} color="#020202" /> 
            <Text style={{fontSize: 18, marginLeft: 15}}>{text}</Text>
            {right}
        </View>
    );
}

export default LineInfo;