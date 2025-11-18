 "use client"

import React from "react";

// Mock all messages data
const allMessages = [
  { customer: "Alex Smith", message: "Hi Alex, you left your Nike Airs in the cart...", sent: "2025-08-25 14:32", status: "Opened", details: "Opened at 14:35, Clicked at 14:36" },
  { customer: "Jamie Lee", message: "Hey Jamie, your cart is waiting! Finish checkout...", sent: "2025-08-25 13:10", status: "Delivered", details: "Delivered at 13:11" },
  { customer: "Priya Patel", message: "Don’t miss out! Your items are almost gone...", sent: "2025-08-25 12:45", status: "Opened", details: "Opened at 12:47" },
  { customer: "John Doe", message: "Hi John, you left your Adidas shoes in the cart...", sent: "2025-08-25 12:20", status: "Clicked", details: "Opened at 12:22, Clicked at 12:23" },
  { customer: "Sara Kim", message: "Hey Sara, your cart is waiting! Finish checkout...", sent: "2025-08-25 11:55", status: "Sent", details: "Not yet opened" },
  // ...more mock data
];

export default function MessagesPage() {
  const [selected, setSelected] = React.useState<number | null>(null);

  return (
    <div style={{ background: "#f4f6fa", minHeight: "100vh", padding: 32 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>All Messages Sent</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 12, overflow: 'hidden' }}>
        <thead>
          <tr style={{ background: '#f7f7f7' }}>
            <th style={{ textAlign: 'left', padding: 8 }}>Customer</th>
            <th style={{ textAlign: 'left', padding: 8 }}>Message</th>
            <th style={{ textAlign: 'left', padding: 8 }}>Sent</th>
            <th style={{ textAlign: 'left', padding: 8 }}>Status</th>
            <th style={{ textAlign: 'center', padding: 8 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allMessages.map((msg, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: 8 }}>{msg.customer}</td>
              <td style={{ padding: 8, maxWidth: 220, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{msg.message}</td>
              <td style={{ padding: 8 }}>{msg.sent}</td>
              <td style={{ padding: 8 }}>{msg.status}</td>
              <td style={{ padding: 8, textAlign: 'center' }}>
                <button style={{ background: '#f7f7f7', color: '#0070f3', border: '1px solid #0070f3', borderRadius: 6, padding: '4px 12px', fontWeight: 500, cursor: 'pointer' }} onClick={() => setSelected(idx)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selected !== null && (
        <div style={{ marginTop: 24, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #0001' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Message Details</h2>
          <div><b>Customer:</b> {allMessages[selected].customer}</div>
          <div><b>Message:</b> {allMessages[selected].message}</div>
          <div><b>Sent:</b> {allMessages[selected].sent}</div>
          <div><b>Status:</b> {allMessages[selected].status}</div>
          <div><b>Details:</b> {allMessages[selected].details}</div>
          <button style={{ marginTop: 16, background: '#ffeaea', color: '#e74c3c', border: '1px solid #e74c3c', borderRadius: 6, padding: '6px 16px', fontWeight: 500, cursor: 'pointer' }} onClick={() => setSelected(null)}>Close</button>
        </div>
      )}
    </div>
  );
}
