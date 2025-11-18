import React from "react";

interface Claim {
  card: string;
  status: string;
}
interface WarrantyReturnsCardProps {
  warrantyCards: string[];
  claims: Claim[];
}

const WarrantyReturnsCard: React.FC<WarrantyReturnsCardProps> = ({ warrantyCards, claims }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Warranty & Returns</h3>
    <div>Cards: {warrantyCards.join(", ")}</div>
    <div>Claims: {claims.map((c, i) => `${c.card}: ${c.status}`).join(", ")}</div>
  </section>
);

export default WarrantyReturnsCard;
