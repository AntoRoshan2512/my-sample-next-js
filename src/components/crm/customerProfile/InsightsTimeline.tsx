import React from "react";

export interface InsightsTimelineProps {
  spendVisits: React.ReactNode;
  shoppingBehavior: React.ReactNode;
  transactions: React.ReactNode;
  rfm: React.ReactNode;
  feedback: React.ReactNode;
  ownerTask: React.ReactNode;
}

const InsightsTimeline: React.FC<InsightsTimelineProps> = ({ spendVisits, shoppingBehavior, transactions, rfm, feedback, ownerTask }) => (
  <div className="bg-gray-50 rounded p-6 border w-full">
    <h2 className="font-semibold mb-4">Insights & Timeline</h2>
    <div className="grid grid-cols-2 gap-4">
      <div>{spendVisits}</div>
      <div>{shoppingBehavior}</div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div>{transactions}</div>
      <div>{rfm}</div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div>{feedback}</div>
      <div>{ownerTask}</div>
    </div>
  </div>
);

export default InsightsTimeline;
