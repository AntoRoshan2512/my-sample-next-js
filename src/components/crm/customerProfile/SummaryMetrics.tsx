import React from "react";

interface SummaryMetricsProps {
  ltv: string;
  avgTicket: string;
  visits12mo: number;
  churnRisk: string;
  engagementScore: number;
}

const SummaryMetrics: React.FC<SummaryMetricsProps> = ({ ltv, avgTicket, visits12mo, churnRisk, engagementScore }) => (
  <div className="flex gap-2">
    <span className="chip">LTV: {ltv}</span>
    <span className="chip">Avg. Ticket: {avgTicket}</span>
    <span className="chip">Visits: {visits12mo}</span>
    <span className="chip">Churn %: {churnRisk}</span>
    <span className="chip">Engagement: {engagementScore}</span>
  </div>
);

export default SummaryMetrics;
