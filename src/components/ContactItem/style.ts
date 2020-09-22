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
        width: 52,
        height: 52,
        borderRadius: 32,
        backgroundColor: '#eee',
        marginHorizontal: 20
    },

    textName: {
        marginLeft: 10,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 18,
        color: '#FAFAFA',
        paddingBottom: '2%',
    },
    textNumber: {
        marginLeft: 10,
        fontFamily: 'Ubuntu_300Light_Italic',
        fontSize: 12,
        color: '#FAFAFC',
    }
});

export default styles;