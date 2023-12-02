import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Text } from 'react-native-paper';
import { collection, addDoc } from "firebase/firestore";

import { auth, db } from '../../services/firebaseConfig';
import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/HubStyling'; // Import your styles
import { categories, subcategories, items } from '../../utils/Moods';

const writeJournalEntryToFirebase = async (journalMood) => {

    const user = auth.currentUser;

    try {
        // Add a new document in collection "JournalEntries"
        const docRef = await addDoc(collection(db, "JournalEntries"), {
            Date: getCurrentDateAndTime(),
            Mood: journalMood,
            uid: user.uid,
        });

        console.log(journalMood);
    } catch (error) {
        console.error('Error saving entry:', error);
        throw error;
    }
}

const getCurrentDateAndTime = () => {
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    let sec = new Date().getSeconds(); //Current Seconds
    return (month + '/' + date + '/' + year + ' at ' + hours + ':' + min + ':' + sec);
}

export default function MoodTrackingPage({ navigation }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    const saveEntry = () => {
        // Call the function to save the journal entry to Firestore
        writeJournalEntryToFirebase(selectedItem);
        navigation.navigate("Hub Navigator");
    };

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
        <SafeAreaView style={Theme.staticContainer}>
            <Text style={Hub.titleText}>Mood Mapping</Text>

            <Text style={Hub.headerText}>Select a Category:</Text>

            <SelectDropdown
                data={categories}
                buttonStyle={Hub.dropdown}
                buttonTextStyle={Hub.dropdownText}
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
                        buttonTextStyle={Hub.dropdownText}
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
                        buttonTextStyle={Hub.dropdownText}
                        onSelect={(selectedItem, index) => {
                            setSelectedItem(selectedItem.value);
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

            {selectedItem && (
                <TouchableOpacity style={Hub.submitOpac} onPress={saveEntry} placeholder="Submit">
                    <Text style={Hub.actionButtonText}>Save Entry</Text>
                </TouchableOpacity>
            )}

        </SafeAreaView>
    )
}