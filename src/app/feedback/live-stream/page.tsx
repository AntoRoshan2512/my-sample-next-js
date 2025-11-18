"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const liveReviews = [
  { id: 1, rating: 5, text: "Amazing service!", customer: "John D.", order: "#123", items: "Pizza, Salad", reward: 50, status: "Addressed", sentiment: "positive", date: "2025-08-25", action: "Follow-up sent" },
  { id: 2, rating: 2, text: "Burger was cold.", customer: "Jane S.", order: "#124", items: "Burger", reward: 10, status: "Refunded", sentiment: "negative", date: "2025-08-26", action: "Refunded" },
  { id: 3, rating: 4, text: "Quick delivery.", customer: "Alex P.", order: "#125", items: "Pizza", reward: 20, status: "Follow-up sent", sentiment: "positive", date: "2025-08-27", action: "Addressed" },
];

export default function LiveFeedbackStreamPage() {
  const [starFilter, setStarFilter] = useState(0);
  const [sentimentFilter, setSentimentFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const filtered = liveReviews.filter(r =>
    (starFilter === 0 || r.rating === starFilter) &&
    (sentimentFilter === 'all' || r.sentiment === sentimentFilter) &&
    (statusFilter === 'all' || r.status === statusFilter)
  );
  return (
    <div className="min-h-screen w-full p-4 sm:p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Live Feedback Stream</h1>
      <div className="flex flex-wrap gap-4 items-center mb-4">
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
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="border rounded px-2 py-1 text-sm">
          <option value="all">All Statuses</option>
          <option value="Addressed">Addressed</option>
          <option value="Refunded">Refunded</option>
          <option value="Follow-up sent">Follow-up sent</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Rating</th>
              <th className="px-3 py-2">Review</th>
              <th className="px-3 py-2">Customer</th>
              <th className="px-3 py-2">Order</th>
              <th className="px-3 py-2">Items</th>
              <th className="px-3 py-2">Reward</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Action Taken</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={9} className="text-center py-4">No reviews found.</td></tr>
            ) : (
              filtered.map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="px-3 py-2">{row.date}</td>
                  <td className="px-3 py-2"><span className="flex items-center gap-1 text-yellow-500">{Array(row.rating).fill(0).map((_,i) => <FaStar key={i} />)}</span></td>
                  <td className="px-3 py-2">{row.text}</td>
                  <td className="px-3 py-2">{row.customer[0]}***</td>
                  <td className="px-3 py-2">{row.order}</td>
                  <td className="px-3 py-2">{row.items}</td>
                  <td className="px-3 py-2">{row.reward ? `$${row.reward}` : '-'}</td>
                  <td className="px-3 py-2">{row.status}</td>
                  <td className="px-3 py-2">{row.action}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-8 text-xs text-gray-500">
        <p>Stream updates in real-time. Click a review for more details or to take action.</p>
        <p>Filters: Stars, Sentiment, Status. Each entry shows anonymized customer, order, items, reward, and action taken.</p>
      </div>
    </div>
  );
}
