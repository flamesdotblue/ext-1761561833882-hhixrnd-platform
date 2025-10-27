const cards = [
  {
    id: 'academics',
    title: 'Academic Programs',
    text:
      'Strong foundational learning across Science, Mathematics, Languages, and Humanities with a focus on critical thinking and problem solving.',
    img:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'achievements',
    title: 'Achievements',
    text:
      'Proud record in district-level exams, science fairs, and sports — celebrating the dedication of our students and teachers.',
    img:
      'https://images.unsplash.com/photo-1523246191841-1eb064f28453?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'student-life',
    title: 'Student Life',
    text:
      'Vibrant clubs and activities including music, debate, ICT, and community service fostering leadership and creativity.',
    img:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Highlights() {
  return (
    <section id="academics" aria-labelledby="highlights-heading" className="py-12 sm:py-16 lg:py-20 bg-[#f0fdfa]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 id="highlights-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">Learning at a Glance</h2>
            <p className="mt-2 text-slate-700 max-w-2xl">Explore our programs, achievements, and student life that make our school a nurturing and dynamic place to learn.</p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fff9c4] text-slate-900 text-sm font-medium" aria-label="Highlighted info">
            Safe & inclusive campus
          </span>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.id} id={card.id} className="group rounded-2xl overflow-hidden bg-white border border-teal-100 shadow-sm focus-within:ring-2 focus-within:ring-teal-400">
              <div className="relative h-48">
                <img
                  src={card.img}
                  alt=""
                  className="h-full w-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x400?text=Image+Unavailable'; }}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5" aria-hidden="true" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-slate-700">{card.text}</p>
                <a href={`#${card.id}`} className="mt-4 inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded px-1">
                  Learn more
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
