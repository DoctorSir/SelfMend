import React from 'react';
import { StyleSheet, Linking, SafeAreaView, View } from 'react-native';
import { List, Divider, Text } from 'react-native-paper';

import HelpLogo from '../../components/HelpLogo'

import HelpStyling from '../../CSS/HelpStyling';

const MentalHealthServicesPage = () => {
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

    return (
        <SafeAreaView style={HelpStyling.container}>
            <Text style={HelpStyling.header} > Mental Health Services and Crisis Support</Text>

            <HelpLogo />

            <List.Section style={HelpStyling.listSection}>
                {mentalHealthWebsites.map((website, index) => (
                    <List.Item
                        key={index}
                        title={website.name}
                        onPress={() => Linking.openURL(website.url)}
                        titleStyle={HelpStyling.listItemLinks}
                    />
                ))}

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


export default MentalHealthServicesPage;
