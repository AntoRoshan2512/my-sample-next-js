
import BasicTable from '../tables/basic';
import WidgetCard from '@core/components/cards/widget-card';


// --- Modern Dashboard Theme Components ---
function CampaignHeader() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-gray-100">
      <div className="flex-1 min-w-[220px]">
        <div className="text-2xl font-semibold mb-1 text-gray-900">Festive Offer – July 2025</div>
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">Active</span>
          <span className="text-xs text-gray-400">July 1, 2025 – July 31, 2025</span>
        </div>
        <div className="flex items-center gap-4 mb-2">
          <div className="text-xs text-gray-500">Budget:</div>
          <div className="text-xs text-gray-900 font-medium">$8,000</div>
          <span className="text-xs text-gray-400">spent of $10,000</span>
        </div>
        <div className="w-full bg-gray-200 rounded h-2 mb-2 max-w-xs"><div className="bg-primary h-2 rounded" style={{width:'80%'}} /></div>
        <div className="text-xs text-gray-500">Engagement Score: <span className="text-primary font-bold">0.87</span></div>
      </div>
      <div className="hidden md:block">
        <img src="/dashboard-illustration.svg" alt="Campaign" className="w-40 h-32 object-contain" />
      </div>
    </div>
  );
}

function CampaignKeyMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-start">
        <div className="text-xs text-gray-500 mb-1">Reach</div>
        <div className="text-2xl font-bold text-gray-900">1,500 <span className="text-base text-gray-400">/ 1,026</span></div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-start">
        <div className="text-xs text-gray-500 mb-1">CTR</div>
        <div className="text-2xl font-bold text-gray-900">12.5%</div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-start">
        <div className="text-xs text-gray-500 mb-1">Conversion Rate</div>
        <div className="text-2xl font-bold text-gray-900">28.9%</div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-start">
        <div className="text-xs text-gray-500 mb-1">Revenue</div>
        <div className="text-2xl font-bold text-gray-900">$312,506.25</div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-start">
        <div className="text-xs text-gray-500 mb-1">Customer Categories</div>
        <div className="text-xs text-gray-700">High Value, Churn Risk, Frequent</div>
      </div>
    </div>
  );
}

function CampaignTimelineGraph() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="font-semibold mb-4 text-gray-900">Timeline & Engagement</div>
      <div className="h-56 flex items-center justify-center text-gray-300">[Line/Bar Chart Placeholder]</div>
    </div>
  );
}

function CampaignCustomerInsights() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="font-semibold mb-4 text-gray-900">Customer Insights</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-40 flex items-center justify-center text-gray-300">[Segmentation Pie/Bar Chart]</div>
        <div className="h-40 flex items-center justify-center text-gray-300">[Heatmap]</div>
        <div>
          <div className="text-xs text-gray-500 mb-2">Feedback Summary</div>
          <div className="mb-1 text-base text-gray-900">Avg. Rating: <span className="font-bold">4.3/5</span></div>
          <div className="text-xs text-gray-400">“Great offer!” “Loved the timing.”</div>
        </div>
      </div>
    </div>
  );
}

function CampaignChannelPerformance() {
  return (
    <WidgetCard title="Channel Performance" className="p-0">
      <BasicTable stickyHeader={true} variants="minimal" />
    </WidgetCard>
  );
}

function CampaignAISuggestions() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="font-semibold mb-4 text-gray-900">AI Suggestions</div>
      <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
        <li>Next Best Action: <span className="text-gray-700">Send reminder on WhatsApp to Churn Risk customers who haven’t purchased in 7 days.</span></li>
        <li>Suggested Budget Reallocation: <span className="text-gray-700">Move 15% from SMS to Push for better ROI.</span></li>
        <li>Predicted Uplift: <span className="text-gray-700">Expected +12% conversions if extended 3 days.</span></li>
      </ul>
    </div>
  );
}

function CampaignDrilldownTable() {
  return (
    <WidgetCard title="Customer Engagement Log" className="p-0">
      <BasicTable stickyHeader={true} variants="minimal" />
    </WidgetCard>
  );
}

function CampaignExportActions() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-8">
      <div className="flex gap-2">
        <button className="bg-primary text-white px-4 py-2 rounded-lg shadow-sm">Export to PDF</button>
        <button className="bg-primary text-white px-4 py-2 rounded-lg shadow-sm">Export to Excel</button>
      </div>
      <div className="flex gap-2">
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg shadow">Share Report</button>
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg shadow">AI: Generate 1-Page Summary</button>
      </div>
    </div>
  );
}

// --- Main Drilldown Page Layout ---
export default function CampaignDrilldown() {
  return (
    <div className="p-6 md:p-10 space-y-8 bg-gray-50 min-h-screen">
      <CampaignHeader />
      <CampaignKeyMetrics />
      <CampaignTimelineGraph />
      <CampaignCustomerInsights />
      <CampaignChannelPerformance />
      <CampaignAISuggestions />
      <CampaignDrilldownTable />
      <CampaignExportActions />
    </div>
  );
}
