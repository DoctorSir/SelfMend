import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import { collection, query, where, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';


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

    const handleEditEntry = (entryId) => {
        // Navigate to the 'Edit Entry' screen with the entryId as a parameter
        navigation.navigate('Edit Entry', { entryId });
    };

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

    const removeSeconds = (dateTime) => {
        const indexOfAt = dateTime.indexOf("at");
        const minuteTime = dateTime.slice(0, indexOfAt);
        return minuteTime
    }

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
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>

                            <Text style={Hub.entryDate}>{removeSeconds(item.Date)}</Text>

                            <View style={Hub.EntryIcons}>
                                <TouchableOpacity onPress={() => handleEditEntry(item.id)} >
                                    <Icon name="edit" size={24} color="#421018" style={{paddingRight: "3%"}} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleDeleteEntry(item.id)}>
                                    <Icon name="delete" size={24} color="#C70039" />
                                </TouchableOpacity>
                            </View>
                        </View>

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