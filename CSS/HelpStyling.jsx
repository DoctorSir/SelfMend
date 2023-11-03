import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
        backgroundColor: "#FCF6EE"
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        alignSelf: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    listSection: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 120
    },
    listItemLinks: {
        fontSize: 20,
        textAlign: "center",
        textDecorationLine: 'underline',
    },
    listItem988Title: {
        marginTop: 20,
        fontSize: 22,
        textAlign: "center",
        color: "red"
    },
    listItem988Desc: {
        fontSize: 15,
        textAlign: "center"
    }

});
