export default function CampaignStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-lg shadow p-6">
      <div>
        <div className="text-xs text-gray-500">Messages sent</div>
        <div className="text-xl font-bold">485</div>
      </div>
      <div>
        <div className="text-xs text-gray-500">Unique recipients</div>
        <div className="text-xl font-bold">218</div>
      </div>
      <div>
        <div className="text-xs text-gray-500">Conversion rate</div>
        <div className="text-xl font-bold">28.90% <span className='text-xs'>(63)</span></div>
      </div>
      <div>
        <div className="text-xs text-gray-500">Total revenue</div>
        <div className="text-xl font-bold">$312,506.25</div>
      </div>
    </div>
  );
}
