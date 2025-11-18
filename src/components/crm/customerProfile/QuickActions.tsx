import React from "react";

const actions = [
  "Send offer",
  "Create campaign",
  "Issue refund",
  "Start chat",
  "Add note",
  "Merge",
];

const QuickActions: React.FC = () => (
  <div className="flex gap-2">
    {actions.map(action => (
      <button key={action} className="btn">
        {action}
      </button>
    ))}
  </div>
);

export default QuickActions;
