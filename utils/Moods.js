// Define categories array containing mood categories
export const categories = [
    { label: 'Happy', value: 'Happy' },
    { label: 'Sad', value: 'Sad' },
    { label: 'Angry', value: 'Angry' },
    { label: 'Disgusted', value: 'Disgusted' },
    { label: 'Fearful', value: 'Fearful' },
    { label: 'Surprised', value: 'Surprised' },
    { label: 'Bad', value: 'Bad' },
];

// Define subcategories object containing mood subcategories for each category
export const subcategories = {
    Happy: [
        { label: 'Playful', value: 'Playful' },
        { label: 'Content', value: 'Content' },
        { label: 'Interested', value: 'Interested' },
        { label: 'Proud', value: 'Proud' },
        { label: 'Accepted', value: 'Accepted' },
        { label: 'Powerful', value: 'Powerful' },
        { label: 'Peaceful', value: 'Peaceful' },
        { label: 'Trusting', value: 'Trusting' },
        { label: 'Optimistic', value: 'Optimistic' },
    ],
    Sad: [
        { label: 'Lonely', value: 'Lonely' },
        { label: 'Vulnerable', value: 'Vulnerable' },
        { label: 'Despair', value: 'Despair' },
        { label: 'Guilty', value: 'Guilty' },
        { label: 'Depressed', value: 'Depressed' },
        { label: 'Hurt', value: 'Hurt' },
    ],
    Angry: [
        { label: 'Let Down', value: 'Let Down' },
        { label: 'Humiliated', value: 'Humiliated' },
        { label: 'Bitter', value: 'Bitter' },
        { label: 'Mad', value: 'Mad' },
        { label: 'Aggressive', value: 'Aggressive' },
        { label: 'Frustrated', value: 'Frustrated' },
        { label: 'Distant', value: 'Distant' },
        { label: 'Critical', value: 'Critical' },
    ],
    Disgusted: [
        { label: 'Disapproving', value: 'Disapproving' },
        { label: 'Disappointed', value: 'Disappointed' },
        { label: 'Awful', value: 'Awful' },
        { label: 'Repelled', value: 'Repelled' },
    ],
    Fearful: [
        { label: 'Scared', value: 'Scared' },
        { label: 'Anxious', value: 'Anxious' },
        { label: 'Insecure', value: 'Insecure' },
        { label: 'Weak', value: 'Weak' },
        { label: 'Rejected', value: 'Rejected' },
        { label: 'Threatened', value: 'Threatened' },
    ],
    Surprised: [
        { label: 'Startled', value: 'Startled' },
        { label: 'Confused', value: 'Confused' },
        { label: 'Amazed', value: 'Amazed' },
        { label: 'Excited', value: 'Excited' },
    ],
    Bad: [
        { label: 'Bored', value: 'Bored' },
        { label: 'Busy', value: 'Busy' },
        { label: 'Stressed', value: 'Stressed' },
        { label: 'Tired', value: 'Tired' },
    ]
};

// Define items object containing mood items for each subcategory
export const items = {
    Playful: [
        { label: 'Aroused', value: 'Aroused' },
        { label: 'Cheeky', value: 'Cheeky' },
    ],
    Content: [
        { label: 'Free', value: 'Free' },
        { label: 'Joyful', value: 'Joyful' },
    ],
    Interested: [
        { label: 'Curious', value: 'Curious' },
        { label: 'Inquisitive', value: 'Inquisitive' },
    ],
    Proud: [
        { label: 'Successful', value: 'Successful' },
        { label: 'Confident', value: 'Confident' },
    ],
    Accepted: [
        { label: 'Respected', value: 'Respected' },
        { label: 'Valued', value: 'Valued' },
    ],
    Powerful: [
        { label: 'Courageous', value: 'Courageous' },
        { label: 'Creative', value: 'Creative' },
    ],
    Peaceful: [
        { label: 'Loving', value: 'Loving' },
        { label: 'Thankful', value: 'Thankful' },
    ],
    Trusting: [
        { label: 'Sensitive', value: 'Sensitive' },
        { label: 'Intimate', value: 'Intimate' },
    ],
    Optimistic: [
        { label: 'Hopeful', value: 'Hopeful' },
        { label: 'Inspired', value: 'Inspired' },
    ],
    Lonely: [
        { label: 'Isolated', value: 'Isolated' },
        { label: 'Abandoned', value: 'Abandoned' },
    ],
    Vulnerable: [
        { label: 'Victimized', value: 'Victimized' },
        { label: 'Fragile', value: 'Fragile' },
    ],
    Despair: [
        { label: 'Grief', value: 'Grief' },
        { label: 'Powerless', value: 'Powerless' },
    ],
    Guilty: [
        { label: 'Ashamed', value: 'Ashamed' },
        { label: 'Remorseful', value: 'Remorseful' },
    ],
    Depressed: [
        { label: 'Inferior', value: 'Inferior' },
        { label: 'Empty', value: 'Empty' },
    ],
    Hurt: [
        { label: 'Embarrassed', value: 'Embarrassed' },
        { label: 'Disappointed', value: 'Disappointed' },
    ],
    'Let Down': [
        { label: 'Betrayed', value: 'Betrayed' },
        { label: 'Resentful', value: 'Resentful' },
    ],
    Humiliated: [
        { label: 'Disrespected', value: 'Disrespected' },
        { label: 'Ridiculed', value: 'Ridiculed' },
    ],
    Bitter: [
        { label: 'Indignant', value: 'Indignant' },
        { label: 'Violated', value: 'Violated' },
    ],
    Mad: [
        { label: 'Furious', value: 'Furious' },
        { label: 'Jealous', value: 'Jealous' },
    ],
    Aggressive: [
        { label: 'Provoked', value: 'Provoked' },
        { label: 'Hostile', value: 'Hostile' },
    ],
    Frustrated: [
        { label: 'Infuriated', value: 'Infuriated' },
        { label: 'Annoyed', value: 'Annoyed' },
    ],
    Distant: [
        { label: 'Withdrawm', value: 'Withdrawm' },
        { label: 'Numb', value: 'Numb' },
    ],
    Critical: [
        { label: 'Sceptical', value: 'Sceptical' },
        { label: 'Dismissive', value: 'Dismissive' },
    ],
    Disapproving: [
        { label: 'Judgemental', value: 'Judgemental' },
        { label: 'Embarrassed', value: 'Embarrassed' },
    ],
    Disappointed: [
        { label: 'Appalled', value: 'Appalled' },
        { label: 'Revolted', value: 'Revolted' },
    ],
    Awful: [
        { label: 'Nauseated', value: 'Nauseated' },
        { label: 'Detestable', value: 'Detestable' },
    ],
    Repelled: [
        { label: 'Horrified', value: 'Horrified' },
        { label: 'Hesitant', value: 'Hesitant' },
    ],
    Scared: [
        { label: 'Helpless', value: 'Helpless' },
        { label: 'Frightened', value: 'Frightened' },
    ],
    Anxious: [
        { label: 'Overwhelmed', value: 'Overwhelmed' },
        { label: 'Worried', value: 'Worried' },
    ],
    Insecure: [
        { label: 'Inadequate', value: 'Inadequate' },
        { label: 'Inferior', value: 'Inferior' },
    ],
    Weak: [
        { label: 'Worthless', value: 'Worthless' },
        { label: 'Insignificant', value: 'Insignificant' },
    ],
    Rejected: [
        { label: 'Excluded', value: 'Excluded' },
        { label: 'Persecuted', value: 'Persecuted' },
    ],
    Threatened: [
        { label: 'Nervous', value: 'Nervous' },
        { label: 'Exposed', value: 'Exposed' },
    ],
    Startled: [
        { label: 'Shocked', value: 'Shocked' },
        { label: 'Dismayed', value: 'Dismayed' },
    ],
    Confused: [
        { label: 'Disillusioned', value: 'Disillusioned' },
        { label: 'Perplexed', value: 'Perplexed' },
    ],
    Amazed: [
        { label: 'Astonished', value: 'Astonished' },
        { label: 'In Awe', value: 'In Awe' },
    ],
    Excited: [
        { label: 'Eager', value: 'Eager' },
        { label: 'Energetic', value: 'Energetic' },
    ],
    Bored: [
        { label: 'Indifferent', value: 'Indifferent' },
        { label: 'Apathetic', value: 'Apathetic' },
    ],
    Busy: [
        { label: 'Pressured', value: 'Pressured' },
        { label: 'Rushed', value: 'Rushed' },
    ],
    Stressed: [
        { label: 'Overwhelmed', value: 'Overwhelmed' },
        { label: 'Out of Control', value: 'Out of Control' },
    ],
    Tired: [
        { label: 'Sleepy', value: 'Sleepy' },
        { label: 'Unfocused', value: 'Unfocused' },
    ],
};
