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
    color: "#421018",
    padding: 10,
  },
  exerciseTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#421018",
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
    padding: 10
  },
  entry: {
    borderWidth: 2,
    borderRadius: 25,
    margin: 5,
    padding: 10,
    color: "#421018",
  },
  entryDate: {
    textDecorationLine: 'underline',
    marginBottom: 10,
    color: "#5194B8",
  },
  entryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#421018",
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
});
