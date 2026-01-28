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
import memory11Image from '@/assets/11.jpeg';
import memory12Image from '@/assets/12.jpeg';
import memory13Image from '@/assets/13.jpeg';
import memory14Image from '@/assets/14.jpeg';
import memory15Image from '@/assets/15.jpeg';
import memory16Image from '@/assets/16.jpeg';
import memory17Image from '@/assets/17.jpeg';
import memory18Image from '@/assets/18.jpeg';
import memory19Image from '@/assets/19.jpeg';
import memory20Image from '@/assets/20.jpeg';
import memory21Image from '@/assets/21.jpeg';

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
    content: "Remember our first adventure together overseas? This has to be my favorite photo, that's when I knew you were the one.",
    type: 'memory',
    foxPun: "A proper traditional photo, this has to be my favorite! ❤️", 
    imageUrl: memory3Image,
  },
  {
    id: '2',
    content: "Remember when we both had red threads as promise when we were young?",
    type: 'reason',
    foxPun: "The idea is that the thread may stretch, tangle, or twist—but it never breaks",
    imageUrl: memory1Image, 
  },
  {
    id: '3',
    content: "When times were good, and we were young and excited about life and out future together",
    type: 'future',
    foxPun: "It's going to be fox-tastic! ✨",
    imageUrl: memory2Image, 
  },
  {
    id: '4',
    content: "Look at us go! Smiles brighter than the sun over us!!",
    type: 'memory',
    foxPun: "Outfoxed again! 🦊",
    imageUrl: memory4Image,
  },
  {
    id: '5',
    content: "We still look alike, this photo is telling them: Don't mess with us 🤨",
    type: 'reason',
    foxPun: "You make my heart do a happy fox bounce! 💓",
    imageUrl: memory5Image,
  },
  {
    id: '6',
    content: "At least we went to Olympics in Beijing!",
    type: 'foxfact',
    foxPun: "We did not went in, but at least we were there ahihi!",
    imageUrl: memory6Image,
  },
  {
    id: '7',
    content: "That time we got caught in the rain and was just happy anyway? That's my favorite memory of spontaneous joy with you",
    type: 'memory',
    foxPun: "Spontaneous rain means we will be together forever! No umbrella needed when I'm with you ☔️",
    imageUrl: memory7Image,
  },
  {
    id: '8',
    content: "Do you still remember this in Penang? Trips with you are always magical!",
    type: 'reason',
    foxPun: "Yellow like Coldplay, look at how they shine for us!",
    imageUrl: memory8Image,
  },
  {
    id: '9',
    content: "First professional passport photo shoot in KL",
    type: 'foxfact',
    foxPun: "I still love how you look like this till today!!",
    imageUrl: memory9Image,
  },
  {
    id: '10',
    content: "Fox Fact: Red foxes mate for life and are incredibly devoted partners. Just like us, they choose their person and stick with them forever.",
    type: 'foxfact',
    foxPun: "We're in this den together, forever! 🏠",
    imageUrl: memory10Image,
  },
  {
    id: '11',
    content: "Guess when and where was this?",
    type: 'future',
    foxPun: "We both still look like young buffalo ahihi",
    imageUrl: memory11Image,
  },
  {
    id: '12',
    content: "Your kindness to others inspires me every day. Also, look at how young you were 🤣",
    type: 'reason',
    foxPun: "Not sure if you still remember when and where was this ahihi!",
    imageUrl: memory12Image,
  },
  {
    id: '13',
    content: "Lots of love & lots of kisses in the Greatwall of China!",
    type: 'foxfact',
    foxPun: "We definitely should take more photos like this again",
    imageUrl: memory13Image,
  },
  {
    id: '14',
    content: "Love this photo too, everyone looks so happy here!",
    type: 'joke',
    foxPun: "Fox cake for a con heo 🎂",
    imageUrl: memory14Image,
  },
  {
    id: '15',
    content: "Love this photo too, do you still remember that day?",
    type: 'reason',
    foxPun: "Spontaneous trip, and memorable till this day",
    imageUrl: memory15Image,
  },
  {
    id: '16',
    content: "Gotta say, I love this photo!",
    type: 'future',
    foxPun: "That's the look of waiting until late just for Shin Zushi 🍣🍱",
    imageUrl: memory16Image,
  },
  {
    id: '17',
    content: "I love how you make even ordinary moments feel magical. Grocery shopping, cooking dinner—everything's an adventure with you.",
    type: 'memory',
    foxPun: "Fox-approved cuisine! 👨‍🍳",
    imageUrl: memory17Image,
  },
  {
    id: '18',
    content: "One day, I want to take you to Japan to see the fox village. Just imagine—hundreds of fluffy foxes, and you in the middle of them all!",
    type: 'future',
    foxPun: "It's going to be fox-tastic! ✨",
    imageUrl: memory18Image,
  },
  {
    id: '19',
    content: "Every moment with you feels like coming home to a warm, cozy den.",
    type: 'reason',
    foxPun: "Home is wherever you are, con heo! 💕",
    imageUrl: memory19Image
  },
  {
    id: '20',
    content: "Praying and manifesting that 2026 will be best in recent years",
    type: 'future',
    foxPun: "Mo phắc",
    imageUrl: memory20Image,
  },
  {
    id: '21',
    content: "This is why you are special, con heo",
    type: 'future',
    foxPun: "Having a home and seeing you everyday like this! 🏡",
    imageUrl: memory21Image,
  },
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
