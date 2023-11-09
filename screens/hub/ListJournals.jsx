import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { auth, db } from '../../services/firebaseConfig';

export const EntryList = ({ navigation }) => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        // Load entries from Firebase when the component mounts
        const entriesRef = firebase.firestore().collection('entries'); // Assuming you're using Firestore
        entriesRef.onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setEntries(data);
        });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <FlatList
                    data={entries}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </View>
                    )}
                />
                <FAB
                    style={styles.fab}
                    small
                    icon="plus"
                    onPress={() => navigation.navigate('CreateEntry')}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = {
    container: {
        flexGrow: 1,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
};