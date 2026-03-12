interface TourTimelineItem {
  time: string;
  activity: string;
}

interface TourTimelineProps {
  items: TourTimelineItem[];
}

export default function TourTimeline({ items }: TourTimelineProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="relative border-l-2 border-[#108E81] ml-3 md:ml-4 py-2 space-y-6">
      {items.map((item, index) => (
        <div key={index} className="relative pl-6 sm:pl-8">
          {/* Gold dot on the timeline */}
          <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 rounded-full bg-[#BBA27E] border-2 border-white ring-2 ring-[#BBA27E]/30" />
          
          <div className={`flex flex-col sm:flex-row sm:items-start sm:gap-4 pb-6 ${index !== items.length - 1 ? 'border-b border-gray-100' : ''}`}>
            {/* Time */}
            <div className="shrink-0 sm:w-28 pt-0.5">
              <span className="text-sm font-bold text-[#BBA27E]">{item.time}</span>
            </div>
            
            {/* Activity */}
            <div className="mt-1 sm:mt-0">
              <p className="text-sm text-gray-700 leading-relaxed">{item.activity}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
