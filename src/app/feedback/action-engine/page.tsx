"use client";
import { FaCogs, FaBolt, FaGift, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const autoStats = { handled: 80, avgTime: "2m", churn: 12 };
const automationRules = [
  { rule: "If ⭐ ≤ 2", action: "Auto-give 10% off next order", effectiveness: "12 cases" },
  { rule: "If ⭐ = 5", action: "Auto-grant loyalty points", effectiveness: "25 cases" },
];
const quickActions = [
  { label: "Grant Bonus Points", icon: <FaGift className="text-pink-500" /> },
  { label: "Send Apology Coupon", icon: <FaBolt className="text-yellow-500" /> },
  { label: "Escalate to Support", icon: <FaCogs className="text-gray-500" /> },
  { label: "Mark as Addressed", icon: <FaCheckCircle className="text-green-500" /> },
  { label: "Mark as Not Addressed", icon: <FaTimesCircle className="text-red-500" /> },
];

export default function ActionEnginePage() {
  return (
    <div className="min-h-screen w-full p-4 sm:p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Feedback → Action Engine</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded shadow p-6">
          <div className="font-semibold mb-2">Quick Actions per Review</div>
          <ul className="space-y-2">
            {quickActions.map((action, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                {action.icon} {action.label}
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-500 mt-4">Apply actions instantly to resolve feedback and delight customers.</div>
        </div>
        <div className="bg-white rounded shadow p-6">
          <div className="font-semibold mb-2">Automation Rules</div>
          <table className="min-w-full text-sm mb-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2">Rule</th>
                <th className="px-3 py-2">Action</th>
                <th className="px-3 py-2">Effectiveness</th>
              </tr>
            </thead>
            <tbody>
              {automationRules.map((rule, i) => (
                <tr key={i} className="border-b">
                  <td className="px-3 py-2">{rule.rule}</td>
                  <td className="px-3 py-2">{rule.action}</td>
                  <td className="px-3 py-2">{rule.effectiveness}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-xs text-gray-500">Set rules to automate responses and rewards for reviews.</div>
        </div>
      </div>
      <div className="bg-white rounded shadow p-6 mb-8">
        <div className="font-semibold mb-2">Effectiveness Stats</div>
        <div className="flex gap-8 text-sm">
          <div>Auto-handled: <span className="font-bold">{autoStats.handled}</span></div>
          <div>Avg Response Time: <span className="font-bold">{autoStats.avgTime}</span></div>
          <div>Churn Reduction: <span className="font-bold">{autoStats.churn}%</span></div>
        </div>
        <div className="text-xs text-gray-500 mt-2">Track how automation improves customer retention and reduces manual work.</div>
      </div>
      <div className="text-xs text-gray-500">
        <p>Configure automation rules and quick actions to streamline your feedback response process. See real-time stats on effectiveness and customer impact.</p>
      </div>
    </div>
  );
}
