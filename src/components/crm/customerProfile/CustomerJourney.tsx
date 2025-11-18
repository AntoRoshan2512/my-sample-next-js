import React from "react";

export interface CustomerJourneyProps {
  stages: string[];
}

const CustomerJourney: React.FC<CustomerJourneyProps> = ({ stages }) => (
  <div className="bg-gray-50 rounded p-6 border w-full mt-8">
    <h2 className="font-semibold mb-4">Customer Journey</h2>
    <div className="flex items-center gap-2">
      {stages.map((stage, idx) => (
        <React.Fragment key={stage}>
          <span className="text-xs text-gray-500">{stage}</span>
          {idx < stages.length - 1 && <span className="flex-1 h-1 bg-gray-200 rounded mx-2" />}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default CustomerJourney;
