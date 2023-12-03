import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FAB } from 'react-native-paper';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import PieChart from 'react-native-pie-chart';

import { auth, db } from '../../services/firebaseConfig';
import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/HubStyling';

// Function to generate a random hex color
// const getRandomHexColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

export default function MoodChart({ navigation }) {
    const [moodsTally, setMoodsTally] = useState([1]);
    const [moodsList, setMoodsList] = useState([]);
    const [moodColors, setMoodColors] = useState(['#000']);
    const [display, setDisplay] = useState(0);

    const fetchMoods = async () => {
        const moodQuery = query(
            collection(db, 'JournalEntries'),
            where('uid', '==', auth.currentUser.uid)
        );

        setDisplay(0);

        try {
            const querySnapshot = await getDocs(moodQuery);

            const tally = [];
            const list = [];
            const colors = ['#002441', '#003f5e', '#045b7d', '#30789b', '#5295b9', '#72b3d9', '#92d3f9', '#b5f5ff'];

            querySnapshot.forEach((doc) => {
                const mood = doc.data().Mood;

                // If the mood is already in the tally, increment the count; otherwise, initialize the count to 1
                const index = list.indexOf(mood);
                if (index !== -1) {
                    tally[index] += 1;
                } else {
                    list.push(mood);
                    tally.push(1);
                }
            });

            // Sort moods and tally in descending order based on occurrences
            const sortedIndices = tally.map((_, index) => index).sort((a, b) => tally[b] - tally[a]);

            const sortedList = sortedIndices.map(index => list[index]);
            const sortedTally = sortedIndices.map(index => tally[index]);

            // Combine all but the first 7 moods into an "Other" category
            let sum = 0;
            while (sortedList.length > 7) {
                sum += sortedTally.pop();
                sortedList.pop();
            }

            // Add "Other" category to the sorted list and tally
            if (sum > 0) {
                sortedList.push("Other");
                sortedTally.push(sum);
            }

            while (colors.length > sortedList.length) {
                colors.pop();
            }

            console.log(sortedTally);
            console.log(colors);
            console.log(sortedList);

            setMoodsTally(sortedTally);
            setMoodColors(colors);
            setMoodsList(sortedList);

            setDisplay(1);

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
        <SafeAreaView style={Theme.staticContainer}>
            <Text style={Hub.titleText}>Mood Chart</Text>

            {display !== 0 && (
                <>
                    <PieChart
                        widthAndHeight={300}
                        series={moodsTally}
                        sliceColor={moodColors}
                        coverRadius={0.45}
                        coverFill={'#FCF6EE'}
                    />
                    <View style={Hub.legendContainer}>
                        {moodsList.map((mood, index) => (
                            <View style={Hub.legendItem} key={index}>
                                <View style={{ backgroundColor: moodColors[index], width: 20, height: 20, borderRadius: 10, marginRight: 5 }} />
                                <Text>{mood}</Text>
                            </View>
                        ))}
                    </View>
                </>
            )}

            <FAB
                style={Hub.fab}
                icon="plus"
                color="#FCF6EE"
                onPress={() => navigation.navigate('New Mood')}
            />
        </SafeAreaView>
    );
}