export default function CampaignPerformance() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="font-semibold mb-4">Campaign Monitoring</div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div>Be the first to know if unusual volume is detected.</div>
        <button className="bg-primary text-white px-4 py-2 rounded">Set Up Alert</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-gray-500">
        <div>
          <div>Type:</div>
          <div className="text-gray-900 font-medium">Scheduled</div>
        </div>
        <div>
          <div>Time Zone:</div>
          <div className="text-gray-900 font-medium">Eastern Time (US & Canada)</div>
        </div>
        <div>
          <div>Last Sent:</div>
          <div className="text-gray-900 font-medium">Jul 19, 2025 00:00</div>
        </div>
        <div>
          <div>Frequency Capping:</div>
          <div className="text-gray-900 font-medium">No rules currently set</div>
        </div>
      </div>
    </div>
  );
}
