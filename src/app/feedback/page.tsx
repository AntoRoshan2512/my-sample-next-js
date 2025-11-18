"use client";
import { useState } from "react";
import { FaStar, FaSmile, FaMeh, FaFrown, FaArrowUp, FaArrowDown, FaGift, FaChartLine, FaUserTie, FaSyncAlt, FaCloud, FaBolt, FaCogs } from "react-icons/fa";

// --- Mock Data ---
const kpi = {
  avgRating: 4.3,
  reviewsTied: 87,
  sentiment: { positive: 68, neutral: 22, negative: 10 },
  rewardsRedeemed: { count: 120, value: 2400 },
  revenueInfluenced: 18000,
  revenueUplift: 8000,
  incentiveCost: 1000,
  roi: 7,
  benchmark: 8,
};
const sentimentTrend = [4.1, 4.2, 4.0, 4.3, 4.4, 4.2, 4.3];
const keywords = ["delivery", "taste", "service", "packaging", "speed", "quality", "staff", "price"];
const productTable = [
  { product: "Pizza", avg: 4.7, volume: 120, pos: 80, neu: 15, neg: 5, revenue: 5000 },
  { product: "Burger", avg: 3.9, volume: 90, pos: 50, neu: 30, neg: 10, revenue: 2000 },
  { product: "Salad", avg: 4.5, volume: 60, pos: 45, neu: 10, neg: 5, revenue: 1500 },
];
const staffTable = [
  { staff: "Alice", avg: 4.8, loc: "Downtown", time: "Lunch" },
  { staff: "Bob", avg: 3.7, loc: "Uptown", time: "Dinner" },
];
const correlation = [
  { rating: 2, repeat: 10 },
  { rating: 3, repeat: 20 },
  { rating: 4, repeat: 40 },
  { rating: 5, repeat: 70 },
];
const liveReviews = [
  { id: 1, rating: 5, text: "Amazing service!", customer: "John D.", order: "#123", items: "Pizza, Salad", reward: 50, status: "Addressed", sentiment: "positive" },
  { id: 2, rating: 2, text: "Burger was cold.", customer: "Jane S.", order: "#124", items: "Burger", reward: 10, status: "Refunded", sentiment: "negative" },
  { id: 3, rating: 4, text: "Quick delivery.", customer: "Alex P.", order: "#125", items: "Pizza", reward: 20, status: "Follow-up sent", sentiment: "positive" },
];
const autoStats = { handled: 80, avgTime: "2m", churn: 12 };

// --- Components ---
function KPISection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded shadow p-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-lg font-semibold"><FaStar className="text-yellow-400" />Avg Rating <span className="ml-auto text-2xl font-bold">{kpi.avgRating}</span></div>
        <div className="text-xs text-gray-500">Period: Last 30 days</div>
      </div>
      <div className="bg-white rounded shadow p-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-lg font-semibold"><FaGift className="text-pink-500" />Reviews Tied to Orders <span className="ml-auto text-2xl font-bold">{kpi.reviewsTied}%</span></div>
        <div className="text-xs text-gray-500">% of reviews linked to real orders</div>
      </div>
      <div className="bg-white rounded shadow p-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-lg font-semibold"><FaSmile className="text-green-500" />Sentiment <span className="ml-auto flex gap-2">
          <span className="flex items-center"><FaSmile className="text-green-500" /> {kpi.sentiment.positive}%</span>
          <span className="flex items-center"><FaMeh className="text-yellow-500" /> {kpi.sentiment.neutral}%</span>
          <span className="flex items-center"><FaFrown className="text-red-500" /> {kpi.sentiment.negative}%</span>
        </span></div>
        <div className="text-xs text-gray-500">Positive / Neutral / Negative</div>
      </div>
    </div>
  );
}

function WidgetSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded shadow p-6">
        <div className="font-semibold mb-2 flex items-center gap-2"><FaChartLine className="text-blue-500" />Sentiment Trend</div>
        <div className="h-24 flex items-end gap-1">
          {sentimentTrend.map((v, i) => (
            <div key={i} className="bg-blue-200 w-4 rounded-t" style={{ height: `${v * 20}px` }} title={`Week ${i + 1}: ${v}`}></div>
          ))}
        </div>
        <div className="text-xs text-gray-500 mt-2">Mood shift week to week</div>
      </div>
      <div className="bg-white rounded shadow p-6">
        <div className="font-semibold mb-2 flex items-center gap-2"><FaCloud className="text-purple-500" />Top Keywords</div>
        <div className="flex flex-wrap gap-2">
          {keywords.map((k, i) => (
            <span key={i} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">{k}</span>
          ))}
        </div>
        <div className="text-xs text-gray-500 mt-2">Themes from reviews</div>
      </div>
      <div className="bg-white rounded shadow p-6">
        <div className="font-semibold mb-2 flex items-center gap-2"><FaBolt className="text-yellow-500" />Impact Meter</div>
        <div className="text-3xl font-bold text-yellow-600">${kpi.revenueInfluenced.toLocaleString()}</div>
        <div className="text-xs text-gray-500 mt-2">Estimated revenue gain from reviews</div>
      </div>
    </div>
  );
}

function ROISection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-green-50 rounded shadow p-6">
        <div className="font-semibold mb-1">Revenue from Positive Reviews</div>
        <div className="text-2xl font-bold text-green-700">${kpi.revenueUplift.toLocaleString()}</div>
      </div>
      <div className="bg-blue-50 rounded shadow p-6">
        <div className="font-semibold mb-1">Cost of Incentives</div>
        <div className="text-2xl font-bold text-blue-700">${kpi.incentiveCost.toLocaleString()}</div>
      </div>
      <div className="bg-yellow-50 rounded shadow p-6">
        <div className="font-semibold mb-1">ROI</div>
        <div className="text-2xl font-bold text-yellow-700">{kpi.roi}:1</div>
        <div className="text-xs text-gray-500 mt-1">For every $1 in review rewards → you gained ${kpi.benchmark} in revenue.</div>
      </div>
    </div>
  );
}

function ProductSentimentTable() {
  return (
    <div className="bg-white rounded shadow p-6 mb-8">
      <div className="font-semibold mb-2">Product/Category Sentiment</div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2">Product</th>
              <th className="px-3 py-2">Avg Rating</th>
              <th className="px-3 py-2">Review Volume</th>
              <th className="px-3 py-2">Positive %</th>
              <th className="px-3 py-2">Neutral %</th>
              <th className="px-3 py-2">Negative %</th>
              <th className="px-3 py-2">Revenue Impact</th>
            </tr>
          </thead>
          <tbody>
            {productTable.map((row, i) => (
              <tr key={i} className="border-b">
                <td className="px-3 py-2 font-medium">{row.product}</td>
                <td className="px-3 py-2">{row.avg}</td>
                <td className="px-3 py-2">{row.volume}</td>
                <td className="px-3 py-2 text-green-600">{row.pos}%</td>
                <td className="px-3 py-2 text-yellow-600">{row.neu}%</td>
                <td className="px-3 py-2 text-red-600">{row.neg}%</td>
                <td className="px-3 py-2">${row.revenue.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StaffInsightsTable() {
  return (
    <div className="bg-white rounded shadow p-6 mb-8">
      <div className="font-semibold mb-2">Staff/Service Insights</div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2">Staff</th>
              <th className="px-3 py-2">Avg Rating</th>
              <th className="px-3 py-2">Location</th>
              <th className="px-3 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {staffTable.map((row, i) => (
              <tr key={i} className="border-b">
                <td className="px-3 py-2 font-medium">{row.staff}</td>
                <td className="px-3 py-2">{row.avg}</td>
                <td className="px-3 py-2">{row.loc}</td>
                <td className="px-3 py-2">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CorrelationPanel() {
  return (
    <div className="bg-white rounded shadow p-6 mb-8">
      <div className="font-semibold mb-2 flex items-center gap-2"><FaSyncAlt className="text-blue-400" />Rating vs Repeat Purchase Rate</div>
      <div className="flex gap-4 items-end h-24">
        {correlation.map((row, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-blue-300 w-6 rounded-t" style={{ height: `${row.repeat}px` }}></div>
            <div className="text-xs mt-1">⭐{row.rating}</div>
            <div className="text-xs text-blue-700">{row.repeat}%</div>
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-2">Happier customers = higher CLV</div>
    </div>
  );
}

function LiveFeedbackStream() {
  const [starFilter, setStarFilter] = useState(0);
  const [sentimentFilter, setSentimentFilter] = useState('all');
  const filtered = liveReviews.filter(r =>
    (starFilter === 0 || r.rating === starFilter) &&
    (sentimentFilter === 'all' || r.sentiment === sentimentFilter)
  );
  return (
    <div className="bg-white rounded shadow p-6 mb-8">
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <div className="font-semibold">Live Feedback Stream</div>
        <select value={starFilter} onChange={e => setStarFilter(Number(e.target.value))} className="border rounded px-2 py-1 text-sm">
          <option value={0}>All Stars</option>
          {[1,2,3,4,5].map(s => <option key={s} value={s}>{s} Stars</option>)}
        </select>
        <select value={sentimentFilter} onChange={e => setSentimentFilter(e.target.value)} className="border rounded px-2 py-1 text-sm">
          <option value="all">All Sentiments</option>
          <option value="positive">Positive</option>
          <option value="neutral">Neutral</option>
          <option value="negative">Negative</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2">Rating</th>
              <th className="px-3 py-2">Review</th>
              <th className="px-3 py-2">Customer</th>
              <th className="px-3 py-2">Order</th>
              <th className="px-3 py-2">Items</th>
              <th className="px-3 py-2">Reward</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={7} className="text-center py-4">No reviews found.</td></tr>
            ) : (
              filtered.map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="px-3 py-2"><span className="flex items-center gap-1 text-yellow-500">{Array(row.rating).fill(0).map((_,i) => <FaStar key={i} />)}</span></td>
                  <td className="px-3 py-2">{row.text}</td>
                  <td className="px-3 py-2">{row.customer[0]}***</td>
                  <td className="px-3 py-2">{row.order}</td>
                  <td className="px-3 py-2">{row.items}</td>
                  <td className="px-3 py-2">{row.reward ? `$${row.reward}` : '-'}</td>
                  <td className="px-3 py-2">{row.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ActionEngine() {
  return (
    <div className="bg-white rounded shadow p-6 mb-8">
      <div className="font-semibold mb-2 flex items-center gap-2"><FaCogs className="text-gray-500" />Feedback → Action Engine</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <div className="font-semibold mb-1">Quick Actions per Review</div>
          <ul className="list-disc ml-6 text-sm">
            <li>Grant Bonus Points</li>
            <li>Send Apology Coupon</li>
            <li>Escalate to Support</li>
            <li>Mark as Addressed</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-1">Automation Rules</div>
          <ul className="list-disc ml-6 text-sm">
            <li>If ⭐ ≤ 2 → auto-give 10% off next order</li>
            <li>If ⭐ = 5 → auto-grant loyalty points</li>
          </ul>
        </div>
      </div>
      <div className="font-semibold mb-1">Effectiveness Stats</div>
      <div className="flex gap-8 text-sm">
        <div>Auto-handled: <span className="font-bold">{autoStats.handled}</span></div>
        <div>Avg Response Time: <span className="font-bold">{autoStats.avgTime}</span></div>
        <div>Churn Reduction: <span className="font-bold">{autoStats.churn}%</span></div>
      </div>
    </div>
  );
}

export default function FeedbackDashboard() {
  return (
    <div className="min-h-screen w-full p-4 sm:p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Feedback Dashboard</h1>
      <KPISection />
      <WidgetSection />
      <ROISection />
      <ProductSentimentTable />
      <StaffInsightsTable />
      <CorrelationPanel />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <a href="/feedback/live-stream" className="block bg-white rounded shadow p-6 hover:bg-blue-50 transition">
          <div className="text-lg font-semibold mb-2">Live Feedback Stream</div>
          <div className="text-gray-600 mb-2">See real-time reviews, filter by sentiment, stars, and status. Take action on feedback as it arrives.</div>
          <div className="text-blue-600 text-sm font-medium">Go to Live Stream →</div>
        </a>
        <a href="/feedback/action-engine" className="block bg-white rounded shadow p-6 hover:bg-green-50 transition">
          <div className="text-lg font-semibold mb-2">Feedback → Action Engine</div>
          <div className="text-gray-600 mb-2">Configure automation rules, quick actions, and track effectiveness of your feedback response process.</div>
          <div className="text-green-600 text-sm font-medium">Go to Action Engine →</div>
        </a>
      </div>
    </div>
  );
}
