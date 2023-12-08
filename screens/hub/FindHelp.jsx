// Import necessary modules and components from React and React Native
import React from 'react';
import { StyleSheet, Linking, SafeAreaView, View } from 'react-native';
import { List, Divider, Text } from 'react-native-paper';

// Import the HelpLogo component
import HelpLogo from '../../components/HelpLogo'

// Import styles for the component
import HelpStyling from '../../CSS/HelpStyling';

// Functional component for displaying mental health services and crisis support
const MentalHealthServicesPage = () => {
    // Array of mental health websites with their names and URLs
    const mentalHealthWebsites = [
        {
            name: 'Psychology Today',
            url: 'https://www.psychologytoday.com/us/therapists',
        },
        {
            name: 'SAMHSA Treatment Locator',
            url: 'https://findtreatment.samhsa.gov/',
        },
        {
            name: 'NAMI Helpline and Support Groups',
            url: 'https://www.nami.org/find-support',
        },
    ];

    // Rendering the UI components
    return (
        <SafeAreaView style={HelpStyling.container}>
            {/* Header with the title */}
            <Text style={HelpStyling.header}>Mental Health Services and Crisis Support</Text>

            {/* Display the HelpLogo component */}
            <HelpLogo />

            {/* List.Section to contain the list of mental health websites */}
            <List.Section style={HelpStyling.listSection}>
                {/* Map through each mental health website and create a List.Item for each */}
                {mentalHealthWebsites.map((website, index) => (
                    <List.Item
                        key={index}
                        title={website.name}
                        onPress={() => Linking.openURL(website.url)}
                        titleStyle={HelpStyling.listItemLinks}
                    />
                ))}

                {/* List.Item for the 988 immediate assistance */}
                <List.Item
                    title="Call 988 for immediate assistance"
                    description="You are never alone. Help is always available."
                    titleStyle={HelpStyling.listItem988Title}
                    descriptionStyle={HelpStyling.listItem988Desc}
                />
            </List.Section>
        </SafeAreaView>
    );
};

// Export the MentalHealthServicesPage component as the default export
export default MentalHealthServicesPage;
