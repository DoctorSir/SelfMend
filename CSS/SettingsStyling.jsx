import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: '#FCF6EE',
        flex: 1
    },
    settingsSectionText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#421018",
        textTransform: "uppercase",
        letterSpacing: 1.2,
        textAlign: 'center'
    },
    title: {
        marginTop: "10%",
        fontSize: 24,
        fontWeight: "bold",
        color: "#421018",
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 8,
    },
    accountTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#421018",
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 8,
    },
    profile: {
        padding: 16,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FCF6EE",
    },
    profileName: {
        marginTop: 12,
        fontSize: 20,
        fontWeight: "600",
        color: "#090909",
    },
    profileEmail: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: "400",
        color: "#848484",
    },
    settingsActions: {
        alignItems: "center",
        backgroundColor: "#FCF6EE",
        flex: 1,
    },
    settingsOpac: {
        backgroundColor: "#5194B8",
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        width: width * .6,
        height: 50,
        justifyContent: "center",
        borderWidth: 2,
    },
    deleteOpac: {
        backgroundColor: "#C70039",
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        width: width * .6,
        height: 50,
        justifyContent: "center",
        borderWidth: 2,
    },
    settingsText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#FFFFFF",
        textTransform: "uppercase",
        textAlign: 'center'
    },
    addExerciseInput: {
        height: 40,
        backgroundColor: 'none',
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 8
    },
    addExerciseOpac: {
        alignSelf: "center",
        width: width * .5,
        backgroundColor: "#5194B8",
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 2,
        borderColor: "#421018"
    },
    addExerciseOpacText: {
        color: "#FCF6EE",
        fontSize: 20,
        textAlign: "center"
    },
    errorText:{
        color: '#C70039',
        marginTop: 16,
        alignSelf: "center"
    },
    deleteExerOpac: {
        alignSelf: "center",
        width: width * .5,
        backgroundColor: "#C70039",
        borderRadius: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 2,
        borderColor: "#421018"
    }
})