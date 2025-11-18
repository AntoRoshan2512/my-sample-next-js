import React from "react";

interface RecommendedActionsListProps {
  recommendedActions: string[];
}

const RecommendedActionsList: React.FC<RecommendedActionsListProps> = ({ recommendedActions }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Recommended Actions</h3>
    <ul className="list-disc ml-6">
      {recommendedActions.map((a, i) => <li key={i}>{a}</li>)}
    </ul>
  </section>
);

export default RecommendedActionsList;
