import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

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
        color: "#421018",
        fontWeight: "bold",
        margin: 24,
    },
    headerText: {
        fontSize: 16,
        color: "#5194B8",
    },
    buttonOpac: {
        backgroundColor: "#421018",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center",
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
        textAlign: "center",
    },
    actionButtonText: {
        color: "#FCF6EE",
    },
    dropdown: {
        borderWidth: 2,
        borderRadius: 50,
        width: "50%",
        marginTop: 10,
        marginBottom: 30,
        height: 50,
        backgroundColor: "#5194B8",
        color: "#FCF6EE"
    },
    dropdownText: {
        color: "#FCF6EE"
    },
    subText: {
        textDecorationLine: "underline",
        color: "#70B533",
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 25,
        color: '#421018'
    },
    reminderText: {
        fontSize: 18,
        color: "#555555",
        textAlign: "center",
        paddingHorizontal: 20,
        marginVertical: 25,
    },
    entryContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCF6EE'
    },
    entryList: {
        padding: 10,
        width: windowWidth
    },
    entry: {
        borderWidth: 2,
        borderRadius: 25,
        margin: 5,
        padding: 10,
        color: "#421018",
    },
    entryDate: {
        marginBottom: 10,
        color: "#421018",
    },
    entryText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#421018",
        textAlign: "center"
    },
    entryMood: {
        textAlign: 'right'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 10,
        bottom: 10,
        backgroundColor: '#421018',
        borderRadius: '50%',
    },
    exerciseContainer: {
        backgroundColor: '#FCF6EE',
        flex: 1
    },
    exerciseHeader: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FCF6EE",
        justifyContent: "center"
    },
    exerciseTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#421018",
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    exerciseAction: {
        marginTop: 25,
        alignItems: "center",
        backgroundColor: "#FCF6EE",
        justifyContent: "center"
    },
    exerciseOpac: {
        backgroundColor: "#5194B8",
        borderRadius: 50,
        marginBottom: 20,
        paddingHorizontal: 30,
        paddingVertical: 20,
        width: windowWidth * .72,
        borderWidth: 2,
        borderColor: "#421018",
    },
    exerciseOpacText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#FCF6EE",
        textTransform: "uppercase",
        textAlign: 'center'
    },
    exerciseDetailsScrollContainer:{
        marginTop: 20
    },
    ytVideo: {
        flex: 1,
        width: windowWidth * .9,
        justifyContent: "center",
        alignSelf: "center",
    },
    exerciseSteps: {
        width: windowWidth * 0.75,
        alignSelf: "center",
        marginBottom: 50
    },
    exerciseStep: {
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "bold"
    }
});
