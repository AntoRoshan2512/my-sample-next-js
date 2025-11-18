import React from "react";

export interface SummaryHeaderProps {
  title: string;
  metrics: { label: string; value: string }[];
}

const SummaryHeader: React.FC<SummaryHeaderProps> = ({ title, metrics }) => (
  <div className="w-full">
    <h1 className="text-3xl font-bold mb-6">{title}</h1>
    <div className="grid grid-cols-5 gap-4 mb-8">
      {metrics.map((m, idx) => (
        <div key={idx} className="bg-gray-50 rounded p-6 border">
          <div className="text-xs text-gray-500 mb-1">{m.label}</div>
          <div className="text-3xl font-bold">{m.value}</div>
        </div>
      ))}
    </div>
  </div>
);

export default SummaryHeader;
