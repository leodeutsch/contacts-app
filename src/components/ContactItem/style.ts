import { StyleSheet } from "react-native";
import { Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: 25,
        marginVertical: 5,
        borderRadius: 30, 
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#cfc0c0'
    },
    image:{
        width: 48,
        height: 48,
        borderRadius: 32,
        backgroundColor: '#eee',
        marginHorizontal: 15
    },

    text: {
        marginLeft: 20,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 18,
        color: '#FAFAFA'
    }
});

export default styles;