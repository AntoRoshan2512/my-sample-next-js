'use client';

import React, { useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaPause, FaPlay, FaClone, FaFileExport, FaCheckCircle, FaInfoCircle } from "react-icons/fa";

// Mock data for demonstration
const trigger = {
  name: "Cart Abandonment Reminder",
  status: true,
  description: "Sends a personalized reminder 24h after cart abandonment.",
  kpis: [
    { label: "Total Sent", value: "3,210" },
    { label: "Revenue", value: "$8,450" },
    { label: "Conv. Rate", value: "18%" },
    { label: "ROI", value: "320%" },
    { label: "Avg Revenue/msg", value: "$2.63" },
  ],
  funnel: [
    { label: "Sent", value: 3210 },
    { label: "Opened", value: 1800 },
    { label: "Clicked", value: 670 },
    { label: "Purchased", value: 320 },
    { label: "Revenue", value: 8450 },
  ],
  trend: {
    sent: [100, 200, 300, 400, 350, 420, 410, 390, 370, 410, 430, 320],
    revenue: [200, 400, 600, 800, 700, 900, 850, 800, 780, 900, 950, 700],
  },
  benchmark: 78,
  audience: {
    total: 3210,
    segments: [
      { label: "New", value: 920 },
      { label: "Returning", value: 1800 },
      { label: "VIP", value: 490 },
    ],
    gender: [ { label: "Male", value: 1600 }, { label: "Female", value: 1610 } ],
    age: [ { label: "18-24", value: 800 }, { label: "25-34", value: 1200 }, { label: "35-44", value: 800 }, { label: "45+", value: 410 } ],
    geography: [ { label: "US", value: 1800 }, { label: "EU", value: 900 }, { label: "APAC", value: 510 } ],
    aiInsight: "Most effective with returning customers who viewed >2 products.",
  },
  messages: [
    { text: "Hi Alex, you left your Nike Airs in the cart. Here’s 10% off if you complete your order today.", open: "62%", click: "24%", conv: "11%" },
    { text: "Hey Jamie, your cart is waiting! Finish checkout for a special offer.", open: "54%", click: "19%", conv: "8%" },
    { text: "Don’t miss out! Your items are almost gone. Complete your purchase now.", open: "51%", click: "17%", conv: "7%" },
  ],
  abTest: [
    { variant: "A", subject: "Forgot something?", ctr: "12%" },
    { variant: "B", subject: "Your cart is waiting ⏰", ctr: "18%", winner: true },
  ],
  control: {
    wait: 24,
    discount: 10,
    eligibility: "Returning customers only",
  },
  confidence: 92,
  holdout: 1200,
};

export default function TriggerDrilldownPage() {
  const [status, setStatus] = useState(trigger.status);
  const [wait, setWait] = useState(trigger.control.wait);
  const [discount, setDiscount] = useState(trigger.control.discount);
  const [eligibility, setEligibility] = useState(trigger.control.eligibility);

  // Mock recent messages data
  const recentMessages = [
    { customer: "Alex Smith", message: "Hi Alex, you left your Nike Airs in the cart...", sent: "2025-08-25 14:32", status: "Opened" },
    { customer: "Jamie Lee", message: "Hey Jamie, your cart is waiting! Finish checkout...", sent: "2025-08-25 13:10", status: "Delivered" },
    { customer: "Priya Patel", message: "Don’t miss out! Your items are almost gone...", sent: "2025-08-25 12:45", status: "Opened" },
    { customer: "John Doe", message: "Hi John, you left your Adidas shoes in the cart...", sent: "2025-08-25 12:20", status: "Clicked" },
    { customer: "Sara Kim", message: "Hey Sara, your cart is waiting! Finish checkout...", sent: "2025-08-25 11:55", status: "Sent" },
  ];

  return (
    <div style={{ background: "#f4f6fa", minHeight: "100vh", padding: 32 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 800 }}>{trigger.name}</h1>
          <div style={{ color: "#888", fontSize: 15, marginBottom: 4 }}>{trigger.description}</div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ background: status ? "#eaffea" : "#ffeaea", color: status ? "#2ecc40" : "#e74c3c", borderRadius: 8, padding: "4px 12px", fontWeight: 600, fontSize: 14, cursor: "pointer" }} onClick={() => setStatus(!status)}>{status ? "ON" : "OFF"}</span>
        </div>
      </div>
      {/* KPIs */}
      <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
        {trigger.kpis.map((kpi) => (
          <div key={kpi.label} style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #0001", padding: 24, minWidth: 140, flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 700 }}>{kpi.value}</div>
            <div style={{ color: "#888", fontSize: 15 }}>{kpi.label}</div>
          </div>
        ))}
      </div>
      {/* Performance Overview */}
      <div style={{ display: "flex", gap: 24, marginBottom: 24, flexWrap: "wrap" }}>
        <div style={{ background: "#fff", borderRadius: 12, padding: 24, flex: 2, minWidth: 320 }}>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Funnel</div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {trigger.funnel.map((step, idx) => (
              <React.Fragment key={step.label}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 700, fontSize: 18 }}>{step.value}{step.label === "Revenue" ? "$" : ""}</div>
                  <div style={{ color: "#888", fontSize: 14 }}>{step.label}</div>
                </div>
                {idx < trigger.funnel.length - 1 && <span style={{ fontSize: 24, color: "#bbb" }}>→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div style={{ background: "#fff", borderRadius: 12, padding: 24, flex: 2, minWidth: 320 }}>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Trends</div>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
            <div>
              <div style={{ color: "#0070f3", fontWeight: 600, fontSize: 13, marginBottom: 2 }}>Sent</div>
              <Sparklines data={trigger.trend.sent} width={120} height={40} margin={4}>
                <SparklinesLine color="#0070f3" />
              </Sparklines>
            </div>
            <div>
              <div style={{ color: "#00b894", fontWeight: 600, fontSize: 13, marginBottom: 2 }}>Revenue</div>
              <Sparklines data={trigger.trend.revenue} width={120} height={40} margin={4}>
                <SparklinesLine color="#00b894" />
              </Sparklines>
            </div>
          </div>
          <div style={{ color: "#888", fontSize: 14, marginTop: 8 }}>Benchmark: This trigger performs better than <b>{trigger.benchmark}%</b> of others.</div>
        </div>
      </div>
      {/* Audience Insights */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Audience Insights</div>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 500, marginBottom: 4 }}>Segments</div>
            {trigger.audience.segments.map((seg) => (
              <div key={seg.label} style={{ color: "#0070f3", fontWeight: 600 }}>{seg.label}: <span style={{ color: "#444" }}>{seg.value}</span></div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 500, marginBottom: 4 }}>Gender</div>
            {trigger.audience.gender.map((g) => (
              <div key={g.label} style={{ color: "#00b894", fontWeight: 600 }}>{g.label}: <span style={{ color: "#444" }}>{g.value}</span></div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 500, marginBottom: 4 }}>Age</div>
            {trigger.audience.age.map((a) => (
              <div key={a.label} style={{ color: "#e67e22", fontWeight: 600 }}>{a.label}: <span style={{ color: "#444" }}>{a.value}</span></div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 500, marginBottom: 4 }}>Geography</div>
            {trigger.audience.geography.map((geo) => (
              <div key={geo.label} style={{ color: "#888", fontWeight: 600 }}>{geo.label}: <span style={{ color: "#444" }}>{geo.value}</span></div>
            ))}
          </div>
        </div>
        <div style={{ color: "#0070f3", fontWeight: 500, marginTop: 12 }}><FaInfoCircle style={{ marginRight: 6 }} />{trigger.audience.aiInsight}</div>
      </div>
      {/* Message Samples */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Message Samples</div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {trigger.messages.map((msg, idx) => (
            <div key={idx} style={{ background: "#f7f7f7", borderRadius: 8, padding: 16, minWidth: 220, flex: 1 }}>
              <div style={{ color: "#444", fontSize: 15, marginBottom: 8 }}><i>“{msg.text}”</i></div>
              <div style={{ color: "#888", fontSize: 13 }}>Open: {msg.open} | Click: {msg.click} | Conv: {msg.conv}</div>
            </div>
          ))}
        </div>
      </div>
      {/* A/B & Variant Results */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>A/B & Variant Results</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f7f7f7" }}>
              <th style={{ textAlign: "left", padding: 8 }}>Variant</th>
              <th style={{ textAlign: "left", padding: 8 }}>Subject</th>
              <th style={{ textAlign: "right", padding: 8 }}>CTR</th>
              <th style={{ textAlign: "center", padding: 8 }}>Winner</th>
            </tr>
          </thead>
          <tbody>
            {trigger.abTest.map((v) => (
              <tr key={v.variant}>
                <td style={{ padding: 8 }}>{v.variant}</td>
                <td style={{ padding: 8 }}>{v.subject}</td>
                <td style={{ padding: 8, textAlign: "right" }}>{v.ctr}</td>
                <td style={{ padding: 8, textAlign: "center" }}>{v.winner ? <FaCheckCircle color="#2ecc40" /> : null}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Control Panel */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Control Panel</div>
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <label style={{ fontWeight: 500 }}>Wait time: </label>
            <input type="number" value={wait} onChange={e => setWait(Number(e.target.value))} style={{ width: 60, marginLeft: 4, borderRadius: 4, border: "1px solid #ccc", padding: 4 }} /> h
          </div>
          <div>
            <label style={{ fontWeight: 500 }}>Discount: </label>
            <input type="number" value={discount} onChange={e => setDiscount(Number(e.target.value))} style={{ width: 60, marginLeft: 4, borderRadius: 4, border: "1px solid #ccc", padding: 4 }} /> %
          </div>
          <div>
            <label style={{ fontWeight: 500 }}>Eligibility: </label>
            <input type="text" value={eligibility} onChange={e => setEligibility(e.target.value)} style={{ width: 180, marginLeft: 4, borderRadius: 4, border: "1px solid #ccc", padding: 4 }} />
          </div>
          <button style={{ background: "#fff7ea", color: "#e67e22", border: "1px solid #e67e22", borderRadius: 8, padding: "8px 18px", fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}><FaPause /> Pause Trigger</button>
          <button style={{ background: "#f7f7f7", color: "#0070f3", border: "1px solid #0070f3", borderRadius: 8, padding: "8px 18px", fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}><FaClone /> Clone Trigger</button>
          <button style={{ background: "#eaffea", color: "#2ecc40", border: "1px solid #2ecc40", borderRadius: 8, padding: "8px 18px", fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}><FaFileExport /> Export Data</button>
        </div>
      </div>
      {/* Confidence & Safety */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Confidence & Safety</div>
        <div style={{ color: "#2ecc40", fontWeight: 600, fontSize: 16, marginBottom: 4 }}>Confidence score: {trigger.confidence}%</div>
        <div style={{ color: "#888", fontSize: 15 }}>Holdout group: {trigger.holdout} customers (not sent message)</div>
        <div style={{ color: "#888", fontSize: 15 }}>Safety: Sample size {trigger.holdout} → results statistically valid.</div>
      </div>
      {/* Optimization Tip */}
      <div style={{ background: "#f7f7f7", borderRadius: 8, padding: 16, color: "#888", fontSize: 14 }}>
        <b>Tip:</b> Use A/B tests and segment insights to optimize your trigger for maximum ROI.
      </div>

      {/* Recent Messages Table */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 24, marginTop: 32, marginBottom: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Recent Messages Sent</span>
          <a href="./messages" style={{ color: '#0070f3', fontWeight: 500, fontSize: 15, textDecoration: 'underline', cursor: 'pointer' }}>View All</a>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 8 }}>
          <thead>
            <tr style={{ background: '#f7f7f7' }}>
              <th style={{ textAlign: 'left', padding: 8 }}>Customer</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Message</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Sent</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentMessages.map((msg, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: 8 }}>{msg.customer}</td>
                <td style={{ padding: 8, maxWidth: 220, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{msg.message}</td>
                <td style={{ padding: 8 }}>{msg.sent}</td>
                <td style={{ padding: 8 }}>{msg.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
// ...existing code...
