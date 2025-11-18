// This is a placeholder for a campaign analytics table. You can expand it with real data and columns as needed.
export default function CampaignAnalyticsTable() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <div className="font-semibold mb-4">SMS/MMS/RCS Performance</div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Variation</th>
              <th className="p-2">Audience %</th>
              <th className="p-2">Unique Recipients</th>
              <th className="p-2">Sends</th>
              <th className="p-2">Confirmed Deliveries</th>
              <th className="p-2">Delivery Failures</th>
              <th className="p-2">Rejections</th>
              <th className="p-2">Opt-Out</th>
              <th className="p-2">Help</th>
              <th className="p-2">Total Clicks</th>
              <th className="p-2">Revenue</th>
              <th className="p-2">Primary Conversions</th>
              <th className="p-2">Confidence</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">CG (Control Group)</td>
              <td className="p-2">20.00%</td>
              <td className="p-2">0</td>
              <td className="p-2">0</td>
              <td className="p-2">--</td>
              <td className="p-2">--</td>
              <td className="p-2">--</td>
              <td className="p-2">--</td>
              <td className="p-2">--</td>
              <td className="p-2">$0.00</td>
              <td className="p-2">0.00%</td>
              <td className="p-2">0</td>
              <td className="p-2">--</td>
            </tr>
            <tr>
              <td className="p-2">A (Variant 1)</td>
              <td className="p-2">80.00%</td>
              <td className="p-2">218</td>
              <td className="p-2">485</td>
              <td className="p-2">82.89% (402)</td>
              <td className="p-2">0.62% (3)</td>
              <td className="p-2">0.62% (3)</td>
              <td className="p-2">0.00% (0)</td>
              <td className="p-2">0.00% (0)</td>
              <td className="p-2">27.22% (132)</td>
              <td className="p-2">$312,506.25</td>
              <td className="p-2">28.90% (63)</td>
              <td className="p-2">--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
