import React from 'react';

const DataTable: React.FC = () => {

	return (
		<div className="flex w-full flex-1 min-h-0 overflow-hidden bg-white">
			<div className="flex flex-1 flex-col min-h-0">
				<div className="flex h-14 items-center gap-4 border-b border-neutral-200 px-6">
					<div className="h-6 w-40 rounded bg-neutral-200" />
					<div className="flex-1" />
					<div className="h-8 w-32 rounded bg-neutral-100" />
					<div className="h-8 w-24 rounded bg-neutral-900" />
				</div>

				<div className="flex h-12 items-center gap-2 border-b border-neutral-200 px-6">
					<div className="h-7 w-28 rounded-full bg-neutral-100" />
					<div className="h-7 w-28 rounded-full bg-neutral-100" />
					<div className="h-7 w-28 rounded-full bg-neutral-100" />
					<div className="flex-1" />
					<div className="h-7 w-48 rounded bg-neutral-100" />
				</div>

				<div className="flex-1 overflow-auto">
					<div className="min-w-full">
						<div className="sticky top-0 flex h-10 items-center border-b border-neutral-200 bg-neutral-100 px-4">
							<div className="h-5 w-12 rounded bg-neutral-200" />
							<div className="ml-4 h-5 w-48 rounded bg-neutral-200" />
							<div className="ml-4 h-5 w-40 rounded bg-neutral-200" />
							<div className="ml-4 h-5 w-32 rounded bg-neutral-200" />
							<div className="ml-4 h-5 w-32 rounded bg-neutral-200" />
							<div className="ml-4 h-5 w-24 rounded bg-neutral-200" />
							<div className="flex-1" />
							<div className="h-5 w-20 rounded bg-neutral-200" />
						</div>

						{Array.from({ length: 12 }).map((_, index) => (
							<div
								key={index}
								className="flex h-14 items-center border-b border-neutral-100 px-4 hover:bg-neutral-50"
							>
								<div className="h-5 w-12 rounded bg-neutral-200" />
								<div className="ml-4 h-5 w-48 rounded bg-neutral-100" />
								<div className="ml-4 h-5 w-40 rounded bg-neutral-100" />
								<div className="ml-4 h-5 w-32 rounded bg-neutral-100" />
								<div className="ml-4 h-5 w-32 rounded bg-neutral-100" />
								<div className="ml-4 h-5 w-24 rounded bg-neutral-200" />
								<div className="flex-1" />
								<div className="flex w-20 gap-2">
									<div className="h-6 w-6 rounded bg-neutral-200" />
									<div className="h-6 w-6 rounded bg-neutral-200" />
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="flex h-12 items-center justify-between border-t border-neutral-200 px-6">
					<div className="h-5 w-32 rounded bg-neutral-200" />
					<div className="flex gap-2">
						<div className="h-8 w-8 rounded bg-neutral-100" />
						<div className="h-8 w-8 rounded bg-neutral-200" />
						<div className="h-8 w-8 rounded bg-neutral-100" />
						<div className="h-8 w-8 rounded bg-neutral-100" />
						<div className="h-8 w-8 rounded bg-neutral-100" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataTable;
