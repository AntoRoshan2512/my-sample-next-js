import React from "react";

interface AuditTrail {
  user: string;
  date: string;
}
interface AuditTrailCardProps {
  auditTrail: AuditTrail[];
}

const AuditTrailCard: React.FC<AuditTrailCardProps> = ({ auditTrail }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Audit Trail</h3>
    <ul>
      {auditTrail.map((a, i) => (
        <li key={i}>{a.user} on {a.date}</li>
      ))}
    </ul>
  </section>
);

export default AuditTrailCard;
