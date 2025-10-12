'use client';

import React from 'react';
import { ArrowRight, MoreVertical, Play, Clock } from 'lucide-react';

// --- Types ---
interface Badge {
  text: string;
  color: string;
}

interface RecentItem {
  title: string;
  type: 'image' | 'video';
  thumbnail: string; // image or video
  owner: string;
  date: string;
  badges: Badge[];
}

interface RecentCardProps {
  item: RecentItem;
}

// --- Sample Data ---
const recentsData: RecentItem[] = [
  {
    title: 'Creative Strategy Document',
    type: 'image',
    thumbnail: '/assets/recents/recent1.png',
    owner: 'Mark',
    date: 'May 14, 2025',
    badges: [{ text: 'Open', color: 'bg-blue-100 text-blue-700' }],
  },
  {
    title: 'Nature Web Design',
    type: 'image',
    thumbnail: '/assets/recents/recent2.png',
    owner: 'Liam',
    date: 'May 14, 2025',
    badges: [{ text: 'Updating', color: 'bg-green-100 text-green-700' }],
  },
  {
    title: '60 Second Cut',
    type: 'video',
    thumbnail: '/assets/recents/recent_vc.mp4',
    owner: 'Caroline',
    date: 'May 14, 2025',
    badges: [{ text: 'Needs Review', color: 'bg-yellow-100 text-yellow-700' }],
  },
  {
    title: 'Design Board Concept',
    type: 'image',
    thumbnail: '/assets/recents/recent3.png',
    owner: 'Mark',
    date: 'May 14, 2025',
    badges: [
      { text: 'Needs Review', color: 'bg-yellow-100 text-yellow-700' },
      { text: 'Live', color: 'bg-purple-100 text-purple-700' },
    ],
  },
];

// --- Card Component ---
const RecentCard: React.FC<RecentCardProps> = ({ item }) => {
  const { title, type, thumbnail, owner, date, badges } = item;

  return (
    <div className="bg-white dark:bg-[#1D1D1D] rounded-xl transition duration-300 overflow-hidden flex flex-col shadow-md hover:shadow-lg">
      {/* Preview */}
      <div className="relative w-full h-44 overflow-hidden group">
        {type === 'video' ? (
          <video
            src={thumbnail}
            className="object-cover w-full h-full rounded-2xl"
            muted
            autoPlay
            loop
            playsInline
          />
        ) : (
          <img
            src={thumbnail}
            alt={title}
            className="object-cover w-full h-full rounded-2xl"
          />
        )}

        {/* Play Button for Video */}
        {type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
            <div className="bg-white/20 rounded-full p-3 shadow-md">
              <Play className="w-6 h-6 text-gray-800" />
            </div>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className={`text-xs justify-between font-semibold px-2.5 py-1 rounded-full ${badge.color}`}
            >
              {badge.text}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4 flex flex-col gap-1">
        <h4 className="text-base font-semibold text-gray-800 dark:text-gray-100 truncate">
          {title}
        </h4>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <span>{owner}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{date}</span>
          </div>
          <MoreVertical className="w-5 h-5 text-gray-400 hover:text-gray-700 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

// --- Main Recents Component ---
const RecentsSection: React.FC = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-md flex items-center font-medium text-gray-700 dark:text-gray-200">
          <Clock className="w-4 h-4 mr-2" /> Recents
        </h3>
        <button className="text-sm flex items-center text-gray-500 dark:text-gray-300 hover:text-gray-700 transition">
          See all projects <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentsData.map((item, index) => (
          <RecentCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentsSection;
