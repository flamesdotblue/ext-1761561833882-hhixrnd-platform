export default function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative">
      <div
        className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full overflow-hidden"
        role="img"
        aria-label="Soft blue to purple gradient background"
        style={{
          backgroundImage:
            "url('https://cdn.dribbble.com/userupload/16537236/file/original-3c9baf8044faac370974ead6e9a41217.jpg?resize=1504x1003&vertical=center')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-[#0f172a]/30 to-transparent pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <span className="inline-block bg-[#fff9c4] text-slate-900 font-medium px-3 py-1 rounded-full mb-4 shadow-sm">
              Welcome to Shree Santi Namuna Secondary School
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight drop-shadow-md">
              Nurturing Curiosity. Inspiring Excellence.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-100/90">
              A community of learners in Rupandehi, Nepal — empowering students with values, skills, and confidence for a brighter future.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#admissions" className="inline-flex items-center justify-center rounded-lg bg-[#a5d6a7] text-slate-900 font-semibold px-5 py-2.5 shadow hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
                Start Admissions
              </a>
              <a href="#about-us" className="inline-flex items-center justify-center rounded-lg border border-white/70 text-white px-5 py-2.5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
