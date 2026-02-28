import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Signals from "@/components/Signals";
import Packs from "@/components/Packs";
import HowItWorks from "@/components/HowItWorks";
import Hotsheet from "@/components/Hotsheet";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Signals />
      <Packs />
      <HowItWorks />
      <Hotsheet />
    </main>
  );
}
