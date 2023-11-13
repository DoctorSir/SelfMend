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
        color: "#000000",
        fontWeight: "bold",
        margin: 24,
    },
    headerText: {
        fontSize: 16,
        color: "#5194B8",
    },
    buttonOpac: {
        backgroundColor: "#000000",
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
        borderRadius: 20,
        width: "50%",
        marginTop: 10,
        marginBottom: 30,
        height: 50,
        backgroundColor: "#FCF6EE",
    },
    subText: {
        textDecorationLine: "underline",
        color: "#70B533",
    },
    exerciseText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#000000",
        padding: 10,
    },
    exerciseTitle: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center",
        padding: 32,
    },
    button: {
        padding: 5,
        borderRadius: 5,
    },
    buttonBackground: {
        backgroundColor: "#090909",
    },
    buttonBackgroundPressed: {
        borderWidth: "2",
        backgroundColor: "#FCF6EE",
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        padding: 1,
    },
    buttonTextPressed: {
        textAlign: "center",
        color: "black",
        padding: 10,
        fontSize: 18,
    },
    exeContainer: {  // Exercise Container
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
        backgroundColor: "#FCF6EE"
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 25,
        color: '#000000'
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
        color: "#000000",
    },
    entryDate: {
        textDecorationLine: 'underline',
        marginBottom: 10,
        color: "#5194B8",
    },
    entryText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000000",
    },
    entryMood: {
        textAlign: 'right'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 10,
        bottom: 10,
        backgroundColor: '#70B533',
        borderRadius: '50%',
    },
    exerciseContainer: {
        backgroundColor: '#FCF6EE',
        flex: 1
    },
    exerciseHeader: {
        padding: 16,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FCF6EE",
        justifyContent: "center"
    },
    exerciseTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000000",
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginBottom: 30
    },
    exerciseAction: {
        marginTop: 50,
        alignItems: "center",
        backgroundColor: "#FCF6EE",
        justifyContent: "center"
    },
    exerciseOpac: {
        backgroundColor: "#000000",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 50,
        paddingHorizontal: 30,
        paddingVertical: 20,
        width: windowWidth * .72
    },
    exerciseOpacText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#FFFFFF",
        textTransform: "uppercase",
        textAlign: 'center'
    },
    ytVideo: {
        flex: 1,
        width: windowWidth * .9,
        justifyContent: "center",
        alignSelf: "center",
    },
    exerciseSteps:{
        width: windowWidth *.75,
        alignSelf: "center",
        marginBottom: 50
    },
    exerciseStep: {
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "bold"
    }
});
