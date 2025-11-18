import React from "react";

interface QuickMetricsChipsProps {
  quickMetrics: {
    daysSinceLastVisit: number;
    daysUntilAnniversary: number;
    nextPredictedVisit: string;
    predicted30DaySpend: string;
  };
}

const QuickMetricsChips: React.FC<QuickMetricsChipsProps> = ({ quickMetrics }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    <span className="chip">Days since last visit: {quickMetrics.daysSinceLastVisit}</span>
    <span className="chip">Days until anniversary: {quickMetrics.daysUntilAnniversary}</span>
    <span className="chip">Next predicted visit: {quickMetrics.nextPredictedVisit}</span>
    <span className="chip">Predicted 30-day spend: {quickMetrics.predicted30DaySpend}</span>
  </div>
);

export default QuickMetricsChips;
