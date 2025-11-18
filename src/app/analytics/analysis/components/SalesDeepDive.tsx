import React from "react";

const SalesDeepDive = () => (
  <section className="rounded-xl bg-white shadow p-6 mb-8">
    <h2 className="text-xl font-bold mb-4">Sales Deep Dive</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-semibold mb-2">Sales Trend Over Time</h3>
        <div className="h-32 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg flex items-center justify-center text-blue-700">[Line Chart]</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Day vs Hour Sales Heatmap</h3>
        <div className="h-32 bg-gradient-to-r from-pink-100 to-pink-300 rounded-lg flex items-center justify-center text-pink-700">[Heatmap]</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Payment Method Split</h3>
        <div className="h-32 bg-gradient-to-r from-green-100 to-green-300 rounded-lg flex items-center justify-center text-green-700">[Pie Chart]</div>
      </div>
    </div>
  </section>
);

export default SalesDeepDive;
