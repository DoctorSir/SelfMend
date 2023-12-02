import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { FAB } from 'react-native-paper';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';

import { auth, db } from '../../services/firebaseConfig';
import Hub from '../../CSS/HubStyling';

export default function EntryList({ navigation }) {
    const [entries, setEntries] = useState([]);

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

    useFocusEffect(
        React.useCallback(() => {
            fetchEntries();
        }, [])
    );

    return (
        <SafeAreaView style={Hub.entryContainer}>

            <Text style={Hub.titleText}>Journal Entries</Text>

            <FlatList
                showsVerticalScrollIndicator={false}
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
                color="#FCF6EE"
                onPress={() => navigation.navigate('New Entry')}
            />
        </SafeAreaView>
    );
};