	const rightRailProps = {
		recommendedActions: [
			'Send 20% combo coupon',
			'Invite to loyalty-tier upsell',
			'Follow-up on feedback',
			'Add to VIP campaign',
		],
		journeyStages: [
			'Joined (2023-01-01)',
			'First Purchase (2023-02-15)',
			'VIP (2023-06-10)',
		],
		segments: ['VIP', 'Loyalty', 'Frequent', 'New'],
		files: ['contract.pdf', 'invoice_123.pdf', 'profile_photo.jpg'],
		quickMetrics: ['Total Spend: $5,000', 'Visits: 32', 'Last Visit: 2023-07-01'],
	};
import Sidebar from "@/components/crm/customerProfile/Sidebar";
import SummaryHeader from "@/components/crm/customerProfile/SummaryHeader";
import InsightsTimeline from "@/components/crm/customerProfile/InsightsTimeline";
import RightRail from "@/components/crm/customerProfile/RightRail";

export default function CustomerProfilePage() {
	// Example props (replace with real data)
	const sidebarProps = {
		avatar: '/avatar.png',
		name: 'Customer Name',
		badges: ['VIP', 'New', 'Frequent'],
		email: 'xxxxxx@xxxxx.com',
		phone: 'xxxxxxxxxxx',
		segments: ['Segment 1', 'Segment 2', 'Segment 3', 'Segment 8'],
		identity: [
			'Identity & administrative',
			'Contact details',
			'Alternate contacts',
			'Birthdate',
			'Anniversary',
			'Gender',
			'Language',
			'Timezone',
			'Address',
			'Account status & conent',
			'Marketing consent',
			'Subscription preferences',
		],
		quickActions: [
			'Send offer',
			'Create campaign',
			'Issue refund/warranty',
			'Start chat',
			'Add note',
			'Merge',
		],
	};

	const summaryHeaderProps = {
		title: 'Customer Profile',
		metrics: [
			{ label: 'LIFETIME VALUE', value: 'Fig.' },
			{ label: 'AVG. TICKET', value: 'Fig.' },
			{ label: 'VISITS (LAST 12 MO)', value: 'Fig.' },
			{ label: 'CHURN RISK %', value: 'Fig.' },
			{ label: 'ENGAGEMENT SCORE', value: 'Fig.' },
		],
	};


	const insightsTimelineProps = {
		spendVisits: (
			<div>
				<div className="font-semibold mb-2">Spend & Visits</div>
				<div className="h-24 bg-gray-200 rounded flex items-center justify-center mb-2">
					<span className="text-gray-400">[Area Chart]</span>
				</div>
				<div className="mt-2 text-xs text-gray-500 flex justify-center">Jan Feb Mar Apr May Jun</div>
			</div>
		),
		shoppingBehavior: (
			<div>
				<div className="font-semibold mb-2">Shopping behavior</div>
				<div>Top products</div>
				<div>Top categories</div>
				<div>Favourite combos <span className="bg-gray-100 rounded px-2 py-1 text-xs ml-2">Loyal</span></div>
			</div>
		),
		transactions: (
			<div>
				<div className="font-semibold mb-2">Transactions</div>
				<div className="text-xs">XXX $XXX</div>
				<div className="text-xs">20X $XXX</div>
				<div className="text-xs">3ax Items</div>
			</div>
		),
	};

	return (
		<div className="bg-gray-50 min-h-screen w-full max-w-screen overflow-x-auto p-8">
			{/* Header: Avatar, Name, Badges, Contact, Quick Actions */}
			<div className="flex items-center gap-8 mb-6">
				<img src={sidebarProps.avatar} alt="Avatar" className="w-24 h-24 rounded-full border" />
				<div className="flex-1">
					<div className="flex items-center gap-4">
						<span className="text-3xl font-bold">{sidebarProps.name}</span>
						<div className="flex gap-2">
							{sidebarProps.badges.map((badge, idx) => (
								<span key={idx} className="bg-gray-100 rounded px-3 py-1 text-sm font-semibold">{badge}</span>
							))}
						</div>
					</div>
					<div className="text-gray-500 mt-2">Primary contact ({sidebarProps.email})</div>
				</div>
				<div className="flex gap-2">
					{sidebarProps.quickActions.map((action, idx) => (
						<button key={idx} className="bg-blue-50 hover:bg-blue-100 text-blue-700 rounded px-4 py-2 text-sm font-medium border">{action}</button>
					))}
				</div>
			</div>

			{/* Metrics Row */}
			<div className="grid grid-cols-5 gap-6 mb-8">
				{summaryHeaderProps.metrics.map((m, idx) => (
					<div key={idx} className="bg-white rounded-xl border p-6 flex flex-col items-center justify-center">
						<div className="text-2xl font-bold">₹ {m.value}</div>
							<div className="text-xs text-gray-500 mt-2 uppercase tracking-wide">{m.label}</div>
						</div>
					))}
				</div>

				{/* Main Grid: Identity, Insights, RightRail */}
				<div className="grid grid-cols-3 gap-8">
					{/* Identity & Administrative */}
					<div className="bg-white rounded-xl border p-8">
						<h2 className="font-bold text-xl mb-4">Identity & administrative</h2>
						<div className="mb-2"><span className="font-semibold">Full contact details</span></div>
						<div className="mb-2"><span className="font-semibold">Alternate contacts</span></div>
						<div className="mb-2">Birthdate <span className="float-right">04/05/1991</span></div>
						<div className="mb-2">Anniversary <span className="float-right">04/03/2023</span></div>
						<div className="mb-2">Gender <span className="float-right">Female</span></div>
						<div className="mb-2">Language <span className="float-right">English</span></div>
						<div className="mb-2">Timezone <span className="float-right">Asia/Kolkata</span></div>
						<div className="mt-4 mb-2 font-semibold">Account status & consent</div>
						<div className="mb-2">Marketing consent <span className="float-right">Yes</span></div>
						<div className="mb-2">Subscription preferences <span className="float-right">Edit</span></div>
						<div className="mb-2">Do Not Disturb windows <span className="float-right">9:00PM-9:00AM</span></div>
						<div className="mb-2">Legal basis <span className="float-right">Legitimate interest</span></div>
						<div className="mb-2">Tags <span className="float-right">Loyal, High Value</span></div>
						<div className="mb-2">Segments <span className="float-right">VIP</span></div>
						<div className="mb-2">Loyalty tier <span className="float-right">Gold</span></div>
					</div>

					{/* Insights & Timeline */}
					<div className="bg-white rounded-xl border p-8">
						<h2 className="font-bold text-xl mb-4">Insights & timeline</h2>
						<div className="mb-6">
							<div className="font-semibold mb-2">Spend & Visits</div>
							<div className="h-32 bg-blue-100 rounded flex items-center justify-center mb-2">
								<span className="text-blue-400 text-2xl">[Area Chart]</span>
							</div>
							<div className="mt-2 text-xs text-gray-500 flex justify-center">Mon Tue Wed Thu Fri Sat Sun</div>
						</div>
						<div className="mb-6">
							<div className="font-semibold mb-2">Shopping behavior</div>
							<div className="grid grid-cols-2 gap-4">
								<div>
									<div className="font-semibold text-xs mb-1">Top 5 products</div>
									<ol className="list-decimal ml-4 text-xs text-gray-700">
										<li>McChicken Combo</li>
										<li>McVeggie Burger</li>
										<li>Oreo McFlurry</li>
										<li>McAloo Tikki Corn</li>
										<li>McAloo Tikki Corn</li>
									</ol>
								</div>
								<div>
									<div className="font-semibold text-xs mb-1">Top 3 tools</div>
									<ol className="list-decimal ml-4 text-xs text-gray-700">
										<li>MalOuten Comile</li>
										<li>McVeggie Burger</li>
										<li>Oreo McHarry</li>
									</ol>
								</div>
							</div>
						</div>
						<div className="mb-6">
							<div className="font-semibold mb-2">Visit heatmap</div>
							<div className="h-16 bg-gray-100 rounded flex items-center justify-center mb-2">
								<span className="text-gray-400">[Heatmap]</span>
							</div>
							<div className="mt-2 text-xs text-gray-500 flex justify-center">Regano barriert, REM at segment, Coohof Houis</div>
						</div>
						<div className="mb-6">
							<div className="font-semibold mb-2">Cohort & Benchmarking</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="text-xs text-gray-700">Days since last visit <span className="float-right">34</span></div>
								<div className="text-xs text-gray-700">Days until anniversary <span className="float-right">39</span></div>
								<div className="text-xs text-gray-700">Next predicted visit <span className="float-right">Mar 12</span></div>
								<div className="text-xs text-gray-700">Predicted spend <span className="float-right">$2,400</span></div>
							</div>
						</div>
					</div>

					{/* Right Rail: Actions, Profile Intelligence, Micro-Insights */}
					<div className="bg-white rounded-xl border p-8">
						<h2 className="font-bold text-xl mb-4">Actions, profile intelligence, and micro-insights</h2>
						<div className="mb-6">
							<div className="font-semibold mb-2">AI Quick Summary</div>
							<div className="bg-gray-100 rounded p-4 text-xs text-gray-700">High: value – last purchase 46 days ago. Orders one-day nearrings. Likely to respond to 20% combo discount.</div>
						</div>
						<div className="mb-6">
							<div className="font-semibold mb-2">Recommended actions</div>
							<ul className="list-disc ml-4 text-sm text-gray-700">
								<li>Send 20% combo coupon</li>
								<li>Invite to loyalty-tier upsell</li>
								<li>Follow-up on unresolved feedback</li>
								<li>Add to VIP campaign</li>
							</ul>
						</div>
						<div className="mb-6">
							<div className="font-semibold mb-2">Customer Journey</div>
							<div className="flex gap-2">
								<span className="text-xs text-blue-700">First touch</span>
								<span className="text-xs text-blue-700">First purchase</span>
								<span className="text-xs text-blue-700">Last purchase</span>
								<span className="text-xs text-blue-700">Major tickets</span>
							</div>
						</div>
						<div className="mb-6">
							<div className="font-semibold mb-2">Notes & tasks</div>
							<div className="text-xs text-gray-700">Owner notes: Hex. and text to unread</div>
							<div className="text-xs text-gray-700">Notes & tasks: etc.</div>
						</div>
						<div>
							<div className="font-semibold mb-2">Quick metrics</div>
							<div className="flex flex-col gap-2">
								<span className="bg-gray-100 rounded px-3 py-2 text-sm font-medium w-fit">Total Spend: $5,000</span>
								<span className="bg-gray-100 rounded px-3 py-2 text-sm font-medium w-fit">Visits: 32</span>
								<span className="bg-gray-100 rounded px-3 py-2 text-sm font-medium w-fit">Last Visit: 2023-07-01</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
