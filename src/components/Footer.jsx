export default function Footer() {
  return (
    <footer id="contact" role="contentinfo" className="border-t border-teal-100 bg-[#e0f2f1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Contact Us</h3>
            <address className="not-italic mt-2 text-slate-700">
              Shree Santi Namuna Secondary School
              <br /> Rupandehi, Lumbini Province, Nepal
              <br /> Phone: +977-71-XXXXXX
              <br /> Email: info@ssnss.edu.np
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-slate-700">
              <li><a href="#admissions" className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded px-1">Admissions</a></li>
              <li><a href="#academics" className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded px-1">Academics</a></li>
              <li><a href="#news-&-events" className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded px-1">News & Events</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Follow Us</h3>
            <ul className="mt-2 flex flex-wrap gap-3" aria-label="Social media">
              <li><a href="#" aria-label="Facebook" className="inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-white px-3 py-2 text-slate-700 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.06 5.66 21.2 10.44 22v-7.01H7.9v-2.93h2.54v-2.23c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.58v1.86h2.79l-.45 2.93h-2.34V22C18.34 21.2 22 17.06 22 12.06Z"/></svg>Facebook</a></li>
              <li><a href="#" aria-label="YouTube" className="inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-white px-3 py-2 text-slate-700 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2s-.23-1.6-.93-2.3c-.9-.93-1.93-.93-2.4-.98C16.93 2.5 12 2.5 12 2.5h-.01s-4.93 0-8.16.42c-.47.05-1.5.05-2.4.98-.7.7-.93 2.3-.93 2.3S0 8.06 0 9.9v1.74c0 1.84.06 3.7.06 3.7s.23 1.6.93 2.3c.9.93 2.1.9 2.64 1 1.92.18 8.1.42 8.1.42s4.93 0 8.16-.42c.47-.05 1.5-.05 2.4-.98.7-.7.93-2.3.93-2.3s.06-1.86.06-3.7V9.9c0-1.84-.06-3.7-.06-3.7ZM9.54 13.94V7.88l6.29 3.03-6.29 3.03Z"/></svg>YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-teal-200 pt-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Shree Santi Namuna Secondary School. All rights reserved.</p>
          <p>Designed with love for learning — Colors: calming blues and greens, highlights in yellow.</p>
        </div>
      </div>
    </footer>
  );
}
