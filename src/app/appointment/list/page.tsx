import Link from 'next/link';
function AllCampaignsTable() {
  // Example campaign data with IDs
  const campaigns = [
    { id: 1, name: 'Summer Sale', status: 'Active', reach: 12000, ctr: 14.2, revenue: 32000 },
    { id: 2, name: 'Diwali Blast', status: 'Completed', reach: 9500, ctr: 12.8, revenue: 27000 },
    { id: 3, name: 'Back to School', status: 'Active', reach: 8000, ctr: 11.5, revenue: 21000 },
    { id: 4, name: 'Halloween', status: 'Scheduled', reach: 0, ctr: 0, revenue: 0 },
    { id: 5, name: 'Christmas Bonanza', status: 'Draft', reach: 0, ctr: 0, revenue: 0 },
  ];
  const statusColor: Record<string, string> = {
    Active: 'text-green-600',
    Completed: 'text-gray-500',
    Scheduled: 'text-blue-600',
    Draft: 'text-yellow-600',
  };
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold text-gray-900">All Campaigns</div>
        <button className="px-3 py-1 rounded bg-primary text-white text-xs">+ New Campaign</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-xs text-gray-700">
              <th className="font-semibold px-4 py-3 text-left">NAME</th>
              <th className="font-semibold px-4 py-3 text-left">STATUS</th>
              <th className="font-semibold px-4 py-3 text-left">REACH</th>
              <th className="font-semibold px-4 py-3 text-left">CTR</th>
              <th className="font-semibold px-4 py-3 text-left">REVENUE</th>
              <th className="font-semibold px-4 py-3 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => (
              <tr key={c.id} className="border-b last:border-0 hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">
                  <Link href={`/campaigns/${c.id}`} className="text-primary hover:underline">{c.name}</Link>
                </td>
                <td className={`px-4 py-3 font-semibold ${statusColor[c.status]}`}>{c.status}</td>
                <td className="px-4 py-3">{c.reach.toLocaleString()}</td>
                <td className="px-4 py-3">{c.ctr ? c.ctr + '%' : '-'}</td>
                <td className="px-4 py-3">{c.revenue ? '$' + c.revenue.toLocaleString() : '-'}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex gap-2 justify-end">
                    <Link href={`/campaigns/${c.id}`} className="border rounded p-1 hover:bg-gray-100 text-primary" title="View">View</Link>
                    <Link href={`/campaigns/${c.id}`} className="border rounded p-1 hover:bg-gray-100 text-primary" title="Edit">Edit</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
import { metaObject } from '@/config/site.config';
import { FiTrendingUp, FiCalendar, FiPlus, FiZap, FiUsers } from 'react-icons/fi';

export const metadata = {
  ...metaObject('Campaign Overview'),
};

function TopCampaigns() {
  // Example data
  const campaigns = [
    { name: 'Summer Sale', reach: 12000, ctr: 14.2, revenue: 32000, roi: 3.2 },
    { name: 'Diwali Blast', reach: 9500, ctr: 12.8, revenue: 27000, roi: 2.9 },
    { name: 'Back to School', reach: 8000, ctr: 11.5, revenue: 21000, roi: 2.5 },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-900"><FiTrendingUp /> Top Performing Campaigns</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {campaigns.map((c) => (
          <div key={c.name} className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2 border border-gray-100">
            <div className="font-bold text-gray-800">{c.name}</div>
            <div className="flex gap-4 text-xs text-gray-600">
              <span>Reach: <span className="font-semibold text-gray-900">{c.reach}</span></span>
              <span>CTR: <span className="font-semibold text-gray-900">{c.ctr}%</span></span>
              <span>Revenue: <span className="font-semibold text-gray-900">${c.revenue.toLocaleString()}</span></span>
              <span>ROI: <span className="font-semibold text-green-600">{c.roi}x</span></span>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="text-xs px-3 py-1 rounded bg-primary text-white">View</button>
              <button className="text-xs px-3 py-1 rounded border border-primary text-primary">Duplicate</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function KeyStats() {
  // Example stats
  const stats = [
    { label: 'Total Reach', value: '32,000', icon: <FiUsers /> },
    { label: 'Avg. CTR', value: '13.2%', icon: <FiTrendingUp /> },
    { label: 'Conversions', value: '2,340', icon: <FiZap /> },
    { label: 'Revenue', value: '$82,500', icon: <FiTrendingUp /> },
    { label: 'ROI', value: '3.1x', icon: <FiTrendingUp /> },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-start">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">{s.icon} {s.label}</div>
          <div className="text-2xl font-bold text-gray-900">{s.value}</div>
        </div>
      ))}
    </div>
  );
}

function ResultsInsights() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="font-semibold mb-4 text-gray-900">Results & Insights</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-48 flex items-center justify-center text-gray-300">[Performance Chart]</div>
        <div className="h-48 flex items-center justify-center text-gray-300">[Engagement/Revenue Chart]</div>
      </div>
    </div>
  );
}

function UpcomingEventsCalendar() {
  // Example events
  const events = [
    { date: 'Sep 10', name: 'Ganesh Chaturthi', idea: 'Send festive offers' },
    { date: 'Oct 2', name: 'Gandhi Jayanti', idea: 'Promote eco-friendly products' },
    { date: 'Oct 31', name: 'Halloween', idea: 'Spooky deals & contests' },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-900"><FiCalendar /> Upcoming Events & Ideas</div>
      <div className="flex gap-6 overflow-x-auto pb-2">
        {events.map((e) => (
          <div key={e.date} className="min-w-[180px] bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col gap-1">
            <div className="text-xs text-gray-500">{e.date}</div>
            <div className="font-semibold text-gray-900">{e.name}</div>
            <div className="text-xs text-primary">{e.idea}</div>
          </div>
        ))}
        <div className="min-w-[180px] flex flex-col items-center justify-center">
          <button className="flex items-center gap-1 text-xs px-3 py-2 rounded bg-primary text-white"><FiPlus /> Add Event</button>
        </div>
      </div>
    </div>
  );
}

function AISuggestions() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="font-semibold mb-2 text-gray-900">AI Suggestions</div>
      <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
        <li>Next Best Action: <span className="text-gray-700">Send WhatsApp reminder to high-value customers who haven’t purchased in 7 days.</span></li>
        <li>Budget Tip: <span className="text-gray-700">Shift 10% from Email to Push for better ROI.</span></li>
        <li>Predicted Uplift: <span className="text-gray-700">+8% conversions if you run a flash sale this weekend.</span></li>
      </ul>
    </div>
  );
}

function RecentActivity() {
  // Example activity
  const activity = [
    { time: '2h ago', desc: 'Launched "Back to School" campaign' },
    { time: '1d ago', desc: 'Edited "Diwali Blast" campaign' },
    { time: '3d ago', desc: 'Scheduled "Halloween" campaign' },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="font-semibold mb-2 text-gray-900">Recent Activity</div>
      <ul className="text-sm text-gray-700 space-y-1">
        {activity.map((a, i) => (
          <li key={i}><span className="text-xs text-gray-400">{a.time}:</span> {a.desc}</li>
        ))}
      </ul>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="flex gap-3 flex-wrap">
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white shadow-sm"><FiPlus /> New Campaign</button>
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary"><FiZap /> Quick Launch</button>
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700"><FiCalendar /> Schedule</button>
    </div>
  );
}

function CustomerSegments() {
  // Example segments
  const segments = [
    { name: 'High Value', percent: 32 },
    { name: 'Churn Risk', percent: 18 },
    { name: 'Frequent Buyers', percent: 25 },
    { name: 'New Customers', percent: 25 },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="font-semibold mb-2 text-gray-900">Customer Segments</div>
      <div className="flex gap-6 flex-wrap">
        {segments.map((s) => (
          <div key={s.name} className="flex flex-col items-center min-w-[100px]">
            <div className="text-lg font-bold text-primary">{s.percent}%</div>
            <div className="text-xs text-gray-600">{s.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InspirationIdeas() {
  // Example ideas
  const ideas = [
    'Try a flash sale for upcoming festivals',
    'Segment your audience for personalized offers',
    'Use WhatsApp for abandoned cart reminders',
    'Leverage user-generated content in campaigns',
  ];
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-2 text-lg font-semibold text-gray-900"><FiUsers /> Inspiration & Ideas</div>
      <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
        {ideas.map((idea, i) => (
          <li key={i}>{idea}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AppointmentListPage() {
  return (
    <div className="p-4 md:p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="flex justify-end mb-4">
        <Link
          href="/appointment/list/allcampaigns"
          className="px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition"
        >
          View All Campaigns
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="text-2xl font-bold text-gray-900 mb-1">Campaign Overview</div>
          <div className="text-xs text-gray-500">All your campaigns, stats, and ideas in one place</div>
        </div>
        <QuickActions />
      </div>
      <KeyStats />
      <TopCampaigns />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ResultsInsights />
        <UpcomingEventsCalendar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AISuggestions />
        <CustomerSegments />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RecentActivity />
        <InspirationIdeas />
      </div>
      <div className="flex justify-end mb-4">
        <Link
          href="/appointment/list/allcampaigns"
          className="px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition"
        >
          View All Campaigns
        </Link>
      </div>
      <AllCampaignsTable />
    </div>
  );
}
