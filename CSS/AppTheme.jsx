import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCF6EE'
    },
    title: {
        fontSize: 48,
        color: '#21080C',
        fontWeight: 'bold',
        margin: 24,
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