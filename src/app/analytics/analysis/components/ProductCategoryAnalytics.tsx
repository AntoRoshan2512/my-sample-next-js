import React from "react";

const ProductCategoryAnalytics = () => (
  <section className="rounded-xl bg-white shadow p-6 mb-8">
    <h2 className="text-xl font-bold mb-4">Product & Category Analytics</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div>
        <h3 className="font-semibold mb-2">Top Products</h3>
        <div className="h-24 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-700">[Bar Chart]</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Category Contribution</h3>
        <div className="h-24 bg-purple-100 rounded-lg flex items-center justify-center text-purple-700">[Donut Chart]</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Profitability Matrix</h3>
        <div className="h-24 bg-green-100 rounded-lg flex items-center justify-center text-green-700">[Matrix]</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Slow Movers / Dead Stock</h3>
        <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">[List/Table]</div>
      </div>
    </div>
  </section>
);

export default ProductCategoryAnalytics;
