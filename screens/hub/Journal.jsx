import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { collection, addDoc } from "firebase/firestore";
import SelectDropdown from 'react-native-select-dropdown';

import { auth, db } from '../../services/firebaseConfig';
import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/HubStyling'; // Import your styles
import { categories, subcategories, items } from '../../utils/Moods';


const getCurrentDateAndTime = () => {
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    let sec = new Date().getSeconds(); //Current Seconds

    if (date < 10) date = "0" + date;
    if (month < 10) month = "0" + month;

    if (hours < 10) hours = "0" + hours;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    return (month + '/' + date + '/' + year + ' at ' + hours + ':' + min + ':' + sec);
}

export default function JournalEntryPage({ navigation }) {
    const [journalText, setJournalText] = useState("");
    const [journalMood, setJournalMood] = useState("");

    useEffect(() => {
        console.log(getCurrentDateAndTime());
    }, []);

    const saveEntry = () => {

        const writeJournalEntryToFirebase = async (journalText, journalMood) => {

            const user = auth.currentUser;

            try {
                // Add a new document in collection "JournalEntries"
                const docRef = await addDoc(collection(db, "JournalEntries"), {
                    Date: getCurrentDateAndTime(),
                    Text: journalText,
                    Mood: journalMood,
                    uid: user.uid,
                });

                navigation.navigate("Hub Navigator");

            } catch (error) {
                console.error('Error saving entry:', error);
                throw error;
            }
        }


        // Call the function to save the journal entry to Firestore
        writeJournalEntryToFirebase(journalText, journalMood);
    };

    //------------------------------Dropdowns------------------------------------

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedSubcategory('');
        setSelectedItem('');
    };

    const handleSubcategoryChange = (subcategory) => {
        setSelectedSubcategory(subcategory);
        setSelectedItem('');
    };

    return (
        <SafeAreaView style={Theme.container}>
            <ScrollView
                contentContainerStyle={Theme.scroll}
                showsVerticalScrollIndicator={false}
            >

                <Text style={Hub.titleText}>New Entry</Text>

                <Text style={Hub.headerText}>Write your journal entry:</Text>

                <TextInput
                    style={Hub.journalInput}
                    mode='outlined'
                    onChangeText={(text) => setJournalText(text)}
                    value={journalText}
                    multiline={true}
                    placeholder="Start writing here..."
                    placeholderTextColor='gray'
                    textColor='#21080C'
                    outlineStyle={Hub.journalOutline}
                />

                <Text style={Hub.titleText}>Mood Mapping</Text>

                <Text style={Hub.headerText}>Select a Category:</Text>

                <SelectDropdown
                    data={categories}
                    buttonStyle={Hub.dropdown}
                    onSelect={(selectedItem, index) => {
                        handleCategoryChange(selectedItem.value);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.label;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.label;
                    }}
                />

                {selectedCategory && (
                    <>
                        <Text style={Hub.headerText}>Select a Subcategory:</Text>

                        <SelectDropdown
                            data={subcategories[selectedCategory]}
                            buttonStyle={Hub.dropdown}
                            onSelect={(selectedItem, index) => {
                                handleSubcategoryChange(selectedItem.value);
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem.label;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item.label;
                            }}
                        />
                    </>
                )}

                {selectedSubcategory && (
                    <>
                        <Text style={Hub.headerText}>Select Your Mood:</Text>

                        <SelectDropdown
                            data={items[selectedSubcategory]}
                            buttonStyle={Hub.dropdown}
                            onSelect={(selectedItem, index) => {
                                setSelectedItem(selectedItem.value);
                                setJournalMood(selectedItem["value"]);
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem.label;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item.label;
                            }}
                        />

                    </>
                )}

                {journalText && selectedItem && (
                    <TouchableOpacity style={Hub.submitOpac} onPress={saveEntry} placeholder="Submit">
                        <Text style={Hub.actionButtonText}>Save Entry</Text>
                    </TouchableOpacity>
                )}

            </ScrollView>
        </SafeAreaView>
    );
}