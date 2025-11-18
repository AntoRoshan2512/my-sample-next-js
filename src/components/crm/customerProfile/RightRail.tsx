import React from "react";
import RecommendedActions, { RecommendedActionsProps } from "./RecommendedActions";
import CustomerJourney, { CustomerJourneyProps } from "./CustomerJourney";

export interface RightRailProps {
  recommendedActions: RecommendedActionsProps["actions"];
  journeyStages: CustomerJourneyProps["stages"];
  segments: string[];
  files: string[];
  quickMetrics: string[];
}

const RightRail: React.FC<RightRailProps> = ({ recommendedActions, journeyStages, segments, files, quickMetrics }) => (
  <aside className="w-96 min-h-screen flex flex-col gap-8 p-8">
    <RecommendedActions actions={recommendedActions} />
    <CustomerJourney stages={journeyStages} />
    <div className="bg-gray-50 rounded p-6 border w-full">
      <h2 className="font-semibold mb-4">Segments & membership</h2>
      <div className="flex flex-wrap gap-2">
        {segments.map((s, idx) => <span key={idx} className="bg-gray-100 rounded px-2 py-1 text-xs">{s}</span>)}
      </div>
    </div>
    <div className="bg-gray-50 rounded p-6 border w-full">
      <h2 className="font-semibold mb-4">Files & attachments</h2>
      <div className="flex flex-wrap gap-2">
        {files.map((f, idx) => <span key={idx} className="bg-gray-100 rounded px-2 py-1 text-xs">{f}</span>)}
      </div>
    </div>
    <div className="bg-gray-50 rounded p-6 border w-full">
      <h2 className="font-semibold mb-4">Quick metrics</h2>
      <div className="grid grid-cols-2 gap-2">
        {quickMetrics.map((m, idx) => <span key={idx} className="bg-gray-100 rounded px-2 py-1 text-xs">{m}</span>)}
      </div>
    </div>
  </aside>
);

export default RightRail;
