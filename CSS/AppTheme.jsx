import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {  // Journal
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCF6EE'
    },
    staticContainer: {  // Mood Mapping
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FCF6EE'
    },
    scroll: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 0,
        backgroundColor: '#FCF6EE',
        minWidth: '100%',
    },
    title: {
        fontSize: 30,
        color: '#421018',
        fontWeight: 'bold',
        margin: 16,
        textAlign: "center"
    },
    userInput: {
        alignSelf: "center",
        width: "90%",
        height: 40,
        backgroundColor: 'none',
        marginBottom: 16,
    },
    errorText: {
        textAlign: "center",
        color: '#C70039',
        margin: 1,
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCF6EE'
    },

})