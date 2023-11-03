const reminders = [
    { id: 1, text: 'Remember to take deep breaths today.' },
    { id: 2, text: 'Practice gratitude for at least 3 things.' },
    { id: 3, text: 'Take a short walk and enjoy nature.' },
    { id: 4, text: 'Try to get enough sleep tonight.' },
    { id: 5, text: 'Stay hydrated throughout the day.' },
    { id: 6, text: 'Take some time for yourself and relax.' },
    { id: 7, text: 'Connect with a friend or loved one today.' },
    { id: 8, text: 'Engage in a hobby or activity you enjoy.' },
    { id: 9, text: 'Eat a healthy and balanced meal for lunch.' },
    { id: 10, text: 'Practice mindfulness and be present in the moment.' },
    { id: 11, text: 'Listen to your favorite music and unwind.' },
    { id: 12, text: 'Write down your thoughts and feelings in a journal.' },
    { id: 13, text: 'Stretch your body and do some light exercises.' },
    { id: 14, text: 'Set realistic goals and prioritize your tasks.' },
    { id: 15, text: 'Express kindness and empathy towards others.' },
    { id: 16, text: 'Take a moment to appreciate the present.' },
    { id: 17, text: 'Spend quality time with your loved ones.' },
    { id: 18, text: 'Engage in activities that bring you joy.' },
    { id: 19, text: 'Reflect on your achievements and progress.' },
    { id: 20, text: 'Practice deep breathing and relaxation techniques.' },
    { id: 21, text: 'Get some fresh air and enjoy the outdoors.' },
    { id: 22, text: 'Learn something new that interests you.' },
    { id: 23, text: 'Take breaks and rest when you need to.' },
    { id: 24, text: 'Appreciate the small moments of happiness.' },
    { id: 25, text: 'Challenge negative thoughts with positive affirmations.' },
    { id: 26, text: 'Find ways to express your creativity.' },
    { id: 27, text: 'Engage in activities that promote self-care.' },
    { id: 28, text: 'Focus on solutions rather than problems.' },
    { id: 29, text: 'Practice patience and self-compassion.' },
    { id: 30, text: 'Celebrate your progress and achievements.' },
    { id: 31, text: 'Embrace the possibilities of a new day.' },
    { id: 32, text: 'Learn something new that interests you.' },
    { id: 33, text: 'Take breaks and rest when you need to.' },
    { id: 34, text: 'Appreciate the small moments of happiness.' },
    { id: 35, text: 'Challenge negative thoughts with positive affirmations.' },
    { id: 36, text: 'Find ways to express your creativity.' },
    { id: 37, text: 'Engage in activities that promote self-care.' },
    { id: 38, text: 'Focus on solutions rather than problems.' },
    { id: 39, text: 'Practice patience and self-compassion.' },
    { id: 40, text: 'Celebrate your progress and achievements.' },
    { id: 41, text: 'Be present and live in the moment.' },
    { id: 42, text: 'Express gratitude for the people in your life.' },
    { id: 43, text: 'Visualize and affirm your goals.' },
    { id: 44, text: 'Take time to appreciate the beauty around you.' },
    { id: 45, text: 'Laugh and find joy in the simple things.' },
    { id: 46, text: 'Help someone in need and make a difference.' },
    { id: 47, text: 'Forgive yourself and others for past mistakes.' },
    { id: 48, text: 'Stay committed to your personal growth journey.' },
    { id: 49, text: 'Surround yourself with positive influences.' },
    { id: 50, text: 'Learn from challenges and use them to grow.' },
    { id: 51, text: 'Set boundaries to protect your well-being.' },
    { id: 52, text: 'Believe in your ability to overcome obstacles.' },
    { id: 53, text: 'Stay focused on your priorities and goals.' },
    { id: 54, text: 'Appreciate the journey as much as the destination.' },
    { id: 55, text: 'Take small steps toward your larger goals.' },
    { id: 56, text: 'Acknowledge your progress and celebrate milestones.' },
    { id: 57, text: 'Practice compassion and understanding.' },
    { id: 58, text: 'Learn from criticism and use it to improve.' },
    { id: 59, text: 'Believe in your potential to create a better future.' },
    { id: 60, text: 'Stay true to your values and principles.' },
    { id: 61, text: 'Take time to learn from your mistakes.' },
    { id: 62, text: 'Nurture your relationships and connections.' },
    { id: 63, text: 'Stay open to new opportunities and experiences.' },
    { id: 64, text: 'Practice self-acceptance and self-love.' },
    { id: 65, text: 'Appreciate the journey and the lessons it brings.' },
    { id: 66, text: 'Stay persistent and committed to your goals.' },
    { id: 67, text: 'Value the lessons you learn from difficult times.' },
    { id: 68, text: 'Focus on the present moment, not the past or future.' },
    { id: 69, text: 'Surround yourself with positive and supportive people.' },
    { id: 70, text: 'Find inspiration in the success stories of others.' },
    { id: 71, text: 'Release negative energy and focus on the positive.' },
    { id: 72, text: 'Appreciate the beauty in diversity and uniqueness.' },
    { id: 73, text: 'Take a moment to enjoy the simple pleasures of life.' },
    { id: 74, text: 'Remind yourself that you are capable and worthy.' },
    { id: 75, text: 'Make time for activities that bring you joy.' },
    { id: 76, text: 'Find peace in moments of solitude and reflection.' },
    { id: 77, text: 'Create a vision for your ideal future and work towards it.' },
    { id: 78, text: 'Stay curious and always keep learning.' },
    { id: 79, text: 'Celebrate the uniqueness that makes you special.' },
    { id: 80, text: 'Release the need for perfection and embrace progress.' },
    { id: 81, text: 'Express your thoughts and emotions openly and honestly.' },
    { id: 82, text: 'Face challenges with courage and determination.' },
    { id: 83, text: 'Set aside time for self-reflection and introspection.' },
    { id: 84, text: 'Spend time in nature and appreciate its beauty.' },
    { id: 85, text: 'Find joy in giving and contributing to others.' },
    { id: 86, text: 'Trust the process and stay patient with your journey.' },
    { id: 87, text: 'Create a supportive and nurturing environment for yourself.' },
    { id: 88, text: 'Take responsibility for your actions and choices.' },
    { id: 89, text: 'Visualize your success and work towards making it a reality.' },
    { id: 90, text: 'Remind yourself of your strengths and capabilities.' },
    { id: 91, text: 'Stay committed to your personal and professional growth.' },
    { id: 92, text: 'Practice empathy and understanding towards others.' },
    { id: 93, text: 'Appreciate the journey and the lessons it brings.' },
    { id: 94, text: 'Practice forgiveness and let go of resentment.' },
    { id: 95, text: 'Set achievable goals that align with your values.' },
    { id: 96, text: 'Find inspiration in the beauty of nature.' },
    { id: 97, text: 'Prioritize self-care and well-being.' },
    { id: 98, text: 'Stay open to learning and new experiences.' },
    { id: 99, text: 'Face challenges with a positive and determined attitude.' },
    { id: 100, text: 'Reflect on your accomplishments and celebrate them.' }
];

export const getRandomReminder = () => {
    const index = Math.floor(Math.random() * reminders.length);
    return reminders[index];
};
