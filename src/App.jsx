import Header from './components/Header';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#e0f2f1] text-slate-800">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-slate-900 px-3 py-2 rounded shadow">
        Skip to content
      </a>
      <Header />
      <main id="main" role="main">
        <Hero />
        <HomeContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
