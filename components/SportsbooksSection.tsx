"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import SportsbookCard, { SportsbookCardProps } from "./SportsbookCard";
import WobbleCard from "./animations/WobbleCard";
import SportsbookChooseStateModal from "./SportsbookChooseStateModal";
import SportsbookOfferModal from "./SportsbookOfferModal";
import { trackInitiateCheckout } from "@/lib/tracking";

interface SportsbooksSectionProps {
  sectionId?: string;
  label?: string;
  title?: React.ReactNode;
  description?: string;
  sportsbooks: SportsbookCardProps[];
  disclaimer?: string;
}

export default function SportsbooksSection({
  sectionId,
  label = "// Partner Sportsbooks",
  title = (
    <>
      Find Your State.
      <br />
      <em className="sb-section-title-accent">Find Your Books.</em>
    </>
  ),
  description = "All partners are licensed, regulated U.S. sportsbooks. Select your state to see which books are available where you are.",
  sportsbooks,
  disclaimer = "More partner sportsbooks being added regularly.\nNew accounts only · Availability varies by state · WAGERBIRD partners with licensed, regulated U.S. operators only.",
}: SportsbooksSectionProps) {
  const [activeCategory, setActiveCategory] =
    useState<"sportsbook" | "dfs_sweeps">("sportsbook");
  const [chooseStateOpen, setChooseStateOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [selectedSportsbook, setSelectedSportsbook] = useState<SportsbookCardProps | null>(null);
  const [modalSelectedState, setModalSelectedState] = useState("");

  const filteredBooks = sportsbooks.filter((sb) => {
    const category = (sb.type ?? "sportsbook") as "sportsbook" | "dfs_sweeps";
    return category === activeCategory;
  });

  const handleOpenAccountClick = (sb: SportsbookCardProps) => {
    setSelectedSportsbook(sb);
    setChooseStateOpen(true);
    setOfferOpen(false);
  };

  const handleSeeOffer = (state: string) => {
    setModalSelectedState(state);
    setChooseStateOpen(false);
    setOfferOpen(true);
  };

  const handleChangeState = () => {
    setOfferOpen(false);
    setChooseStateOpen(true);
  };

  const handleOpenAccount = (ctaHref: string) => {
    if (selectedSportsbook) {
      trackInitiateCheckout("sportsbook_offer_modal", selectedSportsbook.name);
      window.open(ctaHref, "_blank", "noopener,noreferrer");
    }
    setOfferOpen(false);
    setSelectedSportsbook(null);
    setModalSelectedState("");
  };

  const handleCloseChooseState = () => {
    setChooseStateOpen(false);
    if (!offerOpen) setSelectedSportsbook(null);
  };

  const handleCloseOffer = () => {
    setOfferOpen(false);
    setSelectedSportsbook(null);
    setModalSelectedState("");
  };

  const isMounted = typeof document !== "undefined";

  return (
    <section id={sectionId || "partner-sportsbooks"} className="sb-section">
      <div className="sb-section-inner">
        {/* Header row */}
        <div className="sb-section-header">
          <div className="sb-section-header-left">
            <motion.span
              className="sb-section-label"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {label}
            </motion.span>
            <motion.h2
              className="sb-section-title"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="sb-section-description"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            className="sb-tabs"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <button
              type="button"
              className={
                "sb-tab" +
                (activeCategory === "sportsbook" ? " sb-tab--active" : "")
              }
              onClick={() => setActiveCategory("sportsbook")}
            >
              SPORTSBOOKS
            </button>
            <button
              type="button"
              className={
                "sb-tab" +
                (activeCategory === "dfs_sweeps" ? " sb-tab--active" : "")
              }
              onClick={() => setActiveCategory("dfs_sweeps")}
            >
              DFS / SWEEPS
            </button>
          </motion.div>
        </div>

        {/* Cards grid */}
        {filteredBooks.length > 0 ? (
          <div className="sb-cards-grid">
            {filteredBooks.map((sb, i) => (
              <motion.div
                key={sb.name}
                className="sb-card-wrapper h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <WobbleCard className="h-full">
                  <SportsbookCard {...sb} onOpenAccount={handleOpenAccountClick} />
                </WobbleCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="sb-no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>
              No partner sportsbooks are currently available in this category.
              Check back soon &mdash; we&rsquo;re adding books regularly.
            </p>
          </motion.div>
        )}

        {/* Modals */}
        {isMounted &&
          selectedSportsbook &&
          createPortal(
            <>
              {chooseStateOpen && (
                <SportsbookChooseStateModal
                  sportsbook={selectedSportsbook}
                  onSeeOffer={handleSeeOffer}
                  onClose={handleCloseChooseState}
                />
              )}
              {offerOpen && (
                <SportsbookOfferModal
                  sportsbook={selectedSportsbook}
                  selectedState={modalSelectedState}
                  onChangeState={handleChangeState}
                  onOpenAccount={handleOpenAccount}
                  onClose={handleCloseOffer}
                />
              )}
            </>,
            document.body,
          )}

        {/* Disclaimer */}
        {disclaimer && (
          <p className="sb-section-disclaimer">
            {disclaimer.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < disclaimer.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
