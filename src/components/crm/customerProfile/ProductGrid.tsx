import React from "react";

interface ProductGridProps {
  topProducts: string[];
  topCategories: string[];
  favouriteCombos: string[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ topProducts, topCategories, favouriteCombos }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Shopping Behavior</h3>
    <div><strong>Top Products:</strong> {topProducts.join(", ")}</div>
    <div><strong>Top Categories:</strong> {topCategories.join(", ")}</div>
    <div><strong>Favourite Combos:</strong> {favouriteCombos.join(", ")}</div>
    {/* TODO: Add micro-Sankey for "Bought together" combos */}
  </section>
);

export default ProductGrid;
