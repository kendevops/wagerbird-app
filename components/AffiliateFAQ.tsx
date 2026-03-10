"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import type { AffiliatesPageResult } from "@/sanity/lib/queries";

const DEFAULT_FAQS = [
  {
    id: "what-is",
    question: "What is the WagerBird Affiliate Program?",
    answer:
      "The WagerBird Affiliate Program lets you earn 30% commission by referring your audience to WagerBird. When someone clicks your unique link and makes their first purchase — whether that's a HOTSHEET release, a PointsPack, or Terminal access — you earn 30% of that transaction. No subscriptions required from your audience. No minimums from you.",
  },
  {
    id: "commission",
    question: "How does the 30% commission work exactly?",
    answer:
      "Every time someone from your audience clicks your unique affiliate link and completes their first purchase on WagerBird, you earn 30% of that transaction value — flat, from day one. There are no tiers to climb and no thresholds to hit before you start getting paid. Commissions are tracked in real-time on your partner dashboard.",
  },
  {
    id: "qualifies",
    question: "Who qualifies to become an affiliate?",
    answer:
      "Anyone with a relevant audience in the sports, betting, fantasy, or DFS space can apply. This includes content creators, podcast hosts, YouTubers, newsletter writers, social media accounts, and analysts. We review every application manually and approve partners whose audiences align with WagerBird's products.",
  },
  {
    id: "materials",
    question: "What marketing materials will I receive?",
    answer:
      "Approved affiliates get access to a full creative kit — banners, copy blocks, graphics, and brand assets formatted for social, email, and web. Everything is aligned with the WagerBird brand so you can launch immediately without having to design anything from scratch.",
  },
  {
    id: "tracking",
    question: "How do I track my performance?",
    answer:
      "You'll have access to a dedicated partner dashboard with real-time data on clicks, conversions, and commissions. Attribution is tied directly to your unique link — no delays, no batching, no ambiguity. You always know exactly what your audience is doing.",
  },
  {
    id: "restrictions",
    question: "Are there restrictions on how I can promote WagerBird?",
    answer:
      "Yes — we have a few brand standards to maintain quality and compliance. You may not make false or misleading claims, guarantee outcomes, or target audiences under 18. Paid advertising using WagerBird trademarks requires prior approval. Beyond that, you have flexibility in how you promote.",
  },
  {
    id: "disclose",
    question: "Do I need to disclose my affiliate relationship?",
    answer:
      "Yes. FTC guidelines require disclosure whenever you're compensated for a recommendation. This means clearly noting your affiliate relationship in your content — e.g., \"#ad,\" \"#sponsored,\" or \"I earn commission from this link.\" It's required, and we expect all partners to comply.",
  },
];

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
  inView,
}: {
  item: { id: string; question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  inView: boolean;
}) {
  return (
    <motion.div
      className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 * index }}
    >
      <button
        className="faq-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="faq-question">{item.question}</span>
        <span className={`faq-toggle ${isOpen ? "faq-toggle--open" : ""}`} aria-hidden="true">
          <span className="faq-toggle-icon">{isOpen ? "−" : "+"}</span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="faq-answer-text">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AffiliateFAQ({ data }: { data?: AffiliatesPageResult | null }) {
  const faqs =
    data?.faqItems?.length && data.faqItems.every((f) => f.id && f.question && f.answer)
      ? (data.faqItems as { id: string; question: string; answer: string }[])
      : DEFAULT_FAQS;
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  const eyebrow = data?.faqEyebrow ?? "// Questions";
  const heading1 = data?.faqHeading1 ?? "Frequently Asked.";
  const heading2 = data?.faqHeading2 ?? "Clearly Answered.";

  return (
    <section ref={sectionRef} className="faq-section">
      <div className="faq-inner">
        {/* ── Header ── */}
        <div className="faq-header">
          <motion.p
            className="faq-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            className="faq-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          >
            <span className="faq-heading-dark">{heading1}</span>
            <br />
            <span className="faq-heading-blue">{heading2}</span>
          </motion.h2>
        </div>

        {/* ── Accordion ── */}
        <div className="faq-list" role="list">
          <div className="faq-top-divider" />
          {faqs.map((item, i) => (
            <FAQItem
              key={item.id}
              item={item}
              index={i}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              inView={inView}
            />
          ))}
          <div className="faq-bottom-divider" />
        </div>
      </div>
    </section>
  );
}
