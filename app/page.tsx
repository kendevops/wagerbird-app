import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Signals from "@/components/Signals";
import Packs from "@/components/Packs";
import HowItWorks from "@/components/HowItWorks";
import Hotsheet from "@/components/Hotsheet";
import EmailCapture from "@/components/EmailCapture";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero
        titleText="Access The Edge. Trade The Game."
        title={
          <>
            Access<br />
            The <em className="text-brand-yellow italic font-bold not-italic">Edge.</em><br />
            Trade<br />
            The Game.
          </>
        }
        description="Signals scored by confidence. Priced by conviction. Stop guessing — start winning with the model on your side."
        stats={[
          { value: "68%", label: "Season Win Rate" },
          { value: "12K+", label: "Active Bettors" },
          { value: "5", label: "Sports Covered" },
        ]}
      />
      <Ticker />
      <Signals
        title={
          <>
            Every Signal.<br />
            Every Sport.<br />
            <em className="signals-heading-accent">Scored.</em>
          </>
        }
      />
      <Packs
        title={
          <>
            Points Never Expire.<br />
            <em className="packs-heading-accent">Buy Once. Win Forever.</em>
          </>
        }
      />
      <HowItWorks
        title={
          <>
            Simple.<br />
            Transparent.<br />
            <em className="hiw-heading-accent">Profitable.</em>
          </>
        }
      />
      <Hotsheet
        title={
          <>
            The Cheat<br />
            Code. <em className="hotsheet-heading-accent">Built</em><br />
            To Hit.
          </>
        }
        videoSrc="https://cdn.builder.io/o/assets%2F0d74d6500f4d4101a69c1e5625bc65eb%2F691c4d6e898a44b0910ee280b41889fc?alt=media&token=b46e7fbb-e8c7-4839-9d62-4b9f0667a724&apiKey=0d74d6500f4d4101a69c1e5625bc65eb"
      />
      <EmailCapture
        title={
          <>
            Today&rsquo;s Top Signals.<br />
            <em className="email-capture-heading-accent">Free, In Your Inbox.</em>
          </>
        }
      />
      <Faq
        title={
          <>
            Common<br />
            <em className="faq-heading-accent">Questions.</em>
          </>
        }
      />
      <CtaBanner
        title={
          <>
            Stop Guessing.<br />
            Start Winning.
          </>
        }
      />
    </main>
  );
}
