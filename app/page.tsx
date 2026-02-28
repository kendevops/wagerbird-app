import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Signals from "@/components/Signals";
import Packs from "@/components/Packs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Signals />
      <Packs />
    </main>
  );
}
