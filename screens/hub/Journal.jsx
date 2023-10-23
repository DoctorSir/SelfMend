import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

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

    return (
        <SafeAreaView style={Theme.container}>
            <Text>Write your journal entry:</Text>
            <TextInput
                style={Hub.textInput}
                onChangeText={handleJournalEntryChange}
                value={journalEntry}
                multiline={true}
                numberOfLines={4}
                placeholder="Start writing..."
                placeholderTextColor={'gray'}
            />
            <Button title="Save Entry" onPress={saveEntry} />
        </SafeAreaView>
    );
}
