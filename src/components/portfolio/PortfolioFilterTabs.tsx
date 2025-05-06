
import React from 'react';

interface PortfolioFilterTabsProps {
  tabs: Array<{ id: string; label: string }>;
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const PortfolioFilterTabs = ({ tabs, activeTab, onTabChange }: PortfolioFilterTabsProps) => {
  return (
    <div className="mb-10 flex justify-center">
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === tab.id 
                ? 'bg-accent-blue text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFilterTabs;
