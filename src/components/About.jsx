export default function About() {
  return (
    <section id="about-us" aria-labelledby="about-heading" className="py-12 sm:py-16 lg:py-20 bg-[#e0f2f1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <h2 id="about-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">About Our School</h2>
          <p className="mt-2 text-slate-700 max-w-2xl">Rooted in community and culture, we provide holistic education that balances academic excellence with character development and creativity.</p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          <article className="rounded-xl bg-white p-6 shadow-sm border border-teal-100" aria-labelledby="mission">
            <h3 id="mission" className="text-lg font-semibold text-slate-900">Our Mission</h3>
            <p className="mt-2 text-slate-700">To inspire a love for learning and foster responsible, compassionate citizens through inclusive, student-centered education.</p>
          </article>
          <article className="rounded-xl bg-white p-6 shadow-sm border border-teal-100" aria-labelledby="vision">
            <h3 id="vision" className="text-lg font-semibold text-slate-900">Our Vision</h3>
            <p className="mt-2 text-slate-700">To be a beacon of excellence in Nepal, where every learner discovers their potential and contributes meaningfully to society.</p>
          </article>
          <article className="rounded-xl bg-white p-6 shadow-sm border border-teal-100" aria-labelledby="values">
            <h3 id="values" className="text-lg font-semibold text-slate-900">Our Values</h3>
            <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
              <li>Integrity and respect</li>
              <li>Curiosity and innovation</li>
              <li>Community and collaboration</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
