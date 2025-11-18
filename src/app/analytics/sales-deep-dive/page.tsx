"use client";

import React, { useState } from "react";

const periods = ["Daily", "Weekly", "Monthly"];

export default function SalesDeepDivePage() {
  const [period, setPeriod] = useState("Daily");

  return (
    <main className="min-h-screen bg-[#fafbfc] py-8 px-2 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Sales Deep Dive</h1>
          <p className="text-lg text-gray-500">Detailed breakdown of your store’s sales performance, trends, and payment insights.</p>
        </div>

        {/* Sales Over Time */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <h2 className="font-semibold text-lg">Sales Over Time</h2>
            <div className="flex gap-2">
              {periods.map((p) => (
                <button
                  key={p}
                  className={`px-4 py-1 rounded-full border text-sm font-medium transition ${period === p ? "bg-blue-600 text-white border-blue-600" : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50"}`}
                  onClick={() => setPeriod(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64 w-full bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg flex items-center justify-center text-blue-700">
            [Line/Area Chart: Revenue vs Transactions ({period})]
          </div>
        </div>

        {/* Sales Heatmap */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="font-semibold text-lg mb-2">Sales Heatmap (Day vs Hour)</h2>
          <p className="text-gray-500 text-sm mb-4">See when your store is busiest. Example: Tuesday & Friday evenings = peak sales hours.</p>
          <div className="h-64 w-full bg-gradient-to-br from-pink-100 to-pink-300 rounded-lg flex items-center justify-center text-pink-700">
            [Heatmap]
          </div>
        </div>

        {/* Sales by Location */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="font-semibold text-lg mb-2">Sales by Location</h2>
          <p className="text-gray-500 text-sm mb-4">Breakdown by store or region. Bar chart or map view for multi-store setups.</p>
          <div className="h-64 w-full bg-gradient-to-br from-green-100 to-green-300 rounded-lg flex items-center justify-center text-green-700">
            [Bar Chart / Map View]
          </div>
        </div>

        {/* Payment Method Split */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="font-semibold text-lg mb-2">Payment Method Split</h2>
          <p className="text-gray-500 text-sm mb-4">Cash vs Card vs UPI/Digital Wallet</p>
          <div className="h-64 w-full bg-gradient-to-br from-purple-100 to-purple-300 rounded-lg flex items-center justify-center text-purple-700">
            [Pie Chart]
          </div>
        </div>
      </div>
    </main>
  );
}
