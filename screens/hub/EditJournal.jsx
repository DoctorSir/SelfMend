import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import SelectDropdown from 'react-native-select-dropdown';

import { auth, db } from '../../services/firebaseConfig';
import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/HubStyling'; // Import your styles
import { categories, subcategories, items } from '../../utils/Moods';

export default function EditEntryPage({ route, navigation }) {
    const { entryId } = route.params;

    const [journalText, setJournalText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

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

    const saveEditedEntry = async () => {
        try {
            const entryRef = doc(db, 'JournalEntries', entryId);
            await updateDoc(entryRef, {
                Text: journalText,
                Category: selectedCategory,
                Subcategory: selectedSubcategory,
                Mood: selectedItem,
            });

            navigation.navigate("Hub Navigator");
        } catch (error) {
            console.error('Error saving edited entry:', error);
        }
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
            <ScrollView
                contentContainerStyle={Theme.scroll}
                showsVerticalScrollIndicator={false}
            >

                <Text style={Hub.titleText}>Edit Entry</Text>

                <Text style={Hub.headerText}>Edit your journal entry:</Text>

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

                {journalText && selectedItem && (
                    <TouchableOpacity style={Hub.submitOpac} onPress={saveEditedEntry}>
                        <Text style={Hub.actionButtonText}>Save</Text>
                    </TouchableOpacity>
                )}

            </ScrollView>
        </SafeAreaView>
    );
};