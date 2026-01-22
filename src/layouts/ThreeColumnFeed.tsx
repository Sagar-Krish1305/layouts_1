export default function ThreeColumnFeed() {
  return (
    <div className="flex-1">
      <div className="flex h-screen overflow-hidden">
        <div className="w-64 h-full border border-neutral-300 p-2 flex flex-col gap-2">
          <div className="h-10 rounded bg-neutral-300" />
          <div className="h-10 rounded bg-neutral-300" />
          <div className="h-10 rounded bg-neutral-300" />
          <div className="h-10 rounded bg-neutral-300" />
          <div className="h-10 rounded bg-neutral-300" />

          <div className="flex-1" />

          <div className="h-12 rounded bg-black" />
        </div>

        <div className="flex flex-col flex-1 border border-neutral-300 py-2">
          <div className="h-14 border-b border-neutral-300" />

          <div className="flex-1 overflow-auto p-4 flex flex-col gap-4">
            <div className="h-40 rounded-xl bg-neutral-300" />
            <div className="h-60 rounded-xl bg-neutral-300" />
            <div className="h-40 rounded-xl bg-neutral-300" />
          </div>
        </div>

        <div className="w-80 h-full p-4 flex flex-col gap-4">
          <div className="h-10 rounded-full bg-neutral-300" />
          <div className="h-48 rounded-2xl bg-neutral-300" />
          <div className="h-64 rounded-2xl bg-neutral-300" />
        </div>
      </div>
    </div>
  )
}
