import React from "react";

interface AIQuickSummaryCardProps {
  aiSummary: { sentence: string; bullets: string[] };
}

const AIQuickSummaryCard: React.FC<AIQuickSummaryCardProps> = ({ aiSummary }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">AI Quick Summary</h3>
    <div>{aiSummary.sentence}</div>
    <ul className="list-disc ml-6">
      {aiSummary.bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  </section>
);

export default AIQuickSummaryCard;
