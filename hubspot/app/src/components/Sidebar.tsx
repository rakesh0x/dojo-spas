import React, { useState } from 'react';
import {
  Home, Bookmark, Users, BadgeDollarSign, ShoppingBag, Workflow,
  ChartNoAxesColumnDecreasing, Database, CardSim, TrendingUp, Mail,
  Settings, HelpCircle, ChevronRight
} from 'lucide-react';

export default function Sidebar() {
  const [isSalesDropdownOpen, setIsSalesDropdownOpen] = useState(false);

  return (
    <aside className="w-16 bg-[#47062a] flex flex-col items-center py-4 space-y-4 text-gray-300">

      {/* Logo */}
      <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M18.5 8.5c0-.83-.67-1.5-1.5-1.5h-1V5c0-.83-.67-1.5-1.5-1.5S13 4.17 13 5v2h-2c-.83 0-1.5.67-1.5 1.5v2h-2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h2v2c0 .83.67 1.5 1.5 1.5h2v2c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-2h2c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-2v-2h1c.83 0 1.5-.67 1.5-1.5z" />
        </svg>
      </div>

      {/* Nav Icons */}
      <nav className="ml-9  flex flex-col w-full space-y-6 pt-4">
        <button><Home className="w-5 h-5" /></button>
        <button><Bookmark className="w-5 h-5" /></button>
        <button><Users className="w-5 h-5" /></button>
        <button><TrendingUp className="w-5 h-5" /></button>
        <button><Mail className="w-5 h-5" /></button>
        <button><ShoppingBag className="w-5 h-5" /></button>
        <div className="relative"
             onMouseEnter={() => setIsSalesDropdownOpen(true)}
             onMouseLeave={() => setIsSalesDropdownOpen(false)}>
          <button><BadgeDollarSign className="w-5 h-5" /></button>
          {isSalesDropdownOpen && (
            <div className="absolute left-full top-0 ml-4 w-60 bg-[#33475b] text-white rounded-lg shadow-lg py-2 z-10">
              <p className="px-4 py-2 text-xs uppercase font-bold">Sales</p>
              <a href="#" className="block px-4 py-2 hover:bg-[#2d3e50]">Sales Workspace</a>
              <a href="#" className="block px-4 py-2 hover:bg-[#2d3e50]">Documents</a>
              <a href="#" className="block px-4 py-2 hover:bg-[#2d3e50]">Meetings Scheduler</a>
              <a href="#" className="block px-4 py-2 hover:bg-[#2d3e50]">Sequences</a>
              <a href="#" className="block px-4 py-2 hover:bg-[#2d3e50]">Activity Feed</a>
              <a href="#" className="block px-4 py-2 hover:bg-[#2d3e50]">Forecast</a>
              <a href="#" className="block px-4 py-2 hover:bg-[#2d3e50]">Sales Analytics</a>
            </div>
          )}
        </div>
        <button><Workflow className="w-5 h-5" /></button>
        <button><ChartNoAxesColumnDecreasing className="w-5 h-5" /></button>
        <button><Database className="w-5 h-5" /></button>
        <button><CardSim className="w-5 h-5" /></button>
      </nav>

      {/* Bottom */}
      <nav className="flex flex-col space-y-6 mt-auto">
        <button><Settings className="w-5 h-5" /></button>
        <button><HelpCircle className="w-5 h-5" /></button>
        <button><ChevronRight className="w-5 h-5" /></button>
      </nav>
    </aside>
  );
}
