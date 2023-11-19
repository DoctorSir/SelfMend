import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { FAB } from 'react-native-paper';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import PieChart from 'react-native-pie-chart';

import { auth, db } from '../../services/firebaseConfig';
import Hub from '../../CSS/HubStyling';

// Function to generate a random hex color
const getRandomHexColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export default function MoodChart() {
    const [moodsTally, setMoodsTally] = useState([1]);
    const [moodsList, setMoodsList] = useState([]);
    const [moodColors, setMoodColors] = useState(['#000']);

    const fetchMoods = async () => {
        const moodQuery = query(
            collection(db, 'JournalEntries'),
            where('uid', '==', auth.currentUser.uid)
        );

        try {
            const querySnapshot = await getDocs(moodQuery);

            const tally = [];
            const list = [];
            const colors = [];

            querySnapshot.forEach((doc) => {
                const mood = doc.data().Mood;

                // If the mood is already in the tally, increment the count; otherwise, initialize the count to 1
                const index = list.indexOf(mood);
                if (index !== -1) {
                    tally[index] += 1;
                } else {
                    list.push(mood);
                    tally.push(1);
                    colors.push(getRandomHexColor());
                }
            });

            console.log(tally);
            console.log(list);
            console.log(colors);

            setMoodColors(colors);
            setMoodsTally(tally);
            setMoodsList(list);

        } catch (error) {
            console.error('Error fetching entries:', error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchMoods();
        }, [])
    );

    return (
        <SafeAreaView style={Hub.container}>
            {moodsList.length !== 0 && (
                <PieChart
                    widthAndHeight={300}
                    series={moodsTally}
                    sliceColor={moodColors}
                    coverRadius={0.45}
                    coverFill={'#FCF6EE'}
                />
            )}
        </SafeAreaView>
    );
}