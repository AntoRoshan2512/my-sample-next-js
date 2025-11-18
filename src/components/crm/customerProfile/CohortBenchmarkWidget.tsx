import React from "react";

interface CohortBenchmarkWidgetProps {
  cohort: { storeAvgSpend: string; storeAvgVisits: number };
}

const CohortBenchmarkWidget: React.FC<CohortBenchmarkWidgetProps> = ({ cohort }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Cohort & Benchmarking</h3>
    <div>Store Avg Spend: {cohort.storeAvgSpend}</div>
    <div>Store Avg Visits: {cohort.storeAvgVisits}</div>
  </section>
);

export default CohortBenchmarkWidget;
