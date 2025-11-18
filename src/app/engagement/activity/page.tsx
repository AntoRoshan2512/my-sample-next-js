import React, { ReactElement } from 'react';
import PageHeader from '@/app/shared/page-header';

// You may want to update this to your actual routes and meta config
const pageHeader = {
  title: 'Activity Log',
  breadcrumb: [
    {
      name: 'Engagement',
    },
    {
      name: 'Activity Log',
    },
  ],
};

type SourceType = 'ai' | 'manual' | 'suggested';
type StatusIconType = 'mail' | 'eye' | 'link' | 'cart';

interface ActivityItem {
  time: string;
  source: string;
  sourceType: SourceType;
  customer: string;
  message: string;
  status: string;
  statusIcon: StatusIconType;
  amount: string;
  amountColor: string;
}

const activityData: ActivityItem[] = [
  {
    time: '10:43 AM',
    source: 'AI Automated',
    sourceType: 'ai',
    customer: 'Customer #1934',
    message: "Hi Sarah, we saved your cart: Het Here's 10% off.",
    status: 'Delivered',
    statusIcon: 'mail',
    amount: '+$87.30',
    amountColor: 'text-green-600',
  },
  {
    time: '9:19 AM',
    source: 'Manual Campaign',
    sourceType: 'manual',
    customer: 'Customer #1088',
    message: 'Reminder: your cart is waiting for you',
    status: 'Opened',
    statusIcon: 'eye',
    amount: '+$12.10',
    amountColor: 'text-green-600',
  },
  {
    time: '8:57 AM',
    source: 'AI Automated',
    sourceType: 'ai',
    customer: 'Customer #1934',
    message: "Hi Sarah, here's 10% off",
    status: 'Clicked',
    statusIcon: 'link',
    amount: '+$18.90',
    amountColor: 'text-green-600',
  },
  {
    time: '8:31 AM',
    source: 'AI Suggested',
    sourceType: 'suggested',
    customer: 'High-value VIP',
    message: 'Thank you for your recent purchase!',
    status: 'Purchased',
    statusIcon: 'cart',
    amount: '+$35.00',
    amountColor: 'text-green-600',
  },
];

const sourceStyles: Record<SourceType, string> = {
  ai: 'bg-blue-100 text-blue-700',
  manual: 'bg-red-100 text-red-700',
  suggested: 'bg-blue-50 text-blue-600',
};

const statusIcons: Record<StatusIconType, ReactElement> = {
  mail: <span role="img" aria-label="mail">📧</span>,
  eye: <span role="img" aria-label="eye">👁️</span>,
  link: <span role="img" aria-label="link">🔗</span>,
  cart: <span role="img" aria-label="cart">🛒</span>,
};

export default function ActivityLogPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <div className="flex flex-col gap-6">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-0 gap-3 mb-2">
          <div className="flex flex-col md:flex-row md:items-end gap-2 flex-1">
            {/* Source */}
            <div className="flex flex-col min-w-[200px]">
              <span className="text-xs text-gray-500 font-medium mb-1 ml-1">Source</span>
              <div className="flex gap-1">
                <button className="px-3 py-1 rounded bg-blue-100 text-blue-700 text-xs font-semibold">AI Automated</button>
                <button className="px-3 py-1 rounded bg-blue-50 text-blue-600 text-xs font-semibold">AI Suggested</button>
                <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">Dounual Campaign</button>
              </div>
            </div>
            {/* Channel */}
            <div className="flex flex-col min-w-[260px] md:ml-6">
              <span className="text-xs text-gray-500 font-medium mb-1 ml-1">Channel</span>
              <div className="flex gap-1">
                <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">Email</button>
                <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">SMS</button>
                <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">WhatsApp</button>
                <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">Push</button>
                <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">Open reee</button>
              </div>
            </div>
            {/* Status */}
            <div className="flex flex-col min-w-[260px] md:ml-6">
              <span className="text-xs text-gray-500 font-medium mb-1 ml-1">Status</span>
              <div className="flex gap-1">
                <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">Sent</button>
                <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">Delivered</button>
                <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">Opened</button>
                <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">Clicked</button>
                <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">Purchased</button>
              </div>
            </div>
          </div>
          {/* Date and Export */}
          <div className="flex items-end gap-2 md:ml-auto mt-2 md:mt-0">
            <input type="text" className="border rounded px-2 py-1 text-sm w-28" value="Aug 1–25" readOnly />
            <button className="px-3 py-1 rounded border text-sm flex items-center gap-1"><span className="i-lucide-download" /> Export</button>
          </div>
        </div>
        {/* Activity List */}
        <div className="divide-y bg-white rounded-xl shadow-sm">
          {activityData.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 py-6 px-6">
              <div className="w-24 text-right text-gray-500 text-base pt-1 font-mono">{item.time}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${sourceStyles[item.sourceType]}`}>{item.source}</span>
                  <span className="font-medium text-gray-900">{item.customer}</span>
                </div>
                <div className="text-gray-700 text-base">{item.message}</div>
              </div>
              <div className="flex flex-col items-end min-w-[120px]">
                <div className="flex items-center gap-1 text-gray-500 text-base">
                  <span>{statusIcons[item.statusIcon]}</span>
                  <span>{item.status}</span>
                </div>
                <div className={`font-semibold ${item.amountColor} text-base`}>{item.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
