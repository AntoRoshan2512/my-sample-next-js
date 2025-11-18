import React from "react";

const InventoryHealth = () => (
  <section className="rounded-xl bg-white shadow p-6 mb-8">
    <h2 className="text-xl font-bold mb-4">Inventory Health</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-semibold mb-2">Low Stock Alerts</h3>
        <div className="h-20 bg-red-100 rounded-lg flex items-center justify-center text-red-700">[Alert List]</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Stock Turnover Rate</h3>
        <div className="h-20 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">[Turnover Chart]</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Aging Inventory</h3>
        <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">[Aging Table]</div>
      </div>
    </div>
  </section>
);

export default InventoryHealth;
