import FaqItem from "./FaqItem";

const faqs = [
  {
    question: "Do my points expire?",
    answer:
      "No — your WagerBird points never expire. Once you earn or purchase points, they stay in your account until you use them. You can hold onto them for any upcoming game or season without worry.",
  },
  {
    question: "How does confidence scoring work?",
    answer:
      "Each signal is scored from 1–100 based on our model's certainty. A score above 85 means the model has very strong conviction in that pick — it accounts for line movement, historical matchup data, and current form. Lower scores don't mean skip, they just mean bet smaller.",
  },
  {
    question: "Can I use points on any sport?",
    answer:
      "Yes. Points work across all sports we cover — NFL, NBA, MLB, NHL, and more. There's no sport-specific point pool. Whatever's in your account is available for any signal you unlock.",
  },
  {
    question: "What happens when I run out of points?",
    answer:
      "You can top up anytime by purchasing a new pack. If you run out mid-day, free daily signals are always available at no cost. You'll never be completely locked out — we always surface a few high-confidence picks for free members.",
  },
  {
    question: "What's the difference between packs?",
    answer:
      "Packs vary by point volume and unlock level. Starter packs give you enough to try a handful of premium picks. Pro packs unlock the full signal feed with priority access to high-confidence plays. The Hotsheet subscription is separate — it delivers picks directly to your phone every morning before game time.",
  },
];

export default function Faq() {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-label">// FAQ</span>
          <h2 className="faq-heading">
            Common
            <br />
            <em className="faq-heading-accent">Questions.</em>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
