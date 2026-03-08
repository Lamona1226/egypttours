interface TourPageProps {
  params: {
    slug: string;
  };
}

export default function TourDetailsPage({ params }: TourPageProps) {
  return (
    <article>
      <h1>Tour: {params.slug}</h1>
      <p>Tour details page scaffold.</p>
    </article>
  );
}
