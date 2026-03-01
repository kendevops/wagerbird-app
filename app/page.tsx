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
        title={
          <>
            Access<br />
            The <em className="text-brand-yellow italic font-bold not-italic">Edge.</em><br />
            Trade<br />
            The Game.
          </>
        }
        description="Signals scored by confidence. Priced by conviction. Stop guessing — start winning with the model on your side."
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
