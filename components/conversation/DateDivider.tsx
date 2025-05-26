export default function DateDivider({ date }: { date: string }) {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="h-[1px] bg-gray-300 flex-1" />
      <div className="px-4 text-xs text-gray-400">{date}</div>
      <div className="h-[1px] bg-gray-300 flex-1" />
    </div>
  );
}