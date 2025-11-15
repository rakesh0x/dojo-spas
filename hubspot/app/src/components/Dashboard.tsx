import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* BODY (CENTERED) */}
        <main className="flex-1 overflow-y-auto flex justify-center">
          <div className="w-full max-w-[1200px] p-8">

            {/* Greeting */}
            <div className="flex justify-between mb-6">
              <div>
                <p className="text-sm font-bold mb-3">Saturday, November 15, 2025</p>
                <h1 className="text-4xl font-bold">Good evening, Rakesh</h1>
                <p className="text-2xl mt-3">
                  <span className="font-bold">Today</span> — your schedule is looking clear.
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
