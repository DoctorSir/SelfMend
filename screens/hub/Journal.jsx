// Import necessary modules from React, React Native, Firebase, and other libraries
import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { collection, addDoc } from "firebase/firestore";
import SelectDropdown from 'react-native-select-dropdown';

// Import Firebase authentication and database configurations
import { auth, db } from '../../services/firebaseConfig';

// Import custom styles
import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/HubStyling';

// Import predefined categories, subcategories, and items for Mood Mapping
import { categories, subcategories, items } from '../../utils/Moods';

// Function to get the current date and time
const getCurrentDateAndTime = () => {
    let date = new Date().getDate(); // Current Date
    let month = new Date().getMonth() + 1; // Current Month
    let year = new Date().getFullYear(); // Current Year
    let hours = new Date().getHours(); // Current Hours
    let min = new Date().getMinutes(); // Current Minutes
    let sec = new Date().getSeconds(); // Current Seconds

    // Add leading zeros for single-digit values
    if (date < 10) date = "0" + date;
    if (month < 10) month = "0" + month;
    if (hours < 10) hours = "0" + hours;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    // Return formatted date and time string
    return (month + '/' + date + '/' + year + ' at ' + hours + ':' + min + ':' + sec);
}

// Main component for the Journal Entry page
export default function JournalEntryPage({ navigation }) {
    // State variables for journal text and mood
    const [journalText, setJournalText] = useState("");
    const [journalMood, setJournalMood] = useState("");

    // Function to save the journal entry to Firebase
    const saveEntry = () => {
        const writeJournalEntryToFirebase = async (journalText, journalMood) => {
            const user = auth.currentUser;

            try {
                // Add a new document in the "JournalEntries" collection
                await addDoc(collection(db, "JournalEntries"), {
                    Date: getCurrentDateAndTime(),
                    Text: journalText,
                    Mood: journalMood,
                    uid: user.uid,
                });

                // Navigate to the Hub Navigator screen after saving the entry
                navigation.navigate("Hub Navigator");

            } catch (error) {
                console.error('Error saving entry:', error);
                throw error;
            }
        }

        // Call the function to save the journal entry to Firestore
        writeJournalEntryToFirebase(journalText, journalMood);
    };

    // State variables for selected category, subcategory, and item
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    // Function to handle changes in the selected category
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedSubcategory('');
        setSelectedItem('');
    };

    // Function to handle changes in the selected subcategory
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

                {/* Title for the new entry */}
                <Text style={Hub.titleText}>New Entry</Text>

                {/* Header for the journal entry text */}
                <Text style={Hub.headerText}>Write your journal entry:</Text>

                {/* Text input for the journal entry */}
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

                {/* Title for the Mood Mapping section */}
                <Text style={Hub.titleText}>Mood Mapping</Text>

                {/* Header for selecting a category */}
                <Text style={Hub.headerText}>Select a Category:</Text>

                {/* Dropdown for selecting a category */}
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

                {/* Display subcategory dropdown if a category is selected */}
                {selectedCategory && (
                    <>
                        <Text style={Hub.headerText}>Select a Subcategory:</Text>

                        {/* Dropdown for selecting a subcategory */}
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

                {/* Display mood dropdown if a subcategory is selected */}
                {selectedSubcategory && (
                    <>
                        <Text style={Hub.headerText}>Select Your Mood:</Text>

                        {/* Dropdown for selecting a mood */}
                        <SelectDropdown
                            data={items[selectedSubcategory]}
                            buttonStyle={Hub.dropdown}
                            buttonTextStyle={Hub.dropdownText}
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

                {/* Display save button if journal text and mood are selected */}
                {journalText && selectedItem && (
                    <TouchableOpacity style={Hub.submitOpac} onPress={saveEntry} placeholder="Submit">
                        <Text style={Hub.actionButtonText}>Save</Text>
                    </TouchableOpacity>
                )}

            </ScrollView>
        </SafeAreaView>
    );
}
