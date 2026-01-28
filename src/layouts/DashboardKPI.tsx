export default function DashboardKPI() {
	return (
		<div className="min-h-screen w-full bg-white text-slate-900 flex">
			{/* Left Navbar */}
			<nav className="w-16 bg-black p-2 flex flex-col gap-4">
				{Array.from({ length: 4 }).map((_, idx) => (
					<div key={idx} className="h-12 w-full rounded-md bg-slate-200" />
				))}
				<div className="mt-auto h-12 w-full rounded-full bg-slate-200" />
			</nav>

			{/* Main content */}
			<div className="flex-1 flex flex-col min-w-0">
				{/* Navbar */}
				<div className="h-14 border-b-2 border-slate-200 flex items-center justify-between px-4">
					<div className="w-48 h-6 rounded bg-slate-200" />
					<div className="flex items-center gap-4">
						<div className="w-32 h-8 rounded bg-slate-200" />
						<div className="w-8 h-8 rounded bg-slate-200" />
					</div>
				</div>

				<div className="flex-1 bg-slate-200 p-6 flex flex-col gap-6 overflow-auto">
					{/* cards */}
					<div className="flex flex-col md:flex-row gap-4">
						{Array.from({ length: 4 }).map((_, idx) => (
							<div key={idx} className="h-28 flex-1 rounded-xl bg-white" />
						))}
					</div>

					{/* Analytics + Chart */}
					<div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
						<div className="flex-1 bg-white rounded-xl p-4 flex flex-col gap-4">
							<div className="w-32 h-6 rounded bg-slate-200" />
							<div className="flex-1 rounded bg-slate-200" />
						</div>

						<div className="w-full lg:w-1/3 bg-white rounded-xl p-4 flex flex-col gap-4">
							<div className="w-24 h-6 rounded bg-slate-200" />
							<div className="flex-1 flex items-center justify-center">
								<div className="w-64 h-64 rounded-full border-[2rem] border-black border-t-slate-200" />
							</div>
						</div>
					</div>

					{/* Summary */}
					<div className="h-64 bg-white rounded-xl" />
				</div>
			</div>
		</div>
	);
}
