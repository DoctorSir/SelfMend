import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { db } from '../../services/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import SelectDropdown from 'react-native-select-dropdown';

import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/HubStyling'; // Import your styles

const writeJournalEntryToFirebase = async (entry) => {

    try {
        // Add a new document in collection "JournalEntries"
        const docRef = await addDoc(collection(db, "JournalEntries"), {
            Date: getCurrentDateAndTime(),
            Text: journalText,
            Mood: journalMood,
            uid: entry.uid,
        });
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

export default function JournalEntryPage() {
    const [journalText, setJournalText] = useState("");
    const [journalMood, setJournalMood] = useState("");


    const [journalEntry, setJournalEntry] = useState({
        Title: '',
        Text: '',
        uid: '', // Make sure to set uid appropriately
    });

    // const handleJournalEntryChange = (name, text) => {
    //     setJournalEntry({ ...journalEntry, [name]: Text });
    // };

    const saveEntry = () => {
        // Call the function to save the journal entry to Firestore
        //writeJournalEntryToFirebase(journalEntry);
        console.log(journalText);
        console.log(journalMood);
    };

    //------------------------------Dropdowns------------------------------------

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

                {selectedItem && (
                    <TouchableOpacity style={Hub.submitOpac} onPress={saveEntry} placeholder="Submit">
                        <Text style={Hub.actionButtonText}>Save Entry</Text>
                    </TouchableOpacity>
                )}

            </ScrollView>
        </SafeAreaView>
    );
}