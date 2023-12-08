// Import necessary modules and components from React and React Native
import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import SelectDropdown from 'react-native-select-dropdown';

import { auth, db } from '../../services/firebaseConfig';
import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/HubStyling'; // Import your styles
import { categories, subcategories, items } from '../../utils/Moods';

// Functional component for editing journal entries
export default function EditEntryPage({ route, navigation }) {
    // Extracting the entryId from the route parameters
    const { entryId } = route.params;

    // State variables to manage journal text and selected mood details
    const [journalText, setJournalText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    // Fetch entry data when the component mounts
    useEffect(() => {
        const fetchEntryData = async () => {
            try {
                const entryDoc = await getDoc(doc(db, 'JournalEntries', entryId));
                const entryData = entryDoc.data();

                setJournalText(entryData.Text);
                setSelectedItem(entryData.Mood);
            } catch (error) {
                console.error('Error fetching entry data:', error);
            }
        };

        fetchEntryData();
    }, [entryId]);

    // Function to save the edited entry
    const saveEditedEntry = async () => {
        try {
            const entryRef = doc(db, 'JournalEntries', entryId);
            await updateDoc(entryRef, {
                Text: journalText,
                Category: selectedCategory,
                Subcategory: selectedSubcategory,
                Mood: selectedItem,
            });

            // Navigate back to the Hub Navigator screen after saving
            navigation.navigate("Hub Navigator");
        } catch (error) {
            console.error('Error saving edited entry:', error);
        }
    };

    // Function to handle category changes
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedSubcategory('');
        setSelectedItem('');
    };

    // Function to handle subcategory changes
    const handleSubcategoryChange = (subcategory) => {
        setSelectedSubcategory(subcategory);
        setSelectedItem('');
    };

    // Rendering the UI components
    return (
        <SafeAreaView style={Theme.container}>
            <ScrollView
                contentContainerStyle={Theme.scroll}
                showsVerticalScrollIndicator={false}
            >
                {/* Title for the Edit Entry page */}
                <Text style={Hub.titleText}>Edit Entry</Text>

                {/* Header text for editing journal entry */}
                <Text style={Hub.headerText}>Edit your journal entry:</Text>

                {/* TextInput for editing journal text */}
                <TextInput
                    style={Hub.journalInput}
                    mode='outlined'
                    onChangeText={(text) => setJournalText(text)}
                    value={journalText}
                    multiline={true}
                    placeholder="Start editing here..."
                    placeholderTextColor='gray'
                    textColor='#21080C'
                    outlineStyle={Hub.journalOutline}
                />

                {/* Title for the Mood Mapping section */}
                <Text style={Hub.titleText}>Mood Mapping</Text>

                {/* Header text for selecting a category */}
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

                {/* Conditional rendering for subcategory selection based on selected category */}
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

                {/* Conditional rendering for mood selection based on selected subcategory */}
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

                {/* Conditional rendering for Save button based on journal text and selected mood */}
                {journalText && selectedItem && (
                    <TouchableOpacity style={Hub.submitOpac} onPress={saveEditedEntry}>
                        <Text style={Hub.actionButtonText}>Save</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};
