import React from "react";

interface VisitHeatmapProps {
  visitHeatmap: object;
}

const VisitHeatmap: React.FC<VisitHeatmapProps> = ({ visitHeatmap }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Visit Heatmap</h3>
    {/* TODO: Replace with actual heatmap visualization */}
    <div className="text-gray-500">Best days/times to target push notifications.</div>
  </section>
);

export default VisitHeatmap;
