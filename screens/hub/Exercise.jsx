import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import Hub from "../../CSS/HubStyling"; // Import your styling

const accordionItems = [
  {
    title: "Diaphragmatic Breathing Steps",
    content: [
      "Step 1. Find a Comfortable Position: Start by finding a quiet and comfortable place to sit or lie down.",
      "",
      "Step 2. Relax Your Body: Relax your shoulders, facial muscles, jaw, and neck.",
      "",
      "Step 4. Inhale Slowly Through Your Nose: Breathe in slowly and deeply through your nose.",
      "",
      "Step 5. Exhale Slowly Through Your Mouth: Exhale slowly through your mouth.",
      "",
      "Step 6. Continue the Breathing Cycle: Inhale slowly for a count of 4-6 seconds and exhale for a similar count.",
      "",
      "Step 7. Practice Regularly: Practice diaphragmatic breathing for at least a few minutes each day.",
      "",
    ],
  },
  {
    title: "4-7-8 Breathing Steps",
    content: [
      "Step 1: Find a quiet place, sit or lie in a comfortable position, and close your eyes.",
      "",
      "Step 2: Take a deep breathe: Inhale quietly and deeply for 4 seconds.",
      "",
      "Step 3: Hold your breathe: Hold your breathe for a count of 7 seconds.",
      "",
      "Step 4: Exhale slowly: Exhale slowly through your mouth for a count of 8 seconds.",
      "",
      "Step 5: Repeat the cycle, maintain a rhythm, and practice regularly.",
    ],
  },
  {
    title: "Progressive Muscle Relaxation Steps",
    content: [
      "Progressive Muscle Relaxation (PMR) involves tensing and then relaxing different muscle groups in your body to reduce physical tension and promote relaxation.", 
      "",
      "It can be an effective way to manage stress and anxiety.",
      "",
      "Step 1: Tense the muscles in your body such as your calves, knees, feet, neck, shoulders, fists, eyes, etc.",
      "",
      "Step 2: Tense your muscles only one part at a time. Release the tensed muscles after 5 seconds.",
      "",
      "Step 3: Relax your muscles and then continue onto the next body part.",

    ],
  },
  {
    title: " ",
    content: [""],
  },
  {
    title: "",
    content: [],
  },
  // Add more accordion items as needed
];

export default function ExercisePage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <View style={Hub.exeContainer}> 
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: "120%"}}>
        <Text style={Hub.exerciseTitle}>Mental Health Exercises</Text>
        {accordionItems.map((item, index) => (
          <View key={index}>
            <Pressable
              style={({ pressed }) => [
                Hub.button,
                expandedIndex === index
                  ? Hub.buttonBackgroundPressed
                  : Hub.buttonBackground,
                pressed
                  ? { borderRadius: 10, marginBottom: 10 }
                  : { borderRadius: 10, marginBottom: 10 },
              ]}
              onPress={() => toggleAccordion(index)}
            >
              <Text
                style={[
                  Hub.buttonText,
                  expandedIndex === index ? Hub.buttonTextPressed : null,
                ]}
              >
                {item.title}
              </Text>
            </Pressable>
            {expandedIndex === index && (
              <View
                style={[
                  Hub.exerciseAccordionContent,
                  { marginTop: 5, padding: 10 },
                ]}
              >
                {item.content.map((step, stepIndex) => (
                  <Text key={stepIndex}>{step}</Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
