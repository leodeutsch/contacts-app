import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fffafa'
    },

    button:{
        width: 50,
        height: 50,
        borderRadius: 32,
        position: "absolute",
        bottom: 15,
        right: 15,
        backgroundColor: '#7D3F53',
        justifyContent: "center", 
        alignItems: "center"
    },
});

export default styles;