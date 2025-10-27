export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-teal-100" role="banner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1631295440864-d3ae10bba329?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTY2hvb2wlMjBsb2dvfGVufDB8MHx8fDE3NjE1NjIxNDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
              alt="School logo"
              className="h-10 w-10 object-contain"
            />
            <div className="leading-tight">
              <p className="font-semibold text-slate-900 text-sm sm:text-base">Shree Santi Namuna Secondary School</p>
              <p className="text-xs text-slate-600">Rupandehi, Nepal</p>
            </div>
          </div>
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {['Home','About Us','Academics','Admissions','News & Events','Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s|&/g,'-')}`} className="text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded px-1 py-1">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button aria-label="Open menu" className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-teal-200 bg-white text-slate-700 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            <span className="text-sm">Menu</span>
          </button>
        </div>
      </div>
      <nav aria-label="Primary mobile" className="md:hidden border-t border-teal-100">
        <ul className="grid grid-cols-2 gap-2 p-3 text-sm">
          {['Home','About Us','Academics','Admissions','News & Events','Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(/\s|&/g,'-')}`} className="block w-full rounded-lg px-3 py-2 text-center bg-white hover:bg-teal-50 border border-teal-100 text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
