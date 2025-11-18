import React from "react";

export default function ProductCategoryAnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#fafbfc] py-8 px-2 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Product & Category Analytics</h1>
          <p className="text-lg text-gray-500">Analyze your top products, category performance, and inventory health.</p>
        </div>

        {/* Top-Selling Products Table/Bar Chart */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="font-semibold text-lg mb-4">Top-Selling Products</h2>
          <div className="h-48 w-full bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-lg flex items-center justify-center text-yellow-700 mb-4">
            [Horizontal Bar Chart]
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="px-2 py-2 text-left">Product Name</th>
                  <th className="px-2 py-2 text-left">Units Sold</th>
                  <th className="px-2 py-2 text-left">Revenue</th>
                  <th className="px-2 py-2 text-left">Margin %</th>
                  <th className="px-2 py-2 text-left">Stock Left</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-2 py-2">T-Shirt Classic</td>
                  <td className="px-2 py-2">1,200</td>
                  <td className="px-2 py-2">$24,000</td>
                  <td className="px-2 py-2 text-green-600">32%</td>
                  <td className="px-2 py-2">150</td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-2">Leather Wallet</td>
                  <td className="px-2 py-2">800</td>
                  <td className="px-2 py-2">$16,000</td>
                  <td className="px-2 py-2 text-green-600">40%</td>
                  <td className="px-2 py-2">60</td>
                </tr>
                {/* ...more rows... */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Category Contribution Donut Chart */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="font-semibold text-lg mb-4">Category Contribution</h2>
          <div className="h-56 w-full bg-gradient-to-br from-purple-100 to-purple-300 rounded-lg flex items-center justify-center text-purple-700">
            [Donut Chart: Clothing 40%, Accessories 20%, Footwear 15%, ...]
          </div>
        </div>

        {/* Profitability Matrix */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="font-semibold text-lg mb-4">Profitability Matrix</h2>
          <div className="h-64 w-full bg-gradient-to-br from-green-100 to-green-300 rounded-lg flex items-center justify-center text-green-700">
            [Scatter/Quadrant: High Volume vs High Margin]
          </div>
          <p className="text-gray-500 text-sm mt-2">Stars = High Volume & High Margin. Dogs = Low Volume & Low Margin.</p>
        </div>

        {/* Inventory Health Section */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="font-semibold text-lg mb-4">Inventory Health</h2>
          {/* Low Stock Alerts */}
          <div className="mb-6">
            <h3 className="font-semibold text-md mb-2 text-red-600">Low Stock Alerts</h3>
            <ul className="list-disc pl-6 text-sm text-gray-700">
              <li>Product A has 12 units left – sells out in 3 days.</li>
              <li>Leather Wallet has 8 units left – sells out in 2 days.</li>
              {/* ...more alerts... */}
            </ul>
          </div>
          {/* Stock Turnover Rate */}
          <div className="mb-6">
            <h3 className="font-semibold text-md mb-2 text-blue-600">Stock Turnover Rate</h3>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-blue-700">4.2x</span>
              <span className="text-gray-500 text-sm">Inventory is selling through every 2.8 months.</span>
            </div>
          </div>
          {/* Aging Inventory */}
          <div className="mb-4">
            <h3 className="font-semibold text-md mb-2 text-gray-700">Aging Inventory</h3>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-yellow-700">18%</span>
              <span className="text-gray-500 text-sm">of stock is older than 60 days</span>
              <span className="text-lg font-bold text-yellow-700">7%</span>
              <span className="text-gray-500 text-sm">of stock is older than 90 days</span>
            </div>
          </div>
        </div>

        {/* Slow Movers / Dead Stock Table with CTAs */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="font-semibold text-lg mb-4">Slow Movers / Dead Stock</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="px-2 py-2 text-left">Product Name</th>
                  <th className="px-2 py-2 text-left">Days Since Last Sale</th>
                  <th className="px-2 py-2 text-left">Stock Left</th>
                  <th className="px-2 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-2 py-2">Canvas Belt</td>
                  <td className="px-2 py-2 text-red-600">45</td>
                  <td className="px-2 py-2">30</td>
                  <td className="px-2 py-2 flex gap-2">
                    <button className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-xs">Reorder</button>
                    <button className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 text-xs">Discount</button>
                    <button className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 text-xs">Bundle</button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-2">Winter Scarf</td>
                  <td className="px-2 py-2 text-red-600">38</td>
                  <td className="px-2 py-2">12</td>
                  <td className="px-2 py-2 flex gap-2">
                    <button className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-xs">Reorder</button>
                    <button className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 text-xs">Discount</button>
                    <button className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 text-xs">Bundle</button>
                  </td>
                </tr>
                {/* ...more rows... */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
