export default function FilterAndGrid() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="h-16 w-full border-b border-neutral-300 flex items-center justify-between px-4">
        <div className="h-8 w-32 bg-black rounded mr-4" />

        <div className="h-10 w-80 bg-neutral-300 rounded-full mx-4" />

        <div className="h-8 w-8 bg-neutral-300 rounded-full ml-4" />
      </div>

      <div className="flex flex-1">
        <div className="w-80 border-r border-neutral-300 flex flex-col p-4 gap-4">
          <div className="flex flex-col gap-2">
            <div className="h-6 w-24 bg-black rounded" />
            <div className="h-10 w-full bg-neutral-300 rounded" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="h-6 w-32 bg-black rounded" />
            <div className="h-2 w-full bg-neutral-300 rounded" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="h-6 w-24 bg-black rounded" />
            <div className="h-8 w-full bg-neutral-300 rounded" />
            <div className="h-8 w-full bg-neutral-300 rounded" />
            <div className="h-8 w-full bg-neutral-300 rounded" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="h-6 w-24 bg-black rounded" />
            <div className="h-8 w-full bg-neutral-300 rounded" />
            <div className="h-8 w-full bg-neutral-300 rounded" />
          </div>
        </div>

        <div className="flex flex-1 flex-col overflow-auto p-8">
          <div className="h-12 w-full flex justify-between mb-4">
            <div className="h-6 w-48 bg-neutral-300 rounded" />
            <div className="h-8 w-32 bg-neutral-300 rounded" />
          </div>

          <div className="flex flex-col gap-4">
            {[0, 1].map((row) => (
              <div key={row} className="flex gap-4 h-80">
                {[0, 1, 2].map((card) => (
                  <div
                    key={card}
                    className="flex-1 bg-neutral-300 rounded-2xl overflow-hidden"
                  >
                    <div className="h-40 w-full bg-neutral-400" />

                    <div className="flex flex-col p-4 gap-2">
                      <div className="h-6 w-[70%] bg-neutral-500 rounded-lg" />
                      <div className="h-4 w-[50%] bg-neutral-500 rounded-lg" />
                      <div className="h-6 w-[30%] bg-neutral-400 rounded-lg mt-2" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
