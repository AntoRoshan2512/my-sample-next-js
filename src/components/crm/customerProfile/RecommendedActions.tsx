import React from "react";

export interface RecommendedActionsProps {
  actions: string[];
}

const RecommendedActions: React.FC<RecommendedActionsProps> = ({ actions }) => (
  <div className="bg-gray-50 rounded p-6 border w-full">
    <h2 className="font-semibold mb-4">Recommended actions</h2>
    <ul className="list-disc ml-4 text-sm text-gray-700">
      {actions.map((action, idx) => <li key={idx}>{action}</li>)}
    </ul>
  </div>
);

export default RecommendedActions;
