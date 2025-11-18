import React from "react";

interface AccountStatusCardProps {
  accountStatus: string;
  consent: boolean;
  subscriptionPrefs: string[];
  dndWindows: string;
  legalBasis: string;
}

const AccountStatusCard: React.FC<AccountStatusCardProps> = ({
  accountStatus,
  consent,
  subscriptionPrefs,
  dndWindows,
  legalBasis,
}) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Account Status & Consent</h3>
    <div>Status: {accountStatus}</div>
    <div>Consent: {consent ? "Yes" : "No"}</div>
    <div>Subscription: {subscriptionPrefs.join(", ")}</div>
    <div>DND: {dndWindows}</div>
    <div>Legal: {legalBasis}</div>
  </section>
);

export default AccountStatusCard;
