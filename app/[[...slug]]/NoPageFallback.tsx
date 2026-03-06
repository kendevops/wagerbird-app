import Link from "next/link";

export default function NoPageFallback() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
        No homepage content yet
      </h1>
      <p className="text-nav-text/80 max-w-md mb-6">
        Create a Page in Sanity Studio with slug <strong>home</strong> and add
        blocks to see your site here.
      </p>
      <Link
        href="/studio"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-brand-yellow text-black font-semibold hover:opacity-90 transition"
      >
        Open Sanity Studio →
      </Link>
    </main>
  );
}
