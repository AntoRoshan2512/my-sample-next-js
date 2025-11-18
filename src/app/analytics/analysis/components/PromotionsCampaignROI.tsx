import React from "react";

const PromotionsCampaignROI = () => (
  <section className="rounded-xl bg-white shadow p-6 mb-8">
    <h2 className="text-xl font-bold mb-4">Promotions & Campaign ROI</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-semibold mb-2">Campaign Uplift Timeline</h3>
        <div className="h-20 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700">[Timeline Chart]</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Discount vs Profit Impact</h3>
        <div className="h-20 bg-pink-100 rounded-lg flex items-center justify-center text-pink-700">[Impact Chart]</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Cross-sell / Upsell Success</h3>
        <div className="h-20 bg-green-100 rounded-lg flex items-center justify-center text-green-700">[Success Chart]</div>
      </div>
    </div>
  </section>
);

export default PromotionsCampaignROI;
