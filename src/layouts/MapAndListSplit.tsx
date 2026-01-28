export default function MapAndListSplit() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="h-12 w-full border-b border-neutral-300 flex items-center px-4">
        <div className="h-8 w-32 bg-black rounded mr-4" />

        <div className="h-12 w-160 bg-neutral-300 rounded-2xl mx-4" />

        <div className="flex-1" />

        <div className="h-8 w-8 bg-neutral-300 rounded-full ml-4" />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 flex flex-col">
          <div className="h-12 flex gap-4 bg-white p-2 border-b border-neutral-300">
            <div className="h-full w-24 bg-neutral-300 rounded-2xl" />
            <div className="h-full w-24 bg-neutral-300 rounded-2xl" />
            <div className="h-full w-24 bg-neutral-300 rounded-2xl" />
          </div>

          <div className="flex-1 overflow-auto overflow-y-hidden p-5 flex flex-col gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex p-2 rounded-2xl hover:bg-neutral-100"
              >
                <div className="w-72 h-48 bg-neutral-300 rounded-2xl shrink-0" />

                <div className="flex flex-col gap-2 p-4 flex-1">
                  <div className="h-4 w-[30%] bg-neutral-300 rounded-lg" />
                  <div className="h-6 w-[75%] bg-neutral-300 rounded-lg" />
                  <div className="h-4 w-[50%] bg-neutral-300 rounded-lg" />

                  <div className="mt-auto h-6 w-24 bg-neutral-300 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 h-full bg-neutral-300 relative">
          <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg" />
          <div className="absolute top-18 left-4 w-12 h-12 bg-white rounded-lg" />

          <div className="absolute top-20 left-32 h-8 px-3 bg-white rounded-full" />
          <div className="absolute top-40 right-48 h-8 px-3 bg-white rounded-full" />
          <div className="absolute bottom-8 left-48 h-8 px-3 bg-white rounded-full" />
          <div className="absolute bottom-0 right-32 h-8 px-3 bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
}
