import React from 'react';
import {
  Search, Plus, Phone, Calendar, Bell
} from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-[#47062a] text-white px-6 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4 flex-1">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search HubSpot"
            className="w-[530px] bg-[#2d3e50] text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-full border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>
        <button className="w-9 h-9 bg-[#2d3e50] rounded-full flex items-center justify-center border border-gray-500 text-gray-400">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <button>Upgrade</button>
        <Phone className="w-5 h-5" />
        <Calendar className="w-5 h-5" />
        <Bell className="w-5 h-5" />
        <button className="bg-orange-500 px-4 py-1 rounded">+ Assistant</button>

        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          M
        </div>
      </div>
    </header>
  );
}
