import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.quaternary,
    },
    image: {
        height: 330,
        width: '100%',
        marginVertical: 1,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 28,
        fontFamily: 'CourgetteRegular',
        marginVertical: 2,
        margin:8, 
        textDecorationLine: 'underline'
    },
    price: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 1,
        marginLeft: 5,
    },
    description: {
        marginLeft: 8,
        fontSize: 15,
    }
})