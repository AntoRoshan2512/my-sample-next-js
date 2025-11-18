import React from "react";
import PerformanceSummary from "./components/PerformanceSummary";
import SalesDeepDive from "./components/SalesDeepDive";
import ProductCategoryAnalytics from "./components/ProductCategoryAnalytics";
import InventoryHealth from "./components/InventoryHealth";
import PromotionsCampaignROI from "./components/PromotionsCampaignROI";
import PredictiveAIInsights from "./components/PredictiveAIInsights";
import RefundCancellationAnalysis from "./components/RefundCancellationAnalysis";

export default function AnalysisPage() {
	return (
		<main className="min-h-screen bg-[#fafbfc] py-8 px-2 md:px-8 lg:px-16">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="mb-8">
					<h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Store Analytics Overview</h1>
					<p className="text-lg text-gray-500">A comprehensive dashboard for your store’s performance, sales, inventory, and more.</p>
				</div>

				{/* Performance Summary Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{/* These cards should be replaced with real data and sparklines */}
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
						<span className="text-gray-500 text-sm">Revenue</span>
						<span className="text-2xl font-bold text-blue-700">$120,000</span>
						<span className="text-green-500 font-semibold text-xs">+8.2%</span>
						<div className="h-8">{/* sparkline */}</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
						<span className="text-gray-500 text-sm">Orders</span>
						<span className="text-2xl font-bold text-blue-700">1,200</span>
						<span className="text-green-500 font-semibold text-xs">+2.1%</span>
						<div className="h-8">{/* sparkline */}</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
						<span className="text-gray-500 text-sm">AOV</span>
						<span className="text-2xl font-bold text-blue-700">$100</span>
						<span className="text-gray-400 font-semibold text-xs">0.0%</span>
						<div className="h-8">{/* sparkline */}</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
						<span className="text-gray-500 text-sm">Margin</span>
						<span className="text-2xl font-bold text-blue-700">22%</span>
						<span className="text-green-500 font-semibold text-xs">+1.5%</span>
						<div className="h-8">{/* sparkline */}</div>
					</div>
				</div>

				{/* Main Analytics Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
					{/* Acquisition/Trend Card */}
					<div className="bg-white rounded-xl shadow p-6 col-span-1 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Sales Trend</h2>
						<div className="h-40 w-full bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg flex items-center justify-center text-blue-700">[Line Chart]</div>
					</div>
					{/* Device Sessions/Heatmap */}
					<div className="bg-white rounded-xl shadow p-6 col-span-1 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Day vs Hour Sales Heatmap</h2>
						<div className="h-40 w-full bg-gradient-to-br from-pink-100 to-pink-300 rounded-lg flex items-center justify-center text-pink-700">[Heatmap]</div>
					</div>
					{/* Top Traffic Source/Pie Chart */}
					<div className="bg-white rounded-xl shadow p-6 col-span-1 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Payment Method Split</h2>
						<div className="h-40 w-full bg-gradient-to-br from-purple-100 to-purple-300 rounded-lg flex items-center justify-center text-purple-700">[Pie Chart]</div>
					</div>
				</div>

				{/* Audience/Bar/Donut/Matrix Section */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Top Products</h2>
						<div className="h-32 w-full bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-700">[Bar Chart]</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Category Contribution</h2>
						<div className="h-32 w-full bg-purple-100 rounded-lg flex items-center justify-center text-purple-700">[Donut Chart]</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Profitability Matrix</h2>
						<div className="h-32 w-full bg-green-100 rounded-lg flex items-center justify-center text-green-700">[Matrix]</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Slow Movers / Dead Stock</h2>
						<div className="h-32 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">[List/Table]</div>
					</div>
				</div>

				{/* Inventory Health Section */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Low Stock Alerts</h2>
						<div className="h-20 w-full bg-red-100 rounded-lg flex items-center justify-center text-red-700">[Alert List]</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Stock Turnover Rate</h2>
						<div className="h-20 w-full bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">[Turnover Chart]</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Aging Inventory</h2>
						<div className="h-20 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">[Aging Table]</div>
					</div>
				</div>

				{/* Promotions & Campaign ROI Section */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Campaign Uplift Timeline</h2>
						<div className="h-20 w-full bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700">[Timeline Chart]</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Discount vs Profit Impact</h2>
						<div className="h-20 w-full bg-pink-100 rounded-lg flex items-center justify-center text-pink-700">[Impact Chart]</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Cross-sell / Upsell Success</h2>
						<div className="h-20 w-full bg-green-100 rounded-lg flex items-center justify-center text-green-700">[Success Chart]</div>
					</div>
				</div>

				{/* Predictive & AI Insights Section */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Sales Forecast</h2>
						<div className="h-20 w-full bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">[Forecast Chart]</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Stock-out Prediction</h2>
						<div className="h-20 w-full bg-orange-100 rounded-lg flex items-center justify-center text-orange-700">[Prediction Chart]</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">AI Action Suggestions</h2>
						<div className="h-20 w-full bg-green-100 rounded-lg flex items-center justify-center text-green-700">[Reorder | Discontinue | Bundle]</div>
					</div>
				</div>

				{/* Refund & Cancellation Analysis Section */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Refund Trend</h2>
						<div className="h-20 w-full bg-red-100 rounded-lg flex items-center justify-center text-red-700">[Refund Trend Chart]</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
						<h2 className="font-semibold text-lg mb-2">Top Refunded Products</h2>
						<div className="h-20 w-full bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-700">[Refunded Products List]</div>
					</div>
				</div>

				{/* Example Table Section for Website Metrics */}
				<div className="bg-white rounded-xl shadow p-6 mb-8">
					<h2 className="font-semibold text-lg mb-4">Website Metrics</h2>
					<div className="overflow-x-auto">
						<table className="min-w-full text-sm">
							<thead>
								<tr className="text-gray-500 border-b">
									<th className="px-2 py-2 text-left">Channel</th>
									<th className="px-2 py-2 text-left">New Users</th>
									<th className="px-2 py-2 text-left">Engaged Sessions</th>
									<th className="px-2 py-2 text-left">Engagement Rate</th>
									<th className="px-2 py-2 text-left">Engagement Time</th>
									<th className="px-2 py-2 text-left">Bounce Rate</th>
									<th className="px-2 py-2 text-left">Activity</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b">
									<td className="px-2 py-2">Amazon</td>
									<td className="px-2 py-2">575</td>
									<td className="px-2 py-2">9844</td>
									<td className="px-2 py-2 text-green-600">70.03%</td>
									<td className="px-2 py-2">36m 11s</td>
									<td className="px-2 py-2 text-red-600">34.11%</td>
									<td className="px-2 py-2">[Graph]</td>
								</tr>
								<tr className="border-b">
									<td className="px-2 py-2">Youtube</td>
									<td className="px-2 py-2">706</td>
									<td className="px-2 py-2">1866</td>
									<td className="px-2 py-2 text-yellow-600">53.99%</td>
									<td className="px-2 py-2">2m 45s</td>
									<td className="px-2 py-2 text-yellow-600">21.19%</td>
									<td className="px-2 py-2">[Graph]</td>
								</tr>
								{/* ...more rows... */}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</main>
	);
}
