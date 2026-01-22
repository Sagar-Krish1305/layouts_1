export default function SidebarAndContent() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="w-64 border-r border-neutral-300 flex flex-col gap-1 p-2">
        <div className="h-12 bg-black rounded mb-3" />

        <div className="h-10 bg-neutral-300 rounded" />
        <div className="h-10 bg-neutral-300 rounded" />
        <div className="h-10 bg-neutral-300 rounded" />
        <div className="h-10 bg-neutral-300 rounded" />

        <hr className="my-3 h-0.5 border-none bg-neutral-300" />

        <div className="h-10 bg-neutral-300 rounded" />
        <div className="h-10 bg-neutral-300 rounded" />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="h-16 border-b border-neutral-300 flex items-center gap-2 p-3">
          <div className="w-10 h-full bg-neutral-300 rounded-lg" />
          <div className="w-10 h-full bg-neutral-300 rounded-lg" />

          <div className="flex-1" />

          <div className="w-80 h-full bg-neutral-300 rounded-lg mr-2" />
        </div>

        <div className="flex-1 overflow-auto p-8 flex flex-col">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i}>
              <div className="h-12 px-2 flex items-center gap-3">
                <div className="w-6 h-6 bg-neutral-300 rounded" />
                <div className="w-6 h-6 bg-neutral-300 rounded" />
                <div className="w-40 h-5 bg-neutral-300 rounded" />
                <div className="flex-1 h-5 bg-neutral-300 rounded" />
                <div className="w-16 h-5 bg-neutral-300 rounded" />
              </div>

              <hr className="my-3 h-0.5 border-none bg-neutral-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
