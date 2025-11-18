import React from "react";

const PerformanceSummary = () => (
  <section className="rounded-xl bg-white shadow p-6 mb-8">
    <h2 className="text-xl font-bold mb-4">Performance Summary</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <SummaryCard title="Revenue" value="$120,000" trend="up" />
      <SummaryCard title="Orders" value="1,200" trend="up" />
      <SummaryCard title="AOV" value="$100" trend="flat" />
      <SummaryCard title="Basket Size" value="3.2" trend="up" />
      <SummaryCard title="Margin" value="22%" trend="up" />
      <SummaryCard title="Refund Rate" value="1.5%" trend="down" />
    </div>
  </section>
);

const SummaryCard = ({ title, value, trend }: { title: string; value: string; trend: "up" | "down" | "flat" }) => (
  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center border border-gray-100">
    <span className="text-gray-500 text-sm mb-1">{title}</span>
    <span className="text-2xl font-semibold mb-1">{value}</span>
    <span className={`text-xs font-medium ${trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-gray-400"}`}>
      {trend === "up" ? "▲" : trend === "down" ? "▼" : "▬"}
    </span>
  </div>
);

export default PerformanceSummary;
