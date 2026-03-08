interface AvailabilityCalendarProps {
  dates?: string[];
}

export default function AvailabilityCalendar({ dates = [] }: AvailabilityCalendarProps): JSX.Element {
  return (
    <div className="rounded-md border p-4">
      <h3 className="font-semibold">Availability</h3>
      <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
        {dates.length ? dates.map((date) => <li key={date}>{date}</li>) : <li>Dates will be announced soon.</li>}
      </ul>
    </div>
  );
}
