import React from "react";

interface TagsSegmentsCardProps {
  tags: string[];
  loyaltyTier: string;
  referralSource: string;
}

const TagsSegmentsCard: React.FC<TagsSegmentsCardProps> = ({ tags, loyaltyTier, referralSource }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Tags, Segments & Loyalty</h3>
    <div>Tags: {tags.join(", ")}</div>
    <div>Loyalty Tier: {loyaltyTier}</div>
    <div>Referral Source: {referralSource}</div>
  </section>
);

export default TagsSegmentsCard;
