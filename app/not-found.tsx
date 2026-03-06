export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050510] flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-brand-yellow font-black text-6xl uppercase italic mb-4">404</h1>
        <h2 className="text-white font-bold text-3xl uppercase mb-8 italic">Page Not Found</h2>
        <p className="text-white/60 font-mono text-sm max-w-md mx-auto mb-12 uppercase tracking-widest leading-relaxed">
          The signal has been lost. The page you are looking for does not exist or has been moved to a new terminal.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-brand-yellow font-mono text-xs font-bold tracking-widest uppercase text-black hover:bg-white transition-all clip-btn"
        >
          Go Back Home →
        </a>
      </div>
    </main>
  );
}
