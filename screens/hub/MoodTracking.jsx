// Import necessary dependencies and components from React and React Native
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Text } from 'react-native-paper';
import { collection, addDoc } from "firebase/firestore";

// Import authentication and database instances from Firebase configuration
import { auth, db } from '../../services/firebaseConfig';

// Import styles and themes
import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/HubStyling';

// Import predefined categories, subcategories, and items for mood tracking
import { categories, subcategories, items } from '../../utils/Moods';

// Function to write a journal entry to Firebase
const writeJournalEntryToFirebase = async (journalMood) => {
    // Get the current user
    const user = auth.currentUser;

    try {
        // Add a new document in the "JournalEntries" collection with date, mood, and user ID
        await addDoc(collection(db, "JournalEntries"), {
            Date: getCurrentDateAndTime(),
            Mood: journalMood,
            uid: user.uid,
        });
    } catch (error) {
        // Handle and log errors if saving the entry fails
        console.error('Error saving entry:', error);
        throw error;
    }
}

// Function to get the current date and time in a formatted string
const getCurrentDateAndTime = () => {
    let date = new Date().getDate(); // Current Date
    let month = new Date().getMonth() + 1; // Current Month
    let year = new Date().getFullYear(); // Current Year
    let hours = new Date().getHours(); // Current Hours
    let min = new Date().getMinutes(); // Current Minutes
    let sec = new Date().getSeconds(); // Current Seconds
    return (month + '/' + date + '/' + year + ' at ' + hours + ':' + min + ':' + sec);
}

// Main component for the Mood Tracking page
const MoodTrackingPage = ({ navigation }) => {
    // State variables for selected category, subcategory, and item
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    // Function to save the selected entry to Firebase and navigate back to the Hub Navigator
    const saveEntry = () => {
        writeJournalEntryToFirebase(selectedItem);
        navigation.navigate("Hub Navigator");
    };

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
        // Render the Mood Tracking page inside a SafeAreaView
        <SafeAreaView style={Theme.staticContainer}>
            <Text style={Hub.titleText}>Mood Mapping</Text>

            {/* Render the dropdown for selecting a category */}
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

            {/* Render the dropdown for selecting a subcategory based on the selected category */}
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

            {/* Render the dropdown for selecting a mood item based on the selected subcategory */}
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

            {/* Render a button to submit the selected entry */}
            {selectedItem && (
                <TouchableOpacity style={Hub.submitOpac} onPress={saveEntry} placeholder="Submit">
                    <Text style={Hub.actionButtonText}>Save Entry</Text>
                </TouchableOpacity>
            )}
        </SafeAreaView>
    )
}

// Export the MoodTrackingPage component as the default export
export default MoodTrackingPage;
