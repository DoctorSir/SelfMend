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
        backgroundColor: "#F6E3CB",
        marginBottom: 16,
        color: "red",
        padding: 10,
    },
    journalInput: {
        width: "75%",
        height: 400,
        backgroundColor: "#F6E3CB",
        margin: 16,
        padding: 5,
    },
    journalOutline: {
        borderWidth: 0,
        borderRadius: 25,
    },
    titleText: {
        fontSize: 42,
        color: "#21080C",
        fontWeight: "bold",
        margin: 24,
    },
    headerText: {
        fontSize: 16,
        color: '#5194B8',
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
        textAlign: "center"
    },
    submitOpac: {
        backgroundColor: "#70B533",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center"
    },
    actionButtonText: {
        color: "#FCF6EE",
    },
    dropdown: {
        borderWidth: 2,
        borderRadius: 20,
        width: "50%",
        marginTop: 10,
        marginBottom: 30,
        height: 50,
        backgroundColor: '#FCF6EE'
    },
    subText: {
        textDecorationLine: "underline",
        color: "#70B533",
    },
    exerciseText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#21080C",
        padding: 10,
    },
    exerciseTitle: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#5194B8"
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 25,
    },
    reminderText: {
        fontSize: 18,
        color: '#555555',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginVertical: 25
    },

});
