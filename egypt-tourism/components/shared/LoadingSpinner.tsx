interface LoadingSpinnerProps {
  label?: string;
}

export default function LoadingSpinner({ label = 'Loading...' }: LoadingSpinnerProps): JSX.Element {
  return <div className="animate-pulse text-sm text-slate-500">{label}</div>;
}
