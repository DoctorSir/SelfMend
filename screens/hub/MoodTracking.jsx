import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Text } from 'react-native-paper';

import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/HubStyling'; // Import your styles
import { categories, subcategories, items } from '../../utils/Moods';

export default function MoodTrackingPage() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    const saveEntry = () => {
        // Here, you would save the journal entry to your database or storage system.
        // You can use AsyncStorage or a backend API to handle data storage.
        // For simplicity, we're just displaying the journal entry here.
        console.log('Mood:', selectedItem);
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