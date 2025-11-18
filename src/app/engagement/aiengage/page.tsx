
'use client';

import React, { useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaChevronRight, FaLightbulb, FaExclamationTriangle } from "react-icons/fa";

// Mock data (replace with real data fetching as needed)
const kpiData = [
	{
		label: "Total AI Messages",
		value: "1,492",
		trend: "+5%",
		spark: [1200, 1300, 1250, 1400, 1492],
		details: "AI message volume has grown steadily this month."
	},
	{
		label: "Revenue from AI",
		value: "$34,576",
		trend: "+12%",
		spark: [25000, 27000, 30000, 32000, 34576],
		details: "AI-driven revenue hit a new high."
	},
	{
		label: "Avg revenue per msg",
		value: "$23.15",
		trend: "+2%",
		spark: [21, 22, 22.5, 23, 23.15],
		details: "Each message is generating more value."
	},
	{
		label: "% orders influenced",
		value: "32%",
		trend: "+3%",
		spark: [25, 28, 30, 31, 32],
		details: "AI is influencing a larger share of orders."
	},
	{
		label: "Churn Reduction",
		value: "8%",
		trend: "+1%",
		spark: [5, 6, 7, 7.5, 8],
		details: "Churn is trending down thanks to AI."
	},
];

const activityTimeline = [
	{
		trigger: "Abandoned Cart",
		sent: 128,
		preview: "We save your cart for you!",
		openRate: "56%",
		clickRate: "21%",
		revenue: "$1,140",
		recipients: 128,
		paused: false,
	},
	{
		trigger: "Price Drop",
		sent: 240,
		preview: "Price dropped on items you viewed!",
		openRate: "48%",
		clickRate: "18%",
		revenue: "$2,300",
		recipients: 240,
		paused: false,
	},
];

const triggerPerformance = [
	{ trigger: "Abandoned Cart", sends: 3210, conv: "18%", revenue: "$12,000", roi: "4.2x" },
	{ trigger: "Birthday", sends: 980, conv: "20%", revenue: "$3,200", roi: "3.1x" },
	{ trigger: "Price Drop", sends: 120, conv: "15%", revenue: "$1,000", roi: "2.7x" },
];

const stories = [
	{
		journey: "Customer abandoned cart → msg → purchase $65",
		preview: "Hi Alex, you left something behind!",
		reaction: "Clicked, purchased",
		revenue: "$65",
	},
	{
		journey: "Price drop alert → msg → repeat purchase $230",
		preview: "Good news! Price dropped on your favorite item.",
		reaction: "Clicked, purchased",
		revenue: "$230",
	},
	{
		journey: "Birthday coupon → msg → upsell $120",
		preview: "Happy Birthday! Enjoy your special offer.",
		reaction: "Redeemed coupon, purchased",
		revenue: "$120",
	},
];

const triggers = [
	{ name: "Abandoned Cart", enabled: true },
	{ name: "Birthday", enabled: true },
	{ name: "Price Drop", enabled: true },
];

function KPIBar({ onDrilldown }: { onDrilldown: (idx: number) => void }) {
	return (
		<div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
			{kpiData.map((kpi, idx) => (
				<div
					key={kpi.label}
					style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #0001", padding: 24, minWidth: 180, flex: 1, cursor: "pointer", position: "relative" }}
					onClick={() => onDrilldown(idx)}
					title="Click for details"
				>
					<div style={{ fontSize: 28, fontWeight: 700 }}>{kpi.value}</div>
					<div style={{ color: "#888", fontSize: 15 }}>{kpi.label}</div>
					<div style={{ color: kpi.trend.startsWith("+") ? "#2ecc40" : "#e74c3c", fontWeight: 500, fontSize: 13 }}>{kpi.trend}</div>
					<div style={{ marginTop: 8 }}>
						<Sparklines data={kpi.spark} width={80} height={24} margin={4}>
							<SparklinesLine color="#0070f3" style={{ fill: "none" }} />
						</Sparklines>
					</div>
					<FaChevronRight style={{ position: "absolute", right: 16, top: 16, color: "#bbb" }} />
				</div>
			))}
		</div>
	);
}

function ActivityTimeline() {
	return (
		<div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #0001", padding: 24, marginBottom: 32 }}>
			<h2 style={{ fontSize: 20, marginBottom: 16 }}>AI Activity Timeline</h2>
			<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
				{activityTimeline.map((item, idx) => (
					<li key={item.trigger} style={{ marginBottom: 24, borderLeft: "3px solid #0070f3", paddingLeft: 16, position: "relative" }}>
						<div style={{ fontWeight: 600, fontSize: 16 }}>{item.trigger} <span style={{ color: "#888", fontWeight: 400 }}>→ {item.sent} sent</span></div>
						<div style={{ color: "#444", margin: "4px 0" }}>{item.preview}</div>
						<div style={{ fontSize: 13, color: "#666" }}>Opens {item.openRate} | Clicks {item.clickRate} | {item.revenue}</div>
						<div style={{ marginTop: 8 }}>
							<button style={{ marginRight: 8, padding: "4px 12px", borderRadius: 6, border: "1px solid #0070f3", background: "#f5faff", color: "#0070f3", cursor: "pointer" }}>View Recipients</button>
							<button style={{ padding: "4px 12px", borderRadius: 6, border: "1px solid #ccc", background: item.paused ? "#ffeaea" : "#fafafa", color: item.paused ? "#e74c3c" : "#888", cursor: "pointer" }}>{item.paused ? "Resume" : "Pause"}</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

function TriggerPerformance() {
	return (
		<div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #0001", padding: 24, marginBottom: 32 }}>
			<h2 style={{ fontSize: 20, marginBottom: 16 }}>Trigger Performance</h2>
			<table style={{ width: "100%", borderCollapse: "collapse" }}>
				<thead>
					<tr style={{ background: "#f7f7f7" }}>
						<th style={{ textAlign: "left", padding: 8 }}>Trigger</th>
						<th style={{ textAlign: "right", padding: 8 }}>Sends</th>
						<th style={{ textAlign: "right", padding: 8 }}>Conv Rate</th>
						<th style={{ textAlign: "right", padding: 8 }}>Revenue</th>
						<th style={{ textAlign: "right", padding: 8 }}>ROI</th>
					</tr>
				</thead>
				<tbody>
					{triggerPerformance.map((row) => (
						<tr key={row.trigger}>
							<td style={{ padding: 8 }}>{row.trigger}</td>
							<td style={{ padding: 8, textAlign: "right" }}>{row.sends}</td>
							<td style={{ padding: 8, textAlign: "right" }}>{row.conv}</td>
							<td style={{ padding: 8, textAlign: "right" }}>{row.revenue}</td>
							<td style={{ padding: 8, textAlign: "right" }}>{row.roi}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

function ControlPanel() {
	return (
		<div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #0001", padding: 24, marginBottom: 32 }}>
			<h2 style={{ fontSize: 20, marginBottom: 16 }}>Control Panel</h2>
			<div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
				{triggers.map((t) => (
					<div key={t.name} style={{ minWidth: 200, flex: 1 }}>
						<div style={{ fontWeight: 600, marginBottom: 8 }}>{t.name}</div>
						<label style={{ display: "flex", alignItems: "center", gap: 8 }}>
							<input type="checkbox" checked={t.enabled} readOnly style={{ accentColor: "#0070f3" }} />
							<span>{t.enabled ? "On" : "Off"}</span>
						</label>
						<div style={{ margin: "8px 0" }}>
							<label style={{ fontSize: 13, color: "#888" }}>Discount %: <input type="number" min={0} max={50} defaultValue={10} style={{ width: 50, marginLeft: 4 }} /></label>
						</div>
						<button style={{ padding: "4px 12px", borderRadius: 6, border: "1px solid #0070f3", background: "#f5faff", color: "#0070f3", cursor: "pointer" }}>View Recipients</button>
					</div>
				))}
			</div>
		</div>
	);
}

function Stories() {
	return (
		<div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #0001", padding: 24, marginBottom: 32 }}>
			<h2 style={{ fontSize: 20, marginBottom: 16 }}>Representative Stories</h2>
			<div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
				{stories.map((story, idx) => (
					<div key={idx} style={{ minWidth: 220, flex: 1, background: "#f7f7f7", borderRadius: 8, padding: 16 }}>
						<div style={{ fontWeight: 600, marginBottom: 4 }}>{story.journey}</div>
						<div style={{ color: "#0070f3", fontSize: 14, marginBottom: 4 }}>{story.preview}</div>
						<div style={{ color: "#888", fontSize: 13 }}>→ {story.reaction}</div>
						<div style={{ color: "#2ecc40", fontWeight: 500, marginTop: 4 }}>{story.revenue}</div>
					</div>
				))}
			</div>
		</div>
	);
}

function ConfidenceSafety() {
	return (
		<div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #0001", padding: 24, marginBottom: 32, display: "flex", flexDirection: "column", gap: 8 }}>
			<h2 style={{ fontSize: 20, marginBottom: 8 }}>Confidence & Safety</h2>
			<div style={{ fontSize: 15, color: "#444" }}>Holdout group applied: <b>5%</b> (n=500)</div>
			<div style={{ fontSize: 15, color: "#444" }}>Uplift vs control: <b>+12% revenue</b></div>
			<div style={{ fontSize: 15, color: "#444" }}>Confidence: <span style={{ color: "#2ecc40", fontWeight: 600 }}>95% <span style={{ background: "#eaffea", color: "#2ecc40", borderRadius: 6, padding: "2px 8px", marginLeft: 8 }}>AI Confidence</span></span></div>
		</div>
	);
}

function StickyActions() {
	return (
		<div style={{
			position: "sticky",
			bottom: 0,
			background: "#fff",
			boxShadow: "0 -2px 8px #0001",
			padding: 16,
			display: "flex",
			gap: 16,
			zIndex: 10,
			justifyContent: "flex-end",
			borderTopLeftRadius: 12,
			borderTopRightRadius: 12,
			marginTop: 32,
		}}>
			<button style={{ padding: "8px 20px", borderRadius: 8, border: "1px solid #0070f3", background: "#0070f3", color: "#fff", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>Adjust Rules</button>
			<button style={{ padding: "8px 20px", borderRadius: 8, border: "1px solid #e67e22", background: "#fff7ea", color: "#e67e22", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>Pause Trigger</button>
			<button style={{ padding: "8px 20px", borderRadius: 8, border: "1px solid #888", background: "#fafafa", color: "#444", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>Export Activity</button>
			<button style={{ padding: "8px 20px", borderRadius: 8, border: "1px solid #2ecc40", background: "#eaffea", color: "#2ecc40", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>View Recipients</button>
		</div>
	);
}

export default function AIEngagementPage() {
	// Drilldown state for KPI details
	const [drillIdx, setDrillIdx] = useState<number | null>(null);
	// Personalized insights and tips
	const bestTrigger = "Birthday";
	const quickTips = [
		{ tip: "Try increasing discount for Price Drop.", icon: <FaLightbulb color="#f7b731" style={{ marginRight: 6 }} /> },
		{ tip: "Send follow-ups 2 hours after cart abandonment for best results.", icon: <FaLightbulb color="#f7b731" style={{ marginRight: 6 }} /> },
	];
	// Simulated anomaly alert
	const anomaly = { show: true, msg: "Spike in abandoned carts detected!", icon: <FaExclamationTriangle color="#e74c3c" style={{ marginRight: 6 }} /> };

	return (
		<div style={{ background: "#f4f6fa", minHeight: "100vh", padding: 32, position: "relative" }}>
			<h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 24, letterSpacing: -1 }}>AI ENGAGEMENT — AUTOMATED PERSONALIZATION</h1>

			{/* Anomaly Alert */}
			{anomaly.show && (
				<div style={{ background: "#fff3f3", color: "#e74c3c", border: "1px solid #e74c3c33", borderRadius: 8, padding: 12, marginBottom: 16, display: "flex", alignItems: "center", fontWeight: 600, fontSize: 15 }}>
					{anomaly.icon} {anomaly.msg}
				</div>
			)}

			{/* Personalized Insights */}
			<div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 24 }}>
				<div style={{ background: "#eaffea", color: "#2ecc40", borderRadius: 8, padding: "8px 18px", fontWeight: 600, fontSize: 15 }}>
					Your best trigger this month: <b>{bestTrigger}</b>
				</div>
				{quickTips.map((q, i) => (
					<div key={i} style={{ background: "#f7f7f7", color: "#888", borderRadius: 8, padding: "8px 14px", display: "flex", alignItems: "center", fontSize: 14, fontWeight: 500 }}>
						{q.icon} {q.tip}
					</div>
				))}
			</div>

			{/* KPI Bar with Drilldown */}
			<KPIBar onDrilldown={setDrillIdx} />
			{drillIdx !== null && (
				<div style={{ background: "#fff", border: "1px solid #0070f322", borderRadius: 12, boxShadow: "0 2px 8px #0001", padding: 24, marginBottom: 24, marginTop: -16, position: "relative" }}>
					<div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{kpiData[drillIdx].label} Details</div>
					<div style={{ color: "#444", fontSize: 15, marginBottom: 8 }}>{kpiData[drillIdx].details}</div>
					<div style={{ width: 200 }}>
						<Sparklines data={kpiData[drillIdx].spark} width={200} height={40} margin={4}>
							<SparklinesLine color="#0070f3" style={{ fill: "none" }} />
						</Sparklines>
					</div>
					<button onClick={() => setDrillIdx(null)} style={{ position: "absolute", top: 12, right: 18, background: "none", border: "none", color: "#888", fontSize: 18, cursor: "pointer" }}>×</button>
				</div>
			)}

			<div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
				<div style={{ flex: 2, minWidth: 400 }}>
					<ActivityTimeline />
				</div>
				<div style={{ flex: 1, minWidth: 320 }}>
					<TriggerPerformance />
				</div>
			</div>
			<div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
				<div style={{ flex: 2, minWidth: 400 }}>
					<ControlPanel />
				</div>
				<div style={{ flex: 1, minWidth: 320 }}>
					<Stories />
					<ConfidenceSafety />
				</div>
			</div>
			<StickyActions />
		</div>
	);
}
