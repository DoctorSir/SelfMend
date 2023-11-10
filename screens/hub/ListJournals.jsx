import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { FAB } from 'react-native-paper';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { auth, db } from '../../services/firebaseConfig';
import Hub from '../../CSS/HubStyling';

export default function EntryList({ navigation }) {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const fetchEntries = async () => {
            const entriesQuery = query(collection(db, "JournalEntries"), where("uid", "==", auth.currentUser.uid));

            try {
                const querySnapshot = await getDocs(entriesQuery);
                const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setEntries(data);
            } catch (error) {
                console.error('Error fetching entries:', error);
            }
        };

        // Call the fetchEntries function when the component mounts
        fetchEntries();

    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <SafeAreaView style={Hub.entryContainer}>

            <Text style={Hub.titleText}>Journal Entries</Text>

            <FlatList
                style={Hub.entryList}
                data={entries}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={Hub.entry}>
                        <Text style={Hub.entryDate}>{item.Date}</Text>
                        <Text style={Hub.entryText}>{item.Text}</Text>
                        <Text style={Hub.entryMood}>Feeling {item.Mood}</Text>
                    </View>
                )}
            />
            <FAB
                style={Hub.fab}
                icon="plus"
                color="#421018"
                onPress={() => navigation.navigate('New Entry')}
            />
        </SafeAreaView>
    );
};