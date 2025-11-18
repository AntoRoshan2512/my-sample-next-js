import React from "react";

interface CustomerHeaderProps {
  avatar: string;
  name: string;
  badges: string[];
  primaryContact: string;
  segmentTags: string[];
  ageGenderLocation: string;
  ltv: string;
  avgTicket: string;
  visits12mo: number;
  churnRisk: string;
  engagementScore: number;
}

const CustomerHeader: React.FC<CustomerHeaderProps> = ({
  avatar,
  name,
  badges,
  primaryContact,
  segmentTags,
  ageGenderLocation,
  ltv,
  avgTicket,
  visits12mo,
  churnRisk,
  engagementScore,
}) => (
  <header className="sticky top-0 bg-white shadow flex flex-wrap items-center justify-between p-4 z-50">
    <div className="flex items-center gap-4">
      <img src={avatar} alt="avatar" className="w-16 h-16 rounded-full" />
      <div>
        <h2 className="font-bold text-xl">{name}</h2>
        <div className="flex gap-2">{badges.map(b => <span key={b} className="badge bg-yellow-200 px-2 rounded">{b}</span>)}</div>
        <span className="block text-gray-500">{primaryContact}</span>
        <span className="block text-xs text-gray-400">{segmentTags.join(", ")}</span>
        <span className="block text-xs text-gray-400">{ageGenderLocation}</span>
      </div>
    </div>
    <div className="flex gap-2">
      <span className="chip">LTV: {ltv}</span>
      <span className="chip">Avg. Ticket: {avgTicket}</span>
      <span className="chip">Visits: {visits12mo}</span>
      <span className="chip">Churn %: {churnRisk}</span>
      <span className="chip">Engagement: {engagementScore}</span>
    </div>
    <div className="flex gap-2">
      <button className="btn">Send offer</button>
      <button className="btn">Create campaign</button>
      <button className="btn">Issue refund</button>
      <button className="btn">Start chat</button>
      <button className="btn">Add note</button>
      <button className="btn">Merge</button>
    </div>
  </header>
);

export default CustomerHeader;
