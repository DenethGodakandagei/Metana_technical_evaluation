'use client';
import React from 'react';
import { ArrowRight, MoreVertical, ExternalLink, Play, Star, LucideIcon } from 'lucide-react';

// --- TypeScript Interfaces for Data Structure ---

/** Defines the structure for a badge displayed on the card preview. */
interface Badge {
  text: string;
  color: string;
  // Use LucideIcon type for the icon component, or make it optional
  icon?: LucideIcon;
  iconColor?: string;
  position?: 'top-right';
}

/** Defines the structure for the card's visual preview. */
interface Preview {
  type: 'document' | 'webpage' | 'video' | 'board';
  style?: string;
}

/** Defines the structure for a single recent item record. */
interface RecentItem {
  type: string;
  title: string;
  owner: string;
  date: string;
  badges: Badge[];
  preview: Preview;
}

/** Defines the props for the RecentCard component. */
interface RecentCardProps {
  item: RecentItem;
}

// --- Placeholder Data (Typed) ---
const recentsData: RecentItem[] = [
  {
    type: 'Document',
    title: 'Document',
    owner: 'Mark',
    date: 'May 14, 2025',
    badges: [{ text: 'Open in', icon: ExternalLink, color: 'text-blue-600 bg-blue-100' }],
    preview: { type: 'document' },
  },
  {
    type: 'Web Pages',
    title: 'Roches Naturelles et Savons Organiques',
    owner: 'Mark',
    date: 'May 14, 2025',
    badges: [{ text: 'Updating...', color: 'text-green-800 bg-green-200' }],
    preview: { type: 'webpage', style: 'bg-gray-800 text-white p-4' },
  },
  {
    type: '60 Second Cut',
    title: '60 Second Cut',
    owner: 'Caroline',
    date: 'May 14, 2025',
    badges: [{ text: 'Needs Review', icon: Star, color: 'text-yellow-800 bg-yellow-100' }],
    preview: { type: 'video' },
  },
  {
    type: 'Web Pages',
    title: 'Automate Your Design Process For Creative Freedom.',
    owner: 'Mark',
    date: 'May 14, 2025',
    badges: [
      { text: 'Needs Review', icon: Star, color: 'text-yellow-800 bg-yellow-100', iconColor: 'text-yellow-500' },
      { text: 'Live', color: 'text-purple-800 bg-purple-100', position: 'top-right' },
    ],
    preview: { type: 'board' },
  },
];

/**
 * Reusable Card Component for a Recent Item
 * @param {RecentCardProps} props - The props containing the recent item data.
 */
const RecentCard: React.FC<RecentCardProps> = ({ item }) => {
  const { type, title, owner, date, badges, preview } = item;

  // Render the specific preview placeholder based on type
  const renderPreview = () => {
    switch (preview.type) {
      case 'document':
        // Document stack preview
        // Note: The badge is found here to place the "Open in" badge correctly
        const openInBadge = badges.find((b: Badge) => b.text === 'Open in');

        return (
          <div className="relative h-full w-full flex items-center justify-center p-6">
            {/* Simple document stack effect */}
            <div className="absolute inset-0 m-4 bg-white rounded-lg shadow-xl rotate-[-5deg] scale-[0.9] border border-gray-100"></div>
            <div className="relative h-full w-full bg-white rounded-xl shadow-2xl border border-gray-200 p-8 flex flex-col justify-start overflow-hidden">
              <p className="text-sm font-semibold text-gray-800 mb-2">Creative Strategy for Copy...</p>
              <div className="space-y-1 mt-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`h-1 ${i % 2 === 0 ? 'w-full' : 'w-3/4'} bg-gray-200 rounded-full`}></div>
                ))}
              </div>
            </div>
            {openInBadge && openInBadge.icon && (
              <div className="absolute top-4 left-4 flex items-center space-x-1 px-2 py-1 bg-white rounded-full text-xs font-medium shadow-md">
                <openInBadge.icon className="w-3 h-3 text-gray-600" />
                <span>{openInBadge.text}</span>
              </div>
            )}
          </div>
        );

      case 'webpage':
        // Dark webpage preview
        return (
          <div className={`${preview.style} h-full rounded-xl overflow-hidden relative`}>
            {/* Simple browser frame simulation */}
            <div className="flex space-x-1 p-2 bg-gray-900 border-b border-gray-700">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Rocalté</h3>
              <p className="text-sm text-gray-400 mt-1">Roches Naturelles et Savons Organiques</p>
              <div className="mt-4 flex justify-center">
                {/* Placeholder for the soap image */}
                <div className="w-24 h-24 bg-amber-700 rounded-lg shadow-xl"></div>
              </div>
            </div>
          </div>
        );

      case 'video':
        // Video thumbnail preview
        return (
          <div className="h-full w-full flex items-center justify-center bg-gray-700 rounded-xl relative overflow-hidden">
            {/* Placeholder for the person in dark lighting */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://placehold.co/600x400/333333/ffffff?text=Video+Scene)' }}></div>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative p-3 rounded-full bg-white/90 hover:bg-white transition-colors cursor-pointer shadow-lg">
              <Play className="w-6 h-6 fill-gray-900 text-gray-900" />
            </div>
          </div>
        );

      case 'board':
        // Canvas/Board preview (Miro/Figma style)
        return (
          <div className="h-full w-full flex items-start p-4 bg-white rounded-xl relative overflow-hidden">
            {/* Colorful board elements */}
            <div className="absolute top-8 left-8 w-20 h-20 bg-green-300 rounded-md rotate-[-10deg] shadow-lg"></div>
            <div className="absolute top-1/4 right-8 w-16 h-16 bg-yellow-300 rounded-full rotate-[15deg] shadow-lg"></div>
            <div className="absolute bottom-8 left-1/4 w-32 h-10 bg-blue-300 rounded-md shadow-lg"></div>
            <p className="relative text-xs font-semibold text-gray-800 z-10 p-2">Automate Your Design Process...</p>
          </div>
        );

      default:
        // Fallback for an unknown preview type
        return <div className="h-full bg-gray-100 rounded-xl"></div>;
    }
  };

  // --- Type-safe Badge Filtering (Resolves the 'b implicitly has an any type' error) ---
  const topRightBadge = badges.find((b: Badge) => b.position === 'top-right');
  const otherBadges = badges.filter((b: Badge) => b.position !== 'top-right' && b.text !== 'Open in'); // Exclude 'Open in' since it's handled in the document preview

  return (
    <div className="flex flex-col rounded-xl  duration-300 bg-white ">
      {/* Card Preview Area */}
      <div className="relative h-48 md:h-56 overflow-hidden p-2">
        <div className="rounded-xl h-full relative">
          {renderPreview()}
        </div>

        {/* Badges Overlay (excluding top-right and document-specific 'Open in') */}
        {otherBadges.map((badge: Badge, index: number) => {
          // Check if the icon exists before accessing it
          const IconComponent = badge.icon;
          return (
            <div
              key={index}
              className={`absolute top-4 right-4 flex items-center space-x-1 px-3 py-1 text-xs font-semibold rounded-full ${badge.color}`}
            >
              {IconComponent && <IconComponent className={`w-3 h-3 ${badge.iconColor || badge.color.split(' ')[0]}`} />}
              <span>{badge.text}</span>
            </div>
          );
        })}

        {/* Top-Right Badge (Separate positioning for better control) */}
        {topRightBadge && (
          <div
            className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-full ${topRightBadge.color} shadow-md`}
          >
            {topRightBadge.text}
          </div>
        )}

      </div>

      {/* Card Footer Content */}
      <div className="p-4 pt-3 flex flex-col">
        {/* The item type line (e.g., 'Web Pages') */}
        <div className="text-lg font-semibold text-gray-900 truncate" title={type}>{type}</div>
        
        {/* Owner, Date, and More options button */}
        <div className="flex items-center justify-between  border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500 space-x-2">
            <span className="font-medium text-gray-600">{owner}</span>
            <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
            <span>{date}</span>
          </div>
          <button
            aria-label="More options"
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={() => console.log('Options clicked for:', title)}
          >
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Main Application Component (Recents Section)
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Recents</h2>
          <a
            href="#"
            className="flex items-center space-x-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            <span>See in projects</span>
            <ArrowRight className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" />
          </a>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentsData.map((item, index) => (
            <RecentCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;