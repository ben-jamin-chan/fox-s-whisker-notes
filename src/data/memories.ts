import memory1Image from '@/assets/1.jpeg';
import memory2Image from '@/assets/2.jpeg';
import memory3Image from '@/assets/3.jpeg';
import memory4Image from '@/assets/4.jpeg';
import memory5Image from '@/assets/5.jpeg';
import memory6Image from '@/assets/6.jpeg';
import memory7Image from '@/assets/7.jpeg';
import memory8Image from '@/assets/8.jpeg';
import memory9Image from '@/assets/9.jpeg';
import memory10Image from '@/assets/10.jpeg';

export interface Memory {
  id: string;
  content: string;
  type: 'memory' | 'reason' | 'future' | 'joke' | 'foxfact';
  foxPun?: string;
  imageUrl?: string;
  date?: string;
}

// To add your own photos:
// 1. Add images to src/assets/ folder (e.g., memory-1.jpg, memory-2.jpg)
// 2. Import them at the top of this file: import memory1Image from '@/assets/memory-1.jpg';
// 3. Add the imageUrl field to each memory: imageUrl: memory1Image

export const sampleMemories: Memory[] = [
  {
    id: '1',
    content: "Remember our first adventure together? You made me laugh so hard I couldn't breathe. That's when I knew you were the one.",
    type: 'memory',
    foxPun: "You're foxy and you know it! 🦊",
    imageUrl: memory3Image,
    // imageUrl: memory1Image, // Uncomment and add your import
  },
  // {
  //   id: '2',
  //   content: "I love how your eyes light up when you see a fox. That pure joy is one of my favorite things about you.",
  //   type: 'reason',
  //   foxPun: "Fox fact: I'm lucky to have found my vixen! 💕",
  //   // imageUrl: memory2Image, // Uncomment and add your import
  // },
  // {
  //   id: '3',
  //   content: "One day, I want to take you to Japan to see the fox village. Just imagine—hundreds of fluffy foxes, and you in the middle of them all!",
  //   type: 'future',
  //   foxPun: "It's going to be fox-tastic! ✨",
  // },
  // {
  //   id: '4',
  //   content: "Remember when you outsmarted me at that puzzle game? I was so impressed. You're as clever as a fox!",
  //   type: 'memory',
  //   foxPun: "Outfoxed again! 🦊",
  // },
  // {
  //   id: '5',
  //   content: "I love your laugh. It's like music to my ears, and I'll spend forever trying to hear it every day.",
  //   type: 'reason',
  //   foxPun: "You make my heart do a happy fox bounce! 💓",
  // },
  // {
  //   id: '6',
  //   content: "Fox Fact: Red foxes mate for life and are incredibly devoted partners. Just like us, they choose their person and stick with them forever.",
  //   type: 'foxfact',
  //   foxPun: "We're in this den together, forever! 🏠",
  // },
  // {
  //   id: '7',
  //   content: "That time we got caught in the rain and just danced anyway? That's my favorite memory of spontaneous joy with you.",
  //   type: 'memory',
  //   foxPun: "No umbrella needed when I'm with you, foxy! ☔️",
  // },
  // {
  //   id: '8',
  //   content: "I love how you make even ordinary moments feel magical. Grocery shopping, cooking dinner—everything's an adventure with you.",
  //   type: 'reason',
  //   foxPun: "Life's more fun-tastic with my favorite fox! 🛒",
  // },
  // {
  //   id: '9',
  //   content: "Fox Fact: Foxes use the Earth's magnetic field to hunt! They're one of the few animals that can sense magnetic north. You have that same incredible intuition.",
  //   type: 'foxfact',
  //   foxPun: "You always point me in the right direction! 🧭",
  // },
  // {
  //   id: '10',
  //   content: "Remember our cozy movie marathon nights? I can't wait for a thousand more, curled up with you.",
  //   type: 'memory',
  //   foxPun: "Netflix and... foxes? 🎬",
  // },
  // {
  //   id: '11',
  //   content: "I want to build a life with you filled with adventures, quiet mornings, and endless laughter.",
  //   type: 'future',
  //   foxPun: "Building our den, one moment at a time! 🏡",
  // },
  // {
  //   id: '12',
  //   content: "Your kindness to others inspires me every day. The way you care about everyone around you is beautiful.",
  //   type: 'reason',
  //   foxPun: "The most caring vixen in all the forest! 💝",
  // },
  // {
  //   id: '13',
  //   content: "Fox Fact: Baby foxes are called 'kits' and they love to play-fight with their siblings. We should have play-fights more often!",
  //   type: 'foxfact',
  //   foxPun: "Ready for a pillow fight, kit? 🛏️",
  // },
  // {
  //   id: '14',
  //   content: "That inside joke we have? Every time I think of it, I smile. Our secret language of love.",
  //   type: 'joke',
  //   foxPun: "Only we know what the fox says! 🤫",
  // },
  // {
  //   id: '15',
  //   content: "I love how passionate you are about the things you care about. Your enthusiasm is contagious!",
  //   type: 'reason',
  //   foxPun: "Passion like a fox on a mission! 🎯",
  // },
  // {
  //   id: '16',
  //   content: "Let's travel somewhere new this year. Anywhere you want—I just want to explore the world with you by my side.",
  //   type: 'future',
  //   foxPun: "Two foxes on an adventure! ✈️",
  // },
  // {
  //   id: '17',
  //   content: "Fox Fact: A fox's tail is called a 'brush' and they use it to keep warm in winter by wrapping it around their nose. Consider my love your eternal warmth!",
  //   type: 'foxfact',
  //   foxPun: "I'll always keep you warm! 🧣",
  // },
  // {
  //   id: '18',
  //   content: "I love your creativity and how you see beauty in unexpected places. You've taught me to look at the world differently.",
  //   type: 'reason',
  //   foxPun: "Seeing the world through foxy eyes! 👀",
  // },
  // {
  //   id: '19',
  //   content: "Remember that meal you made that was absolutely perfect? I still think about it. You put so much love into everything.",
  //   type: 'memory',
  //   foxPun: "Fox-approved cuisine! 👨‍🍳",
  // },
  // {
  //   id: '20',
  //   content: "Every moment with you feels like coming home to a warm, cozy den. You are my home.",
  //   type: 'reason',
  //   foxPun: "Home is wherever you are, my love! 🦊💕",
  // },
];

export const getRandomMemory = (memories: Memory[]): Memory => {
  const randomIndex = Math.floor(Math.random() * memories.length);
  return memories[randomIndex];
};

export const getMemoryTypeLabel = (type: Memory['type']): string => {
  switch (type) {
    case 'memory':
      return '✨ A Cherished Memory';
    case 'reason':
      
      return '💕 Why I Love You';
    case 'future':
      return '🌟 Dreams for Us';
    case 'joke':
      return '😄 Our Secret Jokes';
    case 'foxfact':
      return '🦊 Fox Wisdom';
    default:
      return '💝 From the Heart';
  }
};

export const getMemoryTypeColor = (type: Memory['type']): string => {
  switch (type) {
    case 'memory':
      return 'from-amber-50 to-orange-50';
    case 'reason':
      return 'from-rose-50 to-pink-50';
    case 'future':
      return 'from-sky-50 to-indigo-50';
    case 'joke':
      return 'from-yellow-50 to-amber-50';
    case 'foxfact':
      return 'from-orange-50 to-red-50';
    default:
      return 'from-fox-cream to-white';
  }
};
