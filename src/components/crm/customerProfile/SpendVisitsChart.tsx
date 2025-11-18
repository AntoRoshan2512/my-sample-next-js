import React from "react";

interface SpendVisitsChartProps {
  spendTimeline: { month: string; spend: number; visits: number }[];
}

const SpendVisitsChart: React.FC<SpendVisitsChartProps> = ({ spendTimeline }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Spend & Visits Timeline</h3>
    {/* Replace with chart library for area chart */}
    <div className="flex gap-4">
      {spendTimeline.map((m, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="font-bold">{m.month}</span>
          <span>${m.spend}</span>
          <span>{m.visits} visits</span>
        </div>
      ))}
    </div>
  </section>
);

export default SpendVisitsChart;
