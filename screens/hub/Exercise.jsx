import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import Hub from "../../CSS/HubStyling"; // Import your styling

const accordionItems = [
  {
    title: "Diaphragmatic Breathing Steps",
    content: [
      "Step 1. Find a Comfortable Position: Start by finding a quiet and comfortable place to sit or lie down. You can also do diaphragmatic breathing while standing, but it's often easier to learn while sitting or lying down.",
      "Step 2. Relax Your Body: Make sure your shoulders are relaxed and not hunched. You can close your eyes or keep them open, depending on your preference. Relax your facial muscles, jaw, and neck.",
      "Step 3. Place Your Hand on Your Abdomen: You can place one hand on your abdomen just below your ribcage and the other on your chest. This will help you feel the movement of your diaphragm and chest.",
      "Step 4. Inhale Slowly Through Your Nose: Breathe in slowly and deeply through your nose. Focus on filling your lungs from the bottom up. As you do this, you should feel your abdomen rise as your diaphragm contracts and pushes downward. Try to keep your chest relatively still during this phase.",
      "Step 5. Exhale Slowly Through Your Mouth: Exhale slowly and completely through your mouth. As you do this, you should feel your abdomen fall as your diaphragm relaxes and moves upward.",
      "Step 6. Continue the Breathing Cycle: Continue this deep breathing pattern, focusing on the rise and fall of your abdomen. Inhale slowly for a count of 4-6 seconds and exhale for a similar count. The exact timing isn't as important as making your breaths slow and controlled.",
      "Step 7. Practice Regularly: Practice diaphragmatic breathing for at least a few minutes each day. You can gradually increase the duration of your practice as you become more comfortable with this technique.",
      "Step 8. Pay Attention to Your Breath: As you practice, pay attention to your breath and the sensations in your body. Try to let go of any distracting thoughts and focus on your breath to help reduce stress and increase relaxation.",
      "Step 9. Use Diaphragmatic Breathing in Stressful Situations: Once you've become proficient at diaphragmatic breathing, you can use it to manage stress, anxiety, or other intense emotions. Whenever you feel stressed or anxious, take a moment to practice deep breathing.",
      "Remember that diaphragmatic breathing is a skill that may take some time to master. With regular practice, it can become a valuable tool for managing stress and promoting relaxation in your daily life.",
    ],
  },
  {
    title: "4-7-8 Breathing Steps",
    content: [
      "Step 1: Find a quiet place, sit or lie in a comfortable position, and close your eyes.",
      "Step 2: Take a deep breathe: Inhale quietly and deeply for 4 seconds.",
      "Step 3: Hold your breathe: Hold your breathe for a count of 7 seconds.",
      "Step 4: Exhale slowly: Exhale slowly through your mouth for a count of 8 seconds.",
      "Step 5: Repeat the cycle, maintain a rhythm, and practice regularly.",
    ],
  },
  {
    title: "Progressive Muscle Relaxation Steps",
    content: [
      "Progressive Muscle Relaxation (PMR) is a relaxation technique that involves tensing and then relaxing different muscle groups in your body to reduce physical tension and promote relaxation. It can be an effective way to manage stress and anxiety",
    ],
  },
  {
    title: "Press me to discover something fun!",
    content: [
      "Just kidding. No fun for you yet.",
    ]
  },
  {
    title: "Metallica - Nothing Else Matters",
    content: [
      "So close, no matter how far",
"Couldn't be much more from the heart",
"Forever trusting who we are",
"And nothing else matters",
"Never opened myself this way",
"Life is ours, we live it our way",
"All these words, I don't just say",
"And nothing else matters",
"Trust I seek and I find in you",
"Every day for us something new",
"Open mind for a different view",
"And nothing else matters",
"Never cared for what they do",
"Never cared for what they know",
"But I know",
"So close, no matter how far",
"It couldn't be much more from the heart",
"Forever trusting who we are",
"And nothing else matters",
"Never cared for what they do",
"Never cared for what they know",
"But I know",
"I never opened myself this way",
"Life is ours, we live it our way",
"All these words, I don't just say",
"And nothing else matters",
"Trust I seek and I find in you",
"Every day for us something new",
"Open mind for a different view",
"And nothing else matters",
"Never cared for what they say",
"Never cared for games they play",
"Never cared for what they do",
"Never cared for what they know",
"And I know, yeah, yeah",
"So close, no matter how far",
"Couldn't be much more from the heart",
"Forever trusting who we are",
"No, nothing else matters"
    ]
  }
  // Add more accordion items as needed
];

export default function ExercisePage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 80 }}>
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
