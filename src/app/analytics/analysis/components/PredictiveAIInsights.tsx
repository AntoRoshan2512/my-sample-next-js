import React from "react";

const PredictiveAIInsights = () => (
  <section className="rounded-xl bg-white shadow p-6 mb-8">
    <h2 className="text-xl font-bold mb-4">Predictive & AI Insights</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-semibold mb-2">Sales Forecast</h3>
        <div className="h-20 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">[Forecast Chart]</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Stock-out Prediction</h3>
        <div className="h-20 bg-orange-100 rounded-lg flex items-center justify-center text-orange-700">[Prediction Chart]</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">AI Action Suggestions</h3>
        <div className="h-20 bg-green-100 rounded-lg flex items-center justify-center text-green-700">[Reorder | Discontinue | Bundle]</div>
      </div>
    </div>
  </section>
);

export default PredictiveAIInsights;
