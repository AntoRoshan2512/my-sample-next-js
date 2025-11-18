export default function CampaignMeta() {
  return (
    <div className="bg-white rounded-lg shadow p-6 min-w-[260px]">
      <div className="mb-2 text-xs text-gray-500">Current audience</div>
      <div className="text-lg font-bold mb-4">1,026</div>
      <div className="text-xs text-gray-500 mb-1">Created:</div>
      <div className="mb-2">Braze Demo on August 9, 2025</div>
      <div className="text-xs text-gray-500 mb-1">Last Edited:</div>
      <div className="mb-2">Braze Demo on August 9, 2025</div>
      <div className="text-xs text-gray-500 mb-1">Tags:</div>
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">promotional</span>
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">DE</span>
      </div>
    </div>
  );
}
