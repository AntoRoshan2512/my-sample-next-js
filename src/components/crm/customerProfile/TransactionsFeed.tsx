import React from "react";

interface Transaction {
  date: string;
  total: string;
  items: string[];
  payment: string;
  discount: string;
  location: string;
  posRef: string;
  billLink: string;
  survey: number;
  warranty: boolean;
}
interface TransactionsFeedProps {
  transactions: Transaction[];
}

const TransactionsFeed: React.FC<TransactionsFeedProps> = ({ transactions }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Transactions Feed</h3>
    <ul>
      {transactions.map((t, i) => (
        <li key={i} className="mb-2">
          <div>{t.date}: {t.total}, {t.items.join(", ")}, {t.payment}, {t.discount}, {t.location}, POS: {t.posRef}, <a href={t.billLink}>Bill</a>, Survey: {t.survey}, Warranty: {t.warranty ? "Yes" : "No"}</div>
        </li>
      ))}
    </ul>
    {/* TODO: Add filters and expand to show full bill/receipt */}
  </section>
);

export default TransactionsFeed;
