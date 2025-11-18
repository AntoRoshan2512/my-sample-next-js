import React from "react";

interface SegmentsMembershipCardProps {
  campaigns: string[];
  experiments: string[];
}

const SegmentsMembershipCard: React.FC<SegmentsMembershipCardProps> = ({ campaigns, experiments }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Segments & Membership</h3>
    <div>Campaigns: {campaigns.join(", ")}</div>
    <div>Experiments: {experiments.join(", ")}</div>
  </section>
);

export default SegmentsMembershipCard;
