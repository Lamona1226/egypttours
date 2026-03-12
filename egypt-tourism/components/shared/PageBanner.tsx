interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps): JSX.Element {
  return (
    <section className="rounded-lg bg-[#134645] p-6">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      {subtitle && <p className="mt-2 text-[#D2C6B8]">{subtitle}</p>}
    </section>
  );
}
