import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FCF6EE",
    },
    textInput: {
        width: "75%",
        height: 400,
        backgroundColor: "#f6e3cb",
        marginBottom: 16,
        color: "red",
        padding: 10,
    },
    journalInput: {
        width: "75%",
        height: 400,
        backgroundColor: "#f6e3cb",
        margin: 16,
        padding: 10,
        borderRadius: 15,
    },
    titleText: {
        fontSize: 48,
        color: "#21080C",
        fontWeight: "bold",
        margin: 24,
    },
    buttonOpac: {
        backgroundColor: "#21080C",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center",
    },
    actionButtonText: {
        color: "#21080F",
    },
    subText: {
        textDecorationLine: "underline",
        color: "#EE4B2B",
    },
    exerciseText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "brown",
        padding: 10,
    },
    exerciseTitle: {
        fontSize: 36,
        fontWeight: "bold"
    }

});
