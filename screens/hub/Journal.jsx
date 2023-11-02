import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Text, TextInput } from 'react-native-paper';

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
        { label: 'Happy', value: 'Happy' },
        { label: 'Sad', value: 'Sad' },
        { label: 'Angry', value: 'Angry' },
        { label: 'Disgusted', value: 'Disgusted' },
        { label: 'Fearful', value: 'Fearful' },
        { label: 'Surprised', value: 'Surprised' },
        { label: 'Bad', value: 'Bad' },
    ];

    const subcategories = {
        Happy: [
            { label: '', value: '' },
            { label: 'Playful', value: 'Playful' },
            { label: 'Content', value: 'Content' },
            { label: 'Interested', value: 'Interested' },
            { label: 'Proud', value: 'Proud' },
            { label: 'Accepted', value: 'Accepted' },
            { label: 'Powerful', value: 'Powerful' },
            { label: 'Peaceful', value: 'Peaceful' },
            { label: 'Trusting', value: 'Trusting' },
            { label: 'Optimistic', value: 'Optimistic' },
        ],
        Sad: [
            { label: '', value: '' },
            { label: 'Lonely', value: 'Lonely' },
            { label: 'Vulnerable', value: 'Vulnerable' },
            { label: 'Despair', value: 'Despair' },
            { label: 'Guilty', value: 'Guilty' },
            { label: 'Depressed', value: 'Depressed' },
            { label: 'Hurt', value: 'Hurt' },
        ],
        Angry: [
            { label: '', value: '' },
            { label: 'Let Down', value: 'Let Down' },
            { label: 'Humiliated', value: 'Humiliated' },
            { label: 'Bitter', value: 'Bitter' },
            { label: 'Mad', value: 'Mad' },
            { label: 'Aggressive', value: 'Aggressive' },
            { label: 'Frustrated', value: 'Frustrated' },
            { label: 'Distant', value: 'Distant' },
            { label: 'Critical', value: 'Critical' },
        ],
        Disgusted: [
            { label: '', value: '' },
            { label: 'Disapproving', value: 'Disapproving' },
            { label: 'Disappointed', value: 'Disappointed' },
            { label: 'Awful', value: 'Awful' },
            { label: 'Repelled', value: 'Repelled' },
        ],
        Fearful: [
            { label: '', value: '' },
            { label: 'Scared', value: 'Scared' },
            { label: 'Anxious', value: 'Anxious' },
            { label: 'Insecure', value: 'Insecure' },
            { label: 'Weak', value: 'Weak' },
            { label: 'Rejected', value: 'Rejected' },
            { label: 'Threatened', value: 'Threatened' },
        ],
        Surprised: [
            { label: '', value: '' },
            { label: 'Startled', value: 'Startled' },
            { label: 'Confused', value: 'Confused' },
            { label: 'Amazed', value: 'Amazed' },
            { label: 'Excited', value: 'Excited' },
        ],
        Bad: [
            { label: '', value: '' },
            { label: 'Bored', value: 'Bored' },
            { label: 'Busy', value: 'Busy' },
            { label: 'Stressed', value: 'Stressed' },
            { label: 'Tired', value: 'Tired' },
        ]
    };

    const items = {
        Playful: [
            { label: '', value: '' },
            { label: 'Aroused', value: 'Aroused' },
            { label: 'Cheeky', value: 'Cheeky' },
        ],
        Content: [
            { label: '', value: '' },
            { label: 'Free', value: 'Free' },
            { label: 'Joyful', value: 'Joyful' },
        ],
        Interested: [
            { label: '', value: '' },
            { label: 'Curious', value: 'Curious' },
            { label: 'Inquisitive', value: 'Inquisitive' },
        ],
        Proud: [
            { label: '', value: '' },
            { label: 'Successful', value: 'Successful' },
            { label: 'Confident', value: 'Confident' },
        ],
        Accepted: [
            { label: '', value: '' },
            { label: 'Respected', value: 'Respected' },
            { label: 'Valued', value: 'Valued' },
        ],
        Powerful: [
            { label: '', value: '' },
            { label: 'Courageous', value: 'Courageous' },
            { label: 'Creative', value: 'Creative' },
        ],
        Peaceful: [
            { label: '', value: '' },
            { label: 'Loving', value: 'Loving' },
            { label: 'Thankful', value: 'Thankful' },
        ],
        Trusting: [
            { label: '', value: '' },
            { label: 'Sensitive', value: 'Sensitive' },
            { label: 'Intimate', value: 'Intimate' },
        ],
        Optimistic: [
            { label: '', value: '' },
            { label: 'Hopeful', value: 'Hopeful' },
            { label: 'Inspired', value: 'Inspired' },
        ],
        Lonely: [
            { label: '', value: '' },
            { label: 'Isolated', value: 'Isolated' },
            { label: 'Abandoned', value: 'Abandoned' },
        ],
        Vulnerable: [
            { label: '', value: '' },
            { label: 'Victimized', value: 'Victimized' },
            { label: 'Fragile', value: 'Fragile' },
        ],
        Despair: [
            { label: '', value: '' },
            { label: 'Grief', value: 'Grief' },
            { label: 'Powerless', value: 'Powerless' },
        ],
        Guilty: [
            { label: '', value: '' },
            { label: 'Ashamed', value: 'Ashamed' },
            { label: 'Remorseful', value: 'Remorseful' },
        ],
        Depressed: [
            { label: '', value: '' },
            { label: 'Inferior', value: 'Inferior' },
            { label: 'Empty', value: 'Empty' },
        ],
        Hurt: [
            { label: '', value: '' },
            { label: 'Embarrassed', value: 'Embarrassed' },
            { label: 'Disappointed', value: 'Disappointed' },
        ],
        'Let Down': [
            { label: '', value: '' },
            { label: 'Betrayed', value: 'Betrayed' },
            { label: 'Resentful', value: 'Resentful' },
        ],
        Humiliated: [
            { label: '', value: '' },
            { label: 'Disrespected', value: 'Disrespected' },
            { label: 'Ridiculed', value: 'Ridiculed' },
        ],
        Bitter: [
            { label: '', value: '' },
            { label: 'Indignant', value: 'Indignant' },
            { label: 'Violated', value: 'Violated' },
        ],
        Mad: [
            { label: '', value: '' },
            { label: 'Furious', value: 'Furious' },
            { label: 'Jealous', value: 'Jealous' },
        ],
        Aggressive: [
            { label: '', value: '' },
            { label: 'Provoked', value: 'Provoked' },
            { label: 'Hostile', value: 'Hostile' },
        ],
        Frustrated: [
            { label: '', value: '' },
            { label: 'Infuriated', value: 'Infuriated' },
            { label: 'Annoyed', value: 'Annoyed' },
        ],
        Distant: [
            { label: '', value: '' },
            { label: 'Withdrawm', value: 'Withdrawm' },
            { label: 'Numb', value: 'Numb' },
        ],
        Critical: [
            { label: '', value: '' },
            { label: 'Sceptical', value: 'Sceptical' },
            { label: 'Dismissive', value: 'Dismissive' },
        ],
        Disapproving: [
            { label: '', value: '' },
            { label: 'Judgemental', value: 'Judgemental' },
            { label: 'Embarrassed', value: 'Embarrassed' },
        ],
        Disappointed: [
            { label: '', value: '' },
            { label: 'Appalled', value: 'Appalled' },
            { label: 'Revolted', value: 'Revolted' },
        ],
        Awful: [
            { label: '', value: '' },
            { label: 'Nauseated', value: 'Nauseated' },
            { label: 'Detestable', value: 'Detestable' },
        ],
        Repelled: [
            { label: '', value: '' },
            { label: 'Horrified', value: 'Horrified' },
            { label: 'Hesitant', value: 'Hesitant' },
        ],
        Scared: [
            { label: '', value: '' },
            { label: 'Helpless', value: 'Helpless' },
            { label: 'Frightened', value: 'Frightened' },
        ],
        Anxious: [
            { label: '', value: '' },
            { label: 'Overwhelmed', value: 'Overwhelmed' },
            { label: 'Worried', value: 'Worried' },
        ],
        Insecure: [
            { label: '', value: '' },
            { label: 'Inadequate', value: 'Inadequate' },
            { label: 'Inferior', value: 'Inferior' },
        ],
        Weak: [
            { label: '', value: '' },
            { label: 'Worthless', value: 'Worthless' },
            { label: 'Insignificant', value: 'Insignificant' },
        ],
        Rejected: [
            { label: '', value: '' },
            { label: 'Excluded', value: 'Excluded' },
            { label: 'Persecuted', value: 'Persecuted' },
        ],
        Threatened: [
            { label: '', value: '' },
            { label: 'Nervous', value: 'Nervous' },
            { label: 'Exposed', value: 'Exposed' },
        ],
        Startled: [
            { label: '', value: '' },
            { label: 'Shocked', value: 'Shocked' },
            { label: 'Dismayed', value: 'Dismayed' },
        ],
        Confused: [
            { label: '', value: '' },
            { label: 'Disillusioned', value: 'Disillusioned' },
            { label: 'Perplexed', value: 'Perplexed' },
        ],
        Amazed: [
            { label: '', value: '' },
            { label: 'Astonished', value: 'Astonished' },
            { label: 'In Awe', value: 'In Awe' },
        ],
        Excited: [
            { label: '', value: '' },
            { label: 'Eager', value: 'Eager' },
            { label: 'Energetic', value: 'Energetic' },
        ],
        Bored: [
            { label: '', value: '' },
            { label: 'Indifferent', value: 'Indifferent' },
            { label: 'Apathetic', value: 'Apathetic' },
        ],
        Busy: [
            { label: '', value: '' },
            { label: 'Pressured', value: 'Pressured' },
            { label: 'Rushed', value: 'Rushed' },
        ],
        Stressed: [
            { label: '', value: '' },
            { label: 'Overwhelmed', value: 'Overwhelmed' },
            { label: 'Out of Control', value: 'Out of Control' },
        ],
        Tired: [
            { label: '', value: '' },
            { label: 'Sleepy', value: 'Sleepy' },
            { label: 'Unfocused', value: 'Unfocused' },
        ],
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

                <Text style={Hub.headerText}>Write your journal entry:</Text>

                <TextInput
                    style={Hub.journalInput}
                    mode='outlined'
                    onChangeText={handleJournalEntryChange}
                    value={journalEntry}
                    multiline={true}
                    placeholder="Start writing here..."
                    placeholderTextColor='gray'
                    textColor='#21080C'
                    outlineStyle={Hub.journalOutline}
                />

                <Text style={Hub.titleText}>Mood Mapping</Text>

                <Text style={Hub.headerText}>Select a Category:</Text>
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
                        <Text style={Hub.headerText}>Select a Subcategory:</Text>
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

                {selectedSubcategory && (
                    <>
                        <Text style={Hub.headerText}>Select Your Mood:</Text>
                        <Picker
                            style={Hub.picker}
                            selectedValue={selectedItem}
                            onValueChange={(item) => setSelectedItem(item)}
                        >
                            {items[selectedSubcategory].map((item) => (
                                <Picker.Item
                                    label={item.label}
                                    value={item.value}
                                />
                            ))}
                        </Picker>
                    </>
                )}

                <TouchableOpacity style={Hub.submitOpac} onPress={saveEntry} placeholder="Submit">
                    <Text style={Hub.actionButtonText}>Save Entry</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}