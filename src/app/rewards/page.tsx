

'use client';
import React from 'react';
import WidgetCard from '@core/components/cards/widget-card';
import MetricCard from '@core/components/cards/metric-card';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, Legend, ResponsiveContainer } from 'recharts';
import { Text } from 'rizzui';

// Mock Data
const kpiData = [
	{ label: "Total Rewards Issued", value: "₹2,50,000" },
	{ label: "Total Rewards Redeemed", value: "₹1,25,000" },
	{ label: "Revenue Impact", value: "₹2,00,000" },
	{ label: "Customer Retention Uplift", value: "12%" },
	{ label: "Avg. Order Value (With vs Without Rewards)", value: "₹750 / ₹560" },
];

const loyaltyLineData = [
	{ month: "Jan", issued: 20000, redeemed: 12000 },
	{ month: "Feb", issued: 35000, redeemed: 20000 },
	{ month: "Mar", issued: 50000, redeemed: 30000 },
	{ month: "Apr", issued: 70000, redeemed: 45000 },
	{ month: "May", issued: 90000, redeemed: 60000 },
	{ month: "Jun", issued: 110000, redeemed: 80000 },
];

const couponPieData = [
	{ name: "Discount", value: 40, color: "#4F8CFF" },
	{ name: "Cashback", value: 25, color: "#34D399" },
	{ name: "Freeble", value: 20, color: "#FBBF24" },
	{ name: "BCGO", value: 15, color: "#F87171" },
];

const revenueBarData = [
	{ name: "Coupons", uplift: 50000 },
	{ name: "Loyalty", uplift: 120000 },
];

const loyaltySnapshot = {
	issued: 100000,
	redeemed: 50000,
	redemptionRate: "60%",
	topRules: 150,
};
const couponsSnapshot = {
	issued: 150000,
	redeemed: 75000,
	redemptionRate: "40%",
	topRules: 120,
};

const transactions = [
	{ id: "TXN001", customer: "Amit Kumar", reward: "Coupon", value: "₹500", bill: "₹2,000", date: "2025-09-20" },
	{ id: "TXN002", customer: "Priya Singh", reward: "Points", value: "₹300", bill: "₹1,500", date: "2025-09-19" },
	{ id: "TXN003", customer: "Rahul Jain", reward: "Coupon", value: "₹200", bill: "₹1,200", date: "2025-09-18" },
	{ id: "TXN004", customer: "Sneha Rao", reward: "Points", value: "₹400", bill: "₹1,800", date: "2025-09-17" },
	{ id: "TXN005", customer: "Vikram Patel", reward: "Coupon", value: "₹250", bill: "₹1,400", date: "2025-09-16" },
];

const leaderboard = [
	{ label: "Most Redeemed Coupon Campaign", value: "Cupiana" },
	{ label: "Best Performing Loyalty Rule", value: "Repeat Purchase" },
	{ label: "Highest ROI Reward Type", value: "Discount" },
	{ label: "Lowest Performing Reward", value: "Freeble" },
];

const aiRecommendations = [
	"Customers who responded well to cashback",
	"Send more to frequent buyers",
	"Simplify points redemption rules or lower min. spend",
	"Target churn risk customers with special offers",
];

const campaigns = [
	{ name: "Diwali Dhamaka", type: "Coupon", redemption: "30%", impact: "₹60,000", status: "Active" },
	{ name: "Loyalty Booster", type: "Loyalty", redemption: "45%", impact: "₹80,000", status: "Active" },
];


export default function RewardsDashboard() {
	return (
		<div className="space-y-8 p-6">
			{/* KPI Strip */}
			<WidgetCard title="Rewards Overview" className="p-4">
				<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
					{kpiData.map((kpi) => (
						<MetricCard key={kpi.label} title={kpi.label} metric={kpi.value} className="text-center min-w-[160px]" />
					))}
				</div>
			</WidgetCard>

			{/* Charts Row */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<WidgetCard title="Loyalty Issued vs Redeemed">
					<ResponsiveContainer width="100%" height={220}>
						<LineChart data={loyaltyLineData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line type="monotone" dataKey="issued" stroke="#4F8CFF" name="Issued" strokeWidth={2} />
							<Line type="monotone" dataKey="redeemed" stroke="#34D399" name="Redeemed" strokeWidth={2} />
						</LineChart>
					</ResponsiveContainer>
				</WidgetCard>
				<WidgetCard title="Coupon Usage by Type">
					<ResponsiveContainer width="100%" height={220}>
						<PieChart>
							<Pie data={couponPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
								{couponPieData.map((entry, idx) => (
									<Cell key={`cell-${idx}`} fill={entry.color} />
								))}
							</Pie>
							<Legend />
							<Tooltip />
						</PieChart>
					</ResponsiveContainer>
				</WidgetCard>
			</div>

			<WidgetCard title="Revenue Uplift (Coupons vs Loyalty)">
				<ResponsiveContainer width="100%" height={220}>
					<BarChart data={revenueBarData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="uplift" fill="#4F8CFF" radius={[8, 8, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</WidgetCard>

			{/* Rewards Program Split */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<WidgetCard title="Loyalty Points Snapshot">
					<div className="space-y-2">
						<div>Total Issued: <span className="font-bold">{loyaltySnapshot.issued.toLocaleString()}</span></div>
						<div>Redeemed: <span className="font-bold">{loyaltySnapshot.redeemed.toLocaleString()}</span></div>
						<div>Redemption Rate: <span className="font-bold">{loyaltySnapshot.redemptionRate}</span></div>
						<div>Top Rules Performance: <span className="font-bold">{loyaltySnapshot.topRules}</span></div>
					</div>
				</WidgetCard>
				<WidgetCard title="Coupons Snapshot">
					<div className="space-y-2">
						<div>Total Issued: <span className="font-bold">{couponsSnapshot.issued.toLocaleString()}</span></div>
						<div>Redeemed: <span className="font-bold">{couponsSnapshot.redeemed.toLocaleString()}</span></div>
						<div>Redemption Rate: <span className="font-bold">{couponsSnapshot.redemptionRate}</span></div>
						<div>Top Rules Performance: <span className="font-bold">{couponsSnapshot.topRules}</span></div>
					</div>
				</WidgetCard>
			</div>

			{/* Customer Impact & Engagement & Transactions */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<WidgetCard title="Customer Impact & Engagement">
					<div className="space-y-2">
						<div>Top Customers by rewards usage: <span className="font-bold">Amit Kumar, Priya Singh</span></div>
						<div>Repeat Purchase Rate (with vs without rewards): <span className="font-bold">45% / 28%</span></div>
						<div>New Customers Acquired: <span className="font-bold">150</span></div>
						<div>Churn Risk Reduction: <span className="font-bold">12%</span></div>
					</div>
				</WidgetCard>
				<WidgetCard title="Transactions with Rewards">
					<div className="overflow-x-auto">
						<table className="min-w-full text-sm border">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-2 py-2 border">Transaction ID</th>
									<th className="px-2 py-2 border">Customer</th>
									<th className="px-2 py-2 border">Reward Used</th>
									<th className="px-2 py-2 border">Reward Value</th>
									<th className="px-2 py-2 border">Final Bill</th>
									<th className="px-2 py-2 border">Date</th>
								</tr>
							</thead>
							<tbody>
								{transactions.map((txn) => (
									<tr key={txn.id} className="border-b">
										<td className="px-2 py-1 border">{txn.id}</td>
										<td className="px-2 py-1 border">{txn.customer}</td>
										<td className="px-2 py-1 border">{txn.reward}</td>
										<td className="px-2 py-1 border">{txn.value}</td>
										<td className="px-2 py-1 border">{txn.bill}</td>
										<td className="px-2 py-1 border">{txn.date}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</WidgetCard>
			</div>

			{/* Effectiveness Leaderboard & AI Recommendations */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<WidgetCard title="Effectiveness Leaderboard">
					<ul className="space-y-1">
						{leaderboard.map((item) => (
							<li key={item.label} className="flex justify-between">
								<span>{item.label}</span>
								<span className="font-bold">{item.value}</span>
							</li>
						))}
					</ul>
				</WidgetCard>
				<WidgetCard title="AI Recommendations & Next Actions">
					<ul className="list-disc pl-5 space-y-1">
						{aiRecommendations.map((rec, idx) => (
							<li key={idx}>{rec}</li>
						))}
					</ul>
				</WidgetCard>
			</div>

			{/* Active & Upcoming Campaigns */}
			<WidgetCard title="Active & Upcoming Campaigns" className="relative">
				<div className="flex gap-2 absolute right-4 top-4">
					<button className="border rounded px-3 py-1 text-xs font-medium hover:bg-gray-100">Create New Coupon</button>
					<button className="border rounded px-3 py-1 text-xs font-medium hover:bg-gray-100">Edit Loyalty Rule</button>
				</div>
				<div className="overflow-x-auto mt-12">
					<table className="min-w-full text-sm border">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-2 py-2 border">Campaign</th>
								<th className="px-2 py-2 border">Type</th>
								<th className="px-2 py-2 border">Redemption %</th>
								<th className="px-2 py-2 border">Impact</th>
								<th className="px-2 py-2 border">Status</th>
							</tr>
						</thead>
						<tbody>
							{campaigns.map((c) => (
								<tr key={c.name} className="border-b">
									<td className="px-2 py-1 border">{c.name}</td>
									<td className="px-2 py-1 border">{c.type}</td>
									<td className="px-2 py-1 border">{c.redemption}</td>
									<td className="px-2 py-1 border">{c.impact}</td>
									<td className="px-2 py-1 border">{c.status}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</WidgetCard>
		</div>
	);
}
