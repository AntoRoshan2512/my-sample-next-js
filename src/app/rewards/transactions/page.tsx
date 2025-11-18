"use client";

// Transactions & Redemptions Page

import { useState } from 'react';


type TransactionRow = {
  id: string;
  customer: string;
  order: number;
  points: number;
  coupon: string;
  net: number;
  date: string;
  status: string;
};

type Filters = {
  type: string;
  segment: string;
  dateFrom: string;
  dateTo: string;
};

const mockData: TransactionRow[] = [
  { id: '#456', customer: 'John D.', order: 120, points: 100, coupon: 'SUMMER', net: 96, date: '2025-08-25', status: 'Completed' },
  { id: '#457', customer: 'Jane S.', order: 80, points: 0, coupon: 'VIP50', net: 30, date: '2025-08-26', status: 'Completed' },
  { id: '#458', customer: 'Alex P.', order: 200, points: 200, coupon: '', net: 0, date: '2025-08-27', status: 'Redeemed' },
  { id: '#459', customer: 'Sam T.', order: 150, points: 0, coupon: '', net: 150, date: '2025-08-28', status: 'Completed' },
];

const customerSegments = ['All', 'VIP', 'Regular', 'New'];

function filterData(data: TransactionRow[], filters: Filters) {
  return data.filter((row: TransactionRow) => {
    if (filters.type === 'loyalty' && row.points === 0) return false;
    if (filters.type === 'coupons' && !row.coupon) return false;
    if (filters.type === 'both' && row.points === 0 && !row.coupon) return false;
    if (filters.segment !== 'All' && row.customer.indexOf(filters.segment) === -1) return false;
    if (filters.dateFrom && new Date(row.date) < new Date(filters.dateFrom)) return false;
    if (filters.dateTo && new Date(row.date) > new Date(filters.dateTo)) return false;
    return true;
  });
}

export default function TransactionsRedemptions() {
  const [type, setType] = useState('both');
  const [segment, setSegment] = useState('All');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const filters = { type, segment, dateFrom, dateTo };
  const filtered = filterData(mockData, filters);

  // Attribution/ROI mock
  const totalLoyaltyRevenue = mockData.filter(r => r.points > 0).reduce((sum, r) => sum + r.net, 0);
  const totalCouponDiscount = mockData.filter(r => r.coupon).reduce((sum, r) => sum + (r.order - r.net), 0);
  const totalCouponRevenue = mockData.filter(r => r.coupon).reduce((sum, r) => sum + r.net, 0);

  return (
    <div className="min-h-screen w-full p-4 sm:p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Transactions & Redemptions</h1>
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 items-end">
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select value={type} onChange={e => setType(e.target.value)} className="border rounded px-2 py-1">
            <option value="loyalty">Loyalty</option>
            <option value="coupons">Coupons</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Customer Segment</label>
          <select value={segment} onChange={e => setSegment(e.target.value)} className="border rounded px-2 py-1">
            {customerSegments.map(seg => <option key={seg} value={seg}>{seg}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date From</label>
          <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} className="border rounded px-2 py-1" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date To</label>
          <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} className="border rounded px-2 py-1" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">TxnID</th>
              <th className="px-4 py-2 border">Customer</th>
              <th className="px-4 py-2 border">Order Amt</th>
              <th className="px-4 py-2 border">Points Used</th>
              <th className="px-4 py-2 border">Coupon</th>
              <th className="px-4 py-2 border">Net</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={8} className="text-center py-4">No transactions found.</td></tr>
            ) : (
              filtered.map(row => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border font-mono">{row.id}</td>
                  <td className="px-4 py-2 border">{row.customer}</td>
                  <td className="px-4 py-2 border">${row.order}</td>
                  <td className="px-4 py-2 border">{row.points}</td>
                  <td className="px-4 py-2 border">{row.coupon || '-'}</td>
                  <td className="px-4 py-2 border">${row.net}</td>
                  <td className="px-4 py-2 border">{row.date}</td>
                  <td className="px-4 py-2 border">{row.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Attribution/ROI */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded shadow">
          <div className="text-lg font-semibold">Loyalty Revenue</div>
          <div className="text-2xl font-bold text-blue-700">${totalLoyaltyRevenue}</div>
          <div className="text-xs text-gray-500 mt-1">Revenue gained from loyalty redemptions</div>
        </div>
        <div className="bg-green-50 p-4 rounded shadow">
          <div className="text-lg font-semibold">Coupon ROI</div>
          <div className="text-2xl font-bold text-green-700">{totalCouponRevenue > 0 ? ((totalCouponRevenue / (totalCouponDiscount || 1)) * 100).toFixed(1) : 0}%</div>
          <div className="text-xs text-gray-500 mt-1">ROI of each coupon (Discount cost vs Additional revenue generated)</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded shadow">
          <div className="text-lg font-semibold">Total Coupon Discount</div>
          <div className="text-2xl font-bold text-yellow-700">${totalCouponDiscount}</div>
          <div className="text-xs text-gray-500 mt-1">Total discount given via coupons</div>
        </div>
      </div>
    </div>
  );
}
