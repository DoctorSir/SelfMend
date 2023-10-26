import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import Picker from 'react-native-picker';
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
      { label: 'Select a Category', value: '' },
      { label: 'Category A', value: 'categoryA' },
      { label: 'Category B', value: 'categoryB' },
      // Add more categories as needed
    ];
  
    const subcategories = {
      categoryA: [
        { label: 'Select a Subcategory', value: '' },
        { label: 'Subcategory A1', value: 'subcategoryA1' },
        { label: 'Subcategory A2', value: 'subcategoryA2' },
        // Add more subcategories for Category A
      ],
      categoryB: [
        { label: 'Select a Subcategory', value: '' },
        { label: 'Subcategory B1', value: 'subcategoryB1' },
        { label: 'Subcategory B2', value: 'subcategoryB2' },
        // Add more subcategories for Category B
      ],
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

            <Text style={Theme.title}>Journaling</Text>

            <Text>Write your journal entry:</Text>

            <TextInput
                style={Hub.journalInput}
                onChangeText={handleJournalEntryChange}
                value={journalEntry}
                multiline={true}
                placeholder="Start writing..."
                placeholderTextColor={'gray'}
            />

            <TouchableOpacity style={Hub.button} onPress={saveEntry} placeholder="Submit">
                <Text style={Hub.actionButtonText}>Save Entry</Text>
            </TouchableOpacity>

            <Text>Select a Category:</Text>
            <Picker
                selectedValue={selectedCategory}
                onValueChange={handleCategoryChange}
            >
                {categories.map((category) => (
                <Picker.Item
                    key={category.value}
                    label={category.label}
                    value={category.value}
                />
                ))}
            </Picker>

            {selectedCategory && (
                <>
                <Text>Select a Subcategory:</Text>
                <Picker
                    selectedValue={selectedSubcategory}
                    onValueChange={(subcategory) => setSelectedSubcategory(subcategory)}
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

        </SafeAreaView>
    );
}