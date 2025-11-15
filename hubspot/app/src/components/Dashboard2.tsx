import {
  Home, Bookmark, Users, BadgeDollarSign, ShoppingBag, Workflow,
  ChartNoAxesColumnDecreasing, Database, CardSim, TrendingUp, Mail,
  Settings, HelpCircle, ChevronRight, Search, Plus, Phone, Calendar, Bell
} from 'lucide-react';

export default function HubSpotDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">

      {/* Sidebar */}
      <aside className="w-16 bg-[#47062a] flex flex-col items-center py-4 space-y-4 text-gray-300">

        {/* Logo */}
        <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
            <path d="M18.5 8.5c0-.83-.67-1.5-1.5-1.5h-1V5c0-.83-.67-1.5-1.5-1.5S13 4.17 13 5v2h-2c-.83 0-1.5.67-1.5 1.5v2h-2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h2v2c0 .83.67 1.5 1.5 1.5h2v2c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-2h2c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-2v-2h1c.83 0 1.5-.67 1.5-1.5z" />
          </svg>
        </div>

        {/* Nav Icons */}
        <nav className="ml-9 flex flex-col w-full space-y-6 pt-4">
          <button><Home className="w-5 h-5" /></button>
          <button><Bookmark className="w-5 h-5" /></button>
          <button><Users className="w-5 h-5" /></button>
          <button><TrendingUp className="w-5 h-5" /></button>
          <button><Mail className="w-5 h-5" /></button>
          <button><ShoppingBag className="w-5 h-5" /></button>
          <button><BadgeDollarSign className="w-5 h-5" /></button>
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

      {/* MAIN AREA (Navbar stays full width, content centered ONLY inside) */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className="bg-[#47062a] text-white px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search HubSpot"
                className="w-full bg-[#2d3e50] text-white pl-10 pr-4 py-2 rounded"
              />
            </div>
            <button className="bg-[#2d3e50] p-2 rounded">
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

        {/* BODY (CENTERED) */}
        <main className="flex-1 overflow-y-auto flex justify-center">
          <div className="w-full max-w-[1200px] p-8">

            {/* Greeting */}
            <div className="flex justify-between mb-6">
              <div>
                <p className="text-sm text-gray-500">Saturday, November 15, 2025</p>
                <h1 className="text-3xl font-semibold">Good evening, Rakesh</h1>
                <p className="text-gray-600 mt-2">
                  <span className="font-semibold">Today</span> — your schedule is looking clear.
                </p>
              </div>
              <button className="text-gray-600">⚙ Customize</button>
            </div>

            {/* Get Started */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Get started with HubSpot</h2>
                <div className="text-sm text-gray-500">
                  <span className="text-2xl font-semibold text-gray-800">0%</span>
                  <span className="ml-2">0 of 18 tasks completed</span>
                </div>
              </div>

              <a className="text-sm text-gray-600 hover:underline">🎯 View your plan ↗</a>

              {/* Cards Row */}
              <div className="flex space-x-4 overflow-x-auto pt-4 pb-2">

                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-sm border p-6 min-w-[320px]">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-3">
                    Set Up The Basics
                  </span>

                  <p className="text-xs text-gray-500 mb-2">About 2 minutes</p>

                  <h3 className="text-lg font-semibold mb-2">Add your existing contacts</h3>

                  <p className="text-sm text-gray-600 mb-6">
                    Organize and manage valuable leads in your contacts database.
                  </p>

                  <div className="flex space-x-3">
                    <button className="bg-gray-900 text-white px-4 py-2 rounded text-sm">Add contacts</button>
                    <button className="text-gray-600 px-4 py-2 text-sm">Skip</button>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-sm border p-6 min-w-[320px]">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-3">
                    Set Up The Basics
                  </span>

                  <p className="text-xs text-gray-500 mb-2">About 2 minutes</p>

                  <h3 className="text-lg font-semibold mb-2">Create a new contact</h3>

                  <p className="text-sm text-gray-600 mb-6">
                    See all their details and interactions you've had.
                  </p>

                  <div className="flex space-x-3">
                    <button className="border border-gray-900 px-4 py-2 rounded text-sm">Create contact</button>
                    <button className="text-gray-600 px-4 py-2 text-sm">Skip</button>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-sm border p-6 min-w-[320px]">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-3">
                    Attract And Capture Leads
                  </span>

                  <p className="text-xs text-gray-500 mb-2">About 7 minutes</p>

                  <h3 className="text-lg font-semibold mb-2">Create a form</h3>

                  <p className="text-sm text-gray-600 mb-6">
                    Capture leads on your site and send them into HubSpot.
                  </p>

                  <div className="flex space-x-3">
                    <button className="border border-gray-900 px-4 py-2 rounded text-sm">Create form ↗</button>
                    <button className="text-gray-600 px-4 py-2 text-sm">Skip</button>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <span className="text-sm text-gray-500">1/6</span>
              </div>

              <a className="text-sm text-gray-600 hover:underline mt-2 inline-block">See all tasks</a>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent activity</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Card A */}
                <div className="bg-white border rounded-lg p-5">
                  <div className="flex justify-between mb-3">
                    <span className="text-xs text-gray-500">Segment (List)</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Active</span>
                  </div>
                  <h3 className="font-semibold mb-1">All customers</h3>
                  <p className="text-xs text-gray-500">You created recently</p>
                </div>

                {/* Card B */}
                <div className="bg-white border rounded-lg p-5">
                  <div className="flex justify-between mb-3">
                    <span className="text-xs text-gray-500">Segment (List)</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Active</span>
                  </div>
                  <h3 className="font-semibold mb-1">Newsletter subscribers</h3>
                  <p className="text-xs text-gray-500">You created recently</p>
                </div>

                {/* Card C */}
                <div className="bg-white border rounded-lg p-5">
                  <div className="flex justify-between mb-3">
                    <span className="text-xs text-gray-500">Form</span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Updated</span>
                  </div>
                  <h3 className="font-semibold mb-1">Contact form</h3>
                  <p className="text-xs text-gray-500">Updated 5 hours ago</p>
                </div>

              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
