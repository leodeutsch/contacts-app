import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: '1%',
        marginVertical: '0.5%',
        borderRadius: 5, 
        padding: 10,
        backgroundColor: '#b48090'
    },
    image:{
        width: 48,
        height: 48,
        borderRadius: 32,
        backgroundColor: '#eee',
        marginHorizontal: 20
    },

    text: {
        marginLeft: 10,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 18,
        color: '#FAFAFA'
    }
});

export default styles;