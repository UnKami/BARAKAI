import React from 'react';
import { SectionData } from './types';
import { 
  Hammer, 
  Dumbbell, 
  Users, 
  Sword, 
  ShieldAlert, 
  ChevronsUp, 
  BookOpen, 
  Scroll, 
  Sparkles, 
  Store, 
  BookCopy, 
  Coins 
} from 'lucide-react';

export const SECTIONS: SectionData[] = [
  {
    id: 'foundation',
    stepNumber: 1,
    headline: 'BUILD & PREPARE',
    subText: 'The Orbiting Base',
    description: 'Manage a vibrant Floating Island orbiting the massive Tower. Play as the Master, building infrastructure and managing resources to sustain your base.',
    visualSrc: 'https://i.ibb.co/xqQh3c73/Generated-Image-December-08-2025-11-58-PM.jpg',
    visualAlt: 'Floating Island Base',
    colorTheme: 'fuchsia',
    features: [
      {
        title: 'Manage',
        description: 'Build infrastructure and manage resources to sustain your base.',
        icon: <Hammer className="w-5 h-5" />
      },
      {
        title: 'Train',
        description: 'Train your hero from a blank slate to unlock their combat potential.',
        icon: <Dumbbell className="w-5 h-5" />
      },
      {
        title: 'Support',
        description: 'Summon specialized Agents to manage the island and equip your MC.',
        icon: <Users className="w-5 h-5" />
      }
    ]
  },
  {
    id: 'climb',
    stepNumber: 2,
    headline: 'CONQUER THE TOWER',
    subText: 'Active Tactical Combat',
    description: 'Engage in tactical combat inside the Tower. Direct your agents against glitchy, surreal monsters representing the Tower\'s immune system.',
    visualSrc: 'https://i.ibb.co/mdXwMf3/Generated-Image-December-09-2025-1-02-AM.jpg',
    visualAlt: 'Tactical Combat in Tower',
    colorTheme: 'violet',
    features: [
      {
        title: 'Fight',
        description: 'Direct tactics as you fight floor by floor up the infinite structure.',
        icon: <Sword className="w-5 h-5" />
      },
      {
        title: 'Rescue',
        description: 'Defeat "Digestive Parasites" to rescue the raw data of lost memories.',
        icon: <ShieldAlert className="w-5 h-5" />
      },
      {
        title: 'Progress',
        description: 'Every floor cleared brings you one step closer to the truth.',
        icon: <ChevronsUp className="w-5 h-5" />
      }
    ]
  },
  {
    id: 'chronicle',
    stepNumber: 3,
    headline: 'UNLOCK THE ORIGIN',
    subText: 'Procedural Narrative Generation',
    description: 'Watch as rescued raw data transforms into a beautifully inked comic panel. Your gameplay literally writes the story.',
    visualSrc: 'https://i.ibb.co/Kj07tNWk/Generated-Image-December-09-2025-12-27-AM.jpg',
    visualAlt: 'Manga Page Formation',
    colorTheme: 'purple',
    features: [
      {
        title: 'Reveal',
        description: 'Clearing floors generates a Living Manga in real-time.',
        icon: <BookOpen className="w-5 h-5" />
      },
      {
        title: 'Deepen',
        description: 'Restore your hero\'s identity and uncover a deep, readable history.',
        icon: <Scroll className="w-5 h-5" />
      },
      {
        title: 'Evolve',
        description: 'Bond with the MC to unlock new power and potential.',
        icon: <Sparkles className="w-5 h-5" />
      }
    ]
  },
  {
    id: 'marketplace',
    stepNumber: 4,
    headline: 'TRADE & MONETIZE',
    subText: 'The Play-to-Asset Economy',
    description: 'A sophisticated Digital Marketplace where you can trade individual gear or bundle your Character, Base, and Manga into a single high-value asset.',
    visualSrc: 'https://i.ibb.co/27Sgy4Xy/Generated-Image-December-09-2025-12-40-AM.jpg',
    visualAlt: 'Digital Marketplace UI',
    colorTheme: 'pink',
    features: [
      {
        title: 'Trade',
        description: 'Sell individual agents/gear or bundle everything as a Liquid IP Asset.',
        icon: <Store className="w-5 h-5" />
      },
      {
        title: 'Rent',
        description: 'List your personal Manga in the public library for others to read.',
        icon: <BookCopy className="w-5 h-5" />
      },
      {
        title: 'Earn',
        description: 'Collect fees and increase value through the utility of your assets.',
        icon: <Coins className="w-5 h-5" />
      }
    ]
  }
];