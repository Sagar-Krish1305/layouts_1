type SideCard = { title: string; meta: string };

export default function CRMRecordDetails() {
	return (
		<div className="min-h-screen w-full bg-white text-slate-900 flex flex-col">
			{/* Navbar */}
			<header className="h-14 flex items-center justify-between px-6 border-b border-slate-200 gap-4">
				<div className="flex items-center gap-3">
					<div className="w-8 h-8 rounded-lg bg-slate-900" />
					<div className="w-48 h-6 rounded-md bg-slate-200" />
				</div>

				<div className="flex items-center gap-3">
					<div className="w-32 h-8 rounded-lg bg-slate-200" />
					<div className="w-32 h-8 rounded-lg bg-slate-900" />
				</div>
			</header>

			{/* header */}
			<div className="flex items-center gap-4 p-6 border-b border-slate-200">
				<div className="h-20 w-20 rounded-full bg-slate-300" />

				<div className="flex flex-col gap-2 flex-1">
					<div className="w-64 h-8 bg-slate-300 rounded-lg" />
					<div className="w-96 h-5 bg-slate-200 rounded-md" />
					<div className="flex gap-3 mt-1">
						<div className="w-28 h-8 bg-white border border-slate-200 rounded-lg" />
						<div className="w-28 h-8 bg-white border border-slate-200 rounded-lg" />
					</div>
				</div>
			</div>

			{/* Main layout */}
			<div className="flex flex-1 min-h-0">
				<main className="flex-1 flex flex-col min-w-0">
					<div className="h-12 border-b border-slate-200 flex items-center gap-4 px-6">
						<div className="w-16 h-5 rounded-md bg-slate-900" />
						<div className="w-16 h-5 rounded-md bg-slate-200" />
						<div className="w-16 h-5 rounded-md bg-slate-200" />
						<div className="w-16 h-5 rounded-md bg-slate-200" />
					</div>

					{/* Content */}
					<div className="flex-1 overflow-auto p-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{Array.from({ length: 2 }).map((_, colIdx) => (
								<div key={colIdx} className="flex flex-col gap-4">
									<div className="w-48 h-6 bg-slate-200 rounded-md" />
									<div className="divide-y divide-slate-100">
										{Array.from({ length: 4 }).map((_, rowIdx) => (
											<div
												key={`${colIdx}-${rowIdx}`}
												className="flex items-center justify-between py-3"
											>
												<span className="w-32 h-4 rounded bg-slate-200" />
												<span className="w-44 h-3 rounded bg-slate-100" />
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</main>

				{/* Side panel */}
				<aside className="w-full md:w-72 lg:w-80 border-l border-slate-200 p-4 flex flex-col gap-3 shrink-0">
					<div className="w-32 h-5 bg-slate-200 rounded-md" />

					{Array.from({length: 5}, (_, i) => i + 1).map((_, idx) => (
						<div
							key={idx}
							className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm"
						>
							<div className="w-10 h-10 rounded-full bg-slate-200" />
							<div className="flex flex-col gap-1 flex-1">
								<div className="h-4 w-full bg-slate-200 rounded" />
								<div className="h-3 w-20 bg-slate-100 rounded" />
							</div>
						</div>
					))}
				</aside>
			</div>
		</div>
	);
}
