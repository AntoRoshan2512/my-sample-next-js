import React from "react";

const RefundCancellationAnalysis = () => (
  <section className="rounded-xl bg-white shadow p-6 mb-8">
    <h2 className="text-xl font-bold mb-4">Refund & Cancellation Analysis</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-semibold mb-2">Refund Trend</h3>
        <div className="h-20 bg-red-100 rounded-lg flex items-center justify-center text-red-700">[Refund Trend Chart]</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Top Refunded Products</h3>
        <div className="h-20 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-700">[Refunded Products List]</div>
      </div>
    </div>
  </section>
);

export default RefundCancellationAnalysis;
