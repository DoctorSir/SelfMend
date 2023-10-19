import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCF6EE'
    },
    title: {
        margin: 15,
        color: '#21080C',
        fontWeight: 'bold',
        fontSize: 20
    },
    userInput: {
        width: '75%',
        height: 40,
        backgroundColor: 'none',
        marginBottom: 16,
    },
    errorText: {
        color: 'red',
        marginTop: 16,
    }
})