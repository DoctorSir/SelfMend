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
        backgroundColor: "#421018",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        width: width * .5
    },
    deleteOpac: {
        backgroundColor: "#ff0000",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        width: width * .5
    },
    settingsText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#FFFFFF",
        textTransform: "uppercase",
        textAlign: 'center'
    }
})