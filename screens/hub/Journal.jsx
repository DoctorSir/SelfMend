import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Text, TextInput } from 'react-native-paper';

import Logo from '../../components/Logo';
import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/HubStyling'; // Import your styles

export default function JournalEntryPage() {
    const [journalEntry, setJournalEntry] = useState('');

    const handleJournalEntryChange = (text) => {
        setJournalEntry(text);
    };

    const saveEntry = () => {
        // Here, you would save the journal entry to your database or storage system.
        // You can use AsyncStorage or a backend API to handle data storage.
        // For simplicity, we're just displaying the journal entry here.
        console.log('Journal Entry:', journalEntry);
    };

    //------------------------------Pickers------------------------------------

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    const categories = [
        { label: '', value: '' },
        { label: 'Sad', value: 'Sad' },
        { label: 'Happy', value: 'Happy' },
        { label: 'Angry', value: 'Angry' },
        { label: 'Disgusted', value: 'Disgusted' },
        { label: 'Fearful', value: 'Fearful' },
        { label: 'Surprise', value: 'Surprise' },
        { label: 'Bad', value: 'Bad' },
        // Add more categories as needed
    ];

    const subcategories = {
        Sad: [
            { label: '', value: '' },
            { label: 'Subcategory A1', value: 'subcategoryA1' },
            { label: 'Subcategory A2', value: 'subcategoryA2' },
            // Add more subcategories for Category A
        ],
        Happy: [
            { label: '', value: '' }
        ],
        Angry: [
            { label: '', value: '' },
            { label: 'Subcategory B1', value: 'subcategoryB1' },
            { label: 'Subcategory B2', value: 'subcategoryB2' },
            // Add more subcategories for Category B
        ],
        Digusted: [
            { label: '', value: '' }
        ],
        Fearful: [
            { label: '', value: '' }
        ]
        // Define subcategories for other categories as needed
    };

    const items = {
        subcategoryA1: [
            { label: 'Select an Item', value: '' },
            { label: 'Item A1-1', value: 'itemA1-1' },
            { label: 'Item A1-2', value: 'itemA1-2' },
            // Add more items for Subcategory A1
        ],
        subcategoryA2: [
            { label: 'Select an Item', value: '' },
            { label: 'Item A2-1', value: 'itemA2-1' },
            { label: 'Item A2-2', value: 'itemA2-2' },
            // Add more items for Subcategory A2
        ],
        // Define items for other subcategories as needed
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
        <SafeAreaView style={Theme.container}>
            <ScrollView contentContainerStyle={Theme.scroll}>

                <Text style={Hub.titleText}>Journaling</Text>

                <Text>Write your journal entry:</Text>

                <TextInput
                    style={Hub.journalInput}
                    onChangeText={handleJournalEntryChange}
                    value={journalEntry}
                    multiline={true}
                    placeholder="Start writing..."
                    placeholderTextColor={'gray'}
                />

                <Text style={Hub.titleText}>Mood Mapping</Text>

                <Text>Select a Category:</Text>
                <Picker
                    style={Hub.picker}
                    selectedValue={selectedCategory}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedCategory(itemValue)}
                >
                    {categories.map((category) => (
                        <Picker.Item
                            label={category.label}
                            value={category.value}
                        />
                    ))}
                </Picker>

                {selectedCategory && (
                    <>
                        <Text>Select a Subcategory:</Text>
                        <Picker
                            style={Hub.picker}
                            selectedValue={selectedSubcategory}
                            onValueChange={(subcategory) => setSelectedSubcategory(subcategory)}
                        >
                            {subcategories[selectedCategory].map((subcategory) => (
                                <Picker.Item
                                    label={subcategory.label}
                                    value={subcategory.value}
                                />
                            ))}
                        </Picker>
                    </>
                )}

                {selectedCategory && (
                    <>
                        <Text>Select Your Mood:</Text>
                        <Picker
                            style={Hub.picker}
                            selectedValue={selectedItem}
                            onValueChange={(item) => setSelectedItem(item)}
                        >
                            {subcategories[selectedCategory].map((subcategory) => (
                                <Picker.Item
                                    key={subcategory.value}
                                    label={subcategory.label}
                                    value={subcategory.value}
                                />
                            ))}
                        </Picker>
                    </>
                )}

                <TouchableOpacity style={Hub.buttonOpac} onPress={saveEntry} placeholder="Submit">
                    <Text style={Hub.actionButtonText}>Save Entry</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}