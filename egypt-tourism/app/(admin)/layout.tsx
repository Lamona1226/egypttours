import { redirect } from 'next/navigation';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps): JSX.Element {
  const isAuthenticated = true;
  if (!isAuthenticated) redirect('/');
  return <section className="space-y-4">{children}</section>;
}
