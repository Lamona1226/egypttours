interface WhyChooseUsProps {}

export default function WhyChooseUs({}: WhyChooseUsProps): JSX.Element {
  return (
    <section>
      <h2 className="text-2xl font-bold">Why Choose Us</h2>
      <ul className="mt-3 grid gap-2 text-sm md:grid-cols-3">
        <li>Licensed local guides</li>
        <li>Transparent pricing</li>
        <li>24/7 traveler support</li>
      </ul>
    </section>
  );
}
