const items = [
  {
    id: 1,
    title: 'Admissions Open for 2082 (2025)',
    date: '2025-03-01',
    summary: 'Apply now for Grade 1–12. Scholarships available for meritorious students.',
  },
  {
    id: 2,
    title: 'Science Exhibition Winners Announced',
    date: '2025-02-15',
    summary: 'Congratulations to our innovators for outstanding projects showcasing renewable energy.',
  },
  {
    id: 3,
    title: 'Parent–Teacher Meeting (Grade 8–10)',
    date: '2025-01-28',
    summary: 'Join us to discuss student progress and strategies for exam preparation.',
  },
];

function formatDate(d) {
  try {
    const date = new Date(d + 'T00:00:00');
    return new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
  } catch {
    return d;
  }
}

export default function NewsEvents() {
  return (
    <section id="news-&-events" aria-labelledby="news-heading" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <h2 id="news-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">News & Events</h2>
          <p className="mt-2 text-slate-700 max-w-2xl">Stay updated with announcements, achievements, and upcoming activities.</p>
        </div>

        <ul className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
          {items.map((n) => (
            <li key={n.id} className="rounded-xl border border-teal-100 bg-[#fffef7] shadow-sm">
              <article className="h-full p-6 flex flex-col" aria-labelledby={`news-${n.id}-title`}>
                <div className="flex items-center gap-3">
                  <time dateTime={n.date} className="inline-flex items-center justify-center rounded-md bg-[#fff9c4] text-slate-900 px-2.5 py-1 text-xs font-medium ring-1 ring-black/5">
                    {formatDate(n.date)}
                  </time>
                  <span className="sr-only">Published on</span>
                </div>
                <h3 id={`news-${n.id}-title`} className="mt-3 text-lg font-semibold text-slate-900">
                  {n.title}
                </h3>
                <p className="mt-2 text-slate-700 flex-1">{n.summary}</p>
                <div className="mt-4">
                  <a href="#" className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded px-1">
                    Read more
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
