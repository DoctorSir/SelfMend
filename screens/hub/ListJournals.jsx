// Import necessary modules from React, React Native, and other libraries
import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import { collection, query, where, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import Firebase authentication and database configurations
import { auth, db } from '../../services/firebaseConfig';

// Import custom styles
import Hub from '../../CSS/HubStyling';

// Main component for the Entry List page
export default function EntryList({ navigation }) {
    // State variable for the list of journal entries
    const [entries, setEntries] = useState([]);

    // Function to fetch journal entries from Firestore
    const fetchEntries = async () => {
        const entriesQuery = query(
            collection(db, "JournalEntries"),
            where("uid", "==", auth.currentUser.uid),
            orderBy("Text", "asc"),
            where("Text", "!=", ""),
            orderBy("Date", "desc")
        );

        try {
            const querySnapshot = await getDocs(entriesQuery);
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setEntries(data);
        } catch (error) {
            console.error('Error fetching entries:', error);
        }
    };

    // Function to navigate to the 'Edit Entry' screen with the entryId
    const handleEditEntry = (entryId) => {
        navigation.navigate('Edit Entry', { entryId });
    };

    // Function to delete a journal entry from Firestore
    const handleDeleteEntry = async (entryId) => {
        try {
            // Delete the entry from Firestore
            await deleteDoc(doc(db, 'JournalEntries', entryId));

            // Fetch entries again to update the list
            fetchEntries();
        } catch (error) {
            console.error('Error deleting entry:', error);
        }
    };

    // Function to remove seconds from the date and time string
    const removeSeconds = (dateTime) => {
        const indexOfAt = dateTime.indexOf("at");
        const minuteTime = dateTime.slice(0, indexOfAt);
        return minuteTime;
    };

    // useEffect hook to fetch entries when the component gains focus
    useFocusEffect(
        React.useCallback(() => {
            fetchEntries();
        }, [])
    );

    return (
        <SafeAreaView style={Hub.entryContainer}>
            {/* Display the title for the Entry List page */}
            <Text style={Hub.titleText}>Journal Entries</Text>

            {/* Display a FlatList of journal entries */}
            <FlatList
                showsVerticalScrollIndicator={false}
                style={Hub.entryList}
                data={entries}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={Hub.entry}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>

                            {/* Display the entry date without seconds */}
                            <Text style={Hub.entryDate}>{removeSeconds(item.Date)}</Text>

                            {/* Display icons for editing and deleting entries */}
                            <View style={Hub.EntryIcons}>
                                <TouchableOpacity onPress={() => handleEditEntry(item.id)} >
                                    <Icon name="edit" size={24} color="#421018" style={{ paddingRight: "3%" }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleDeleteEntry(item.id)}>
                                    <Icon name="delete" size={24} color="#C70039" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Display the entry text and mood */}
                        <Text style={Hub.entryText}>{item.Text}</Text>
                        <Text style={Hub.entryMood}>Feeling {item.Mood}</Text>
                    </View>
                )}
            />

            {/* Display the Floating Action Button (FAB) to navigate to the 'New Entry' screen */}
            <FAB
                style={Hub.fab}
                icon="plus"
                color="#FCF6EE"
                onPress={() => navigation.navigate('New Entry')}
            />
        </SafeAreaView>
    );
};
