import { portableText, ptLines } from "./portableText";

const key = () => `b-${Math.random().toString(36).slice(2, 11)}`;

export const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings" as const,
  siteName: "WAGERBIRD",
  defaultMetaTitle: "WAGERBIRD — Confidence-Scored Betting Signals",
  defaultMetaDescription:
    "Signals scored by confidence. Priced by conviction. Stop guessing — start winning with the model on your side.",
  // defaultOgImage, favicon, appleTouchIcon: upload in Studio or leave empty
  twitterHandle: "",
};

export const homePage = {
  _id: "page-home",
  _type: "page" as const,
  order: 0,
  icon: "HomeIcon",
  title: "Home",
  slug: { _type: "slug" as const, current: "home" },
  seo: {
    metaTitle: "WAGERBIRD — Confidence-Scored Betting Signals",
    metaDescription:
      "Signals scored by confidence. Priced by conviction. Stop guessing — start winning with the model on your side.",
  },
  blocks: [
    {
      _type: "heroBlock" as const,
      _key: key(),
      title: portableText([
        "Access",
        ["The ", { text: "Edge.", accent: true }],
        "Trade",
        "The Game.",
      ]),
      description:
        "Signals scored by confidence. Priced by conviction. Stop guessing — start winning with the model on your side.",
      stats: [
        { _type: "statItem", value: "8.4%", label: "AVG. CLV" },
        { _type: "statItem", value: "24hr", label: "Sports Coverage" },
        { _type: "statItem", value: "5", label: "Model Framework" },
      ],
      primaryCtaLabel: "Buy a Pack →",
      primaryCtaHref: "https://app.wagerbird.com/register",
      secondaryCtaLabel: "Free Picks via Email",
      secondaryCtaHref: "/picks",
    },
    { _type: "tickerBlock" as const, _key: key() },
    {
      _type: "signalsBlock" as const,
      _key: key(),
      label: "// The Terminal",
      title: portableText(ptLines(["Every Signal.", "Every Sport.", "Scored."], true)),
      description:
        "Each pick is assigned a confidence rating 0–100. Higher confidence = more points required. The model's performance is fully transparent — no cherry-picking, no selective memory.",
      ctaLabel: "Unlock All Signals →",
      ctaHref: "https://app.wagerbird.com/register",
      items: [
        { _type: "signalCard", matchup: "Yankees vs Red Sox", sport: "MLB", time: "Tonight 7:05 PM", betType: "O/U", confidence: 89, locked: false },
        { _type: "signalCard", matchup: "Chiefs vs Ravens", sport: "NFL", time: "Sunday 4:25 PM", betType: "ML", confidence: 91, locked: false },
        { _type: "signalCard", matchup: "Lakers vs Warriors", sport: "NBA", time: "Tonight 10:30 PM", betType: "Spread", confidence: 76, locked: false },
        { _type: "signalCard", matchup: "Bruins vs Maple Leafs", sport: "NHL", time: "Tonight 7:00 PM", betType: "ML", confidence: 82, locked: true },
        { _type: "signalCard", matchup: "Dodgers vs Cubs", sport: "MLB", time: "Tonight 8:10 PM", betType: "RL", confidence: 77, locked: true },
      ],
      footerText: "+ 47 more signals locked — Buy points to unlock",
    },
    {
      _type: "packsBlock" as const,
      _key: key(),
      label: "// Choose Your Pack",
      title: portableText(["Points Never Expire.", { text: "Buy Once. Win Forever.", accent: true }]),
      description:
        "Every pack gives you confidence-scored signals. Unlock only the picks you want — pay nothing extra.",
      packs: [
        { _type: "priceCard", name: "Starter Pack", points: "600 Points", goodFor: "~7–9 Premium Picks", price: 39, ctaLabel: "Get Instant Access" },
        { _type: "priceCard", name: "Core Pack", points: "1,700 Points", goodFor: "~20–26 Premium Picks", price: 99, ctaLabel: "Get Core Pack", popular: true },
        { _type: "priceCard", name: "Advanced Pack", points: "3,600 Points", goodFor: "~42–55 Premium Picks", price: 199, ctaLabel: "Get Advanced Pack" },
      ],
      footnote:
        "Points act as credits to unlock signals (Picks). Each signal's cost is based on its confidence rating. You can also use points to access WAGERVISION (live in-game signals).",
    },
    {
      _type: "howItWorksBlock" as const,
      _key: key(),
      label: "// How It Works",
      title: portableText(ptLines(["Simple.", "Transparent.", "Profitable."], true)),
      steps: [
        { _type: "stepItem", number: "01", title: "Buy Points", description: "Choose a pack — Starter, Core, or Advanced. Points never expire. Use them on any sport, any pick type, whenever you're ready." },
        { _type: "stepItem", number: "02", title: "Browse Signals", description: "Enter the Terminal and browse confidence-rated signals across every game. Filter by sport, confidence level, or game time." },
        { _type: "stepItem", number: "03", title: "Trade With Edge", description: "Each signal costs points equal to its confidence score. Bet knowing exactly how strong the model's conviction is. No guessing." },
      ],
      stepVariant: "badge",
    },
    {
      _type: "hotsheetPromoBlock" as const,
      _key: key(),
      ctaLabel: "Get Hotsheet →",
      ctaHref: "https://app.wagerbird.com/register",
    },
    {
      _type: "emailCaptureBlock" as const,
      _key: key(),
      label: "// Free Daily Picks",
      title: portableText(["Today's Top Signals.", { text: "Free, In Your Inbox.", accent: true }]),
      cardTitle: "Join 12,000+ Sharp Bettors",
      cardSubtitle: "Get the model's top picks before game time — free, every day.",
      buttonLabel: "Send My Picks",
      disclaimer: "No spam. Unsubscribe anytime. Your data stays private.",
    },
    {
      _type: "faqBlock" as const,
      _key: key(),
      label: "// FAQ",
      title: portableText(["Common", { text: "Questions.", accent: true }]),
      items: [
        { _type: "faqItem", question: "Do my points expire?", answer: "No — your WAGERBIRD points never expire. Once you earn or purchase points, they stay in your account until you use them. You can hold onto them for any upcoming game or season without worry." },
        { _type: "faqItem", question: "How does confidence scoring work?", answer: "Each signal is scored from 1–100 based on our model's certainty. A score above 85 means the model has very strong conviction in that pick — it accounts for line movement, historical matchup data, and current form. Lower scores don't mean skip, they just mean bet smaller." },
        { _type: "faqItem", question: "Can I use points on any sport?", answer: "Yes. Points work across all sports we cover — NFL, NBA, MLB, NHL, and more. There's no sport-specific point pool. Whatever's in your account is available for any signal you unlock." },
        { _type: "faqItem", question: "What happens when I run out of points?", answer: "You can top up anytime by purchasing a new pack. If you run out mid-day, free daily signals are always available at no cost. You'll never be completely locked out — we always surface a few high-confidence picks for free members." },
        { _type: "faqItem", question: "What's the difference between packs?", answer: "Packs vary by point volume and unlock level. Starter packs give you enough to try a handful of premium picks. Pro packs unlock the full signal feed with priority access to high-confidence plays. The Hotsheet subscription is separate — it delivers picks directly to your phone every morning before game time." },
      ],
    },
    {
      _type: "ctaBannerBlock" as const,
      _key: key(),
      watermark: "WIN",
      title: portableText(["Stop Guessing.", "Start Winning."]),
      subtitle: "Join 12,000+ bettors who trade with confidence-scored signals.",
      ctaLabel: "Buy a Pack Now →",
      ctaHref: "https://app.wagerbird.com/register",
    },
  ],
};

export const terminalPage = {
  _id: "page-terminal",
  _type: "page" as const,
  order: 1,
  icon: "BoltIcon",
  title: "Terminal",
  slug: { _type: "slug" as const, current: "terminal" },
  seo: {
    metaTitle: "Terminal — WAGERBIRD",
    metaDescription: "Access the same data the pros use. Confidence-scored signals delivered in real-time.",
  },
  blocks: [
    {
      _type: "heroBlock" as const,
      _key: key(),
      tickerText: "Live Terminal Active — Real-Time Signal Feed",
      badgeText: "THE TERMINAL · REAL-TIME SIGNALS",
      title: portableText(["The", ["Terminal. ", { text: "Real-Time", accent: true }], "Signals."]),
      description: "Access the same data the pros use. Confidence-scored signals delivered in real-time. Stop guessing and start trading with an edge.",
      primaryCtaLabel: "Explore Signals →",
      primaryCtaHref: "#terminal",
      secondaryCtaLabel: "View Pricing",
      secondaryCtaHref: "/pricing",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/e7a48826f4f3592b62edc4a4adaa3da19d8075e3",
      stats: [
        { _type: "statItem", value: "40+", label: "Daily Signals" },
        { _type: "statItem", value: "88%", label: "Max Confidence" },
        { _type: "statItem", value: "24/7", label: "Market Monitoring" },
      ],
    },
    { _type: "tickerBlock" as const, _key: key() },
    {
      _type: "signalsBlock" as const,
      _key: key(),
      label: "// The Terminal",
      title: portableText(ptLines(["Live", "Terminal."], true)),
      description: "Each pick is assigned a confidence rating 0–100. Higher confidence = more points required.",
      ctaLabel: "Unlock All Signals →",
      ctaHref: "https://app.wagerbird.com/register",
      items: [
        { _type: "signalCard", matchup: "Yankees vs Red Sox", sport: "MLB", time: "Tonight 7:05 PM", betType: "O/U", confidence: 89, locked: false },
        { _type: "signalCard", matchup: "Chiefs vs Ravens", sport: "NFL", time: "Sunday 4:25 PM", betType: "ML", confidence: 91, locked: false },
        { _type: "signalCard", matchup: "Lakers vs Warriors", sport: "NBA", time: "Tonight 10:30 PM", betType: "Spread", confidence: 76, locked: false },
      ],
      footerText: "+ 47 more signals locked — Buy points to unlock",
    },
    {
      _type: "valueStripBlock" as const,
      _key: key(),
      items: [
        { _type: "valueStripItem", value: "$0.06", label: "Per Point (Core)", description: "Best value per pick of any access tier" },
        { _type: "valueStripItem", value: "3,600", label: "Points Max Pack", description: "Up to 55 premium picks in one purchase" },
        { _type: "valueStripItem", value: "∞", label: "Expiry — Never", description: "Points stay until you use them" },
        { _type: "valueStripItem", value: "5+", label: "Sports Covered", description: "NFL · NBA · MLB · NHL · Soccer" },
      ],
    },
    {
      _type: "packsBlock" as const,
      _key: key(),
      label: "// Choose Your Pack",
      title: portableText(ptLines(["Need Points?", "Unlock More."], true)),
      description: "Every pack gives you confidence-scored signals. Unlock only the picks you want.",
      packs: [
        { _type: "priceCard", name: "Starter Pack", points: "600 Points", goodFor: "~7–9 Premium Picks", price: 39, ctaLabel: "Get Instant Access" },
        { _type: "priceCard", name: "Core Pack", points: "1,700 Points", goodFor: "~20–26 Premium Picks", price: 99, ctaLabel: "Get Core Pack", popular: true },
        { _type: "priceCard", name: "Advanced Pack", points: "3,600 Points", goodFor: "~42–55 Premium Picks", price: 199, ctaLabel: "Get Advanced Pack" },
      ],
      footnote: "Points act as credits to unlock signals. Each signal's cost is based on its confidence rating.",
    },
    {
      _type: "faqBlock" as const,
      _key: key(),
      label: "// FAQ",
      title: portableText(["Terminal", { text: "Intelligence.", accent: true }]),
      items: [
        { _type: "faqItem", question: "What is a 'Signal'?", answer: "A signal is a professional-grade betting insight generated by our proprietary model. Unlike a standard 'pick', each signal includes a confidence score (1-100) and detailed market analysis." },
        { _type: "faqItem", question: "How do I unlock signals?", answer: "Signals can be unlocked using WAGERBIRD points. Each signal's cost in points matches its confidence score—a 90-confidence play costs 90 points to uncover." },
        { _type: "faqItem", question: "Which sports are covered?", answer: "We provide high-conviction signals across MLB, NBA, NFL, NHL, and major Soccer leagues. Coverage expands during peak season for each sport." },
        { _type: "faqItem", question: "Are signals guaranteed wins?", answer: "No professional sports bettor guarantees wins. We provide a documented mathematical edge. Over a long-term sample, our high-confidence signals (85+) have a proven winning track record." },
        { _type: "faqItem", question: "When are new signals posted?", answer: "Signals are posted in real-time as market conditions meet our model's criteria. This typically happens between 10:00 AM and 6:00 PM EST daily." },
      ],
    },
    {
      _type: "ctaBannerBlock" as const,
      _key: key(),
      watermark: "DATA",
      title: portableText(["Market Edge.", "Scored in Seconds."]),
      subtitle: "Join 12,000+ traders using WAGERBIRD to beat the books.",
      ctaLabel: "Unlock First Signal →",
      ctaHref: "#terminal",
    },
  ],
};

export const pricingPage = {
  _id: "page-pricing",
  _type: "page" as const,
  order: 2,
  icon: "CreditCardIcon",
  title: "Pricing",
  slug: { _type: "slug" as const, current: "pricing" },
  seo: {
    metaTitle: "Pricing — WAGERBIRD",
    metaDescription: "No subscription. No commitments. Points never expire. Buy a pack, unlock confidence-scored signals whenever you need them.",
  },
  blocks: [
    {
      _type: "heroBlock" as const,
      _key: key(),
      tickerText: "Points Packs — Pay As You Go · No Subscription Required",
      badgeText: "POINTS PACKS · PAY AS YOU GO",
      title: portableText(["Unlock", ["Real ", { text: "Picks.", accent: true }], "Any Time."]),
      description: "No subscription. No commitments. Points never expire. Buy a pack, unlock confidence-scored signals whenever you need them.",
      primaryCtaLabel: "See Packs →",
      primaryCtaHref: "#packs",
      secondaryCtaLabel: "How It Works",
      secondaryCtaHref: "#how-it-works",
      videoUrl: "https://cdn.builder.io/o/assets%2F72558899b84e49bc881d9b8ba6c19012%2Facd816a4a4224fd3a5e1d21181806042?alt=media&token=47fac893-2250-40d5-8e0f-5a4ae82a910a&apiKey=72558899b84e49bc881d9b8ba6c19012",
    },
    {
      _type: "packsBlock" as const,
      _key: key(),
      label: "// Choose Your Pack",
      title: portableText(["One-Time.", { text: "Points Never Expire.", accent: true }]),
      description: "Every pack gives you confidence-scored signals. Unlock only the picks you want.",
      packs: [
        { _type: "priceCard", name: "Starter Pack", points: "600 Points", goodFor: "~7–9 Premium Picks", price: 39, ctaLabel: "Get Instant Access" },
        { _type: "priceCard", name: "Core Pack", points: "1,700 Points", goodFor: "~20–26 Premium Picks", price: 99, ctaLabel: "Get Core Pack", popular: true },
        { _type: "priceCard", name: "Advanced Pack", points: "3,600 Points", goodFor: "~42–55 Premium Picks", price: 199, ctaLabel: "Get Advanced Pack" },
      ],
      footnote: "Points act as credits to unlock signals. Each signal's cost is based on its confidence rating.",
    },
    {
      _type: "valueStripBlock" as const,
      _key: key(),
      items: [
        { _type: "valueStripItem", value: "$0.06", label: "Per Point (Core)", description: "Best value per pick of any access tier" },
        { _type: "valueStripItem", value: "3,600", label: "Points Max Pack", description: "Up to 55 premium picks in one purchase" },
        { _type: "valueStripItem", value: "∞", label: "Expiry — Never", description: "Points stay until you use them" },
      ],
    },
    { _type: "processSectionBlock" as const, _key: key() },
    { _type: "accessModelsBlock" as const, _key: key() },
    {
      _type: "faqBlock" as const,
      _key: key(),
      label: "// FAQ",
      title: portableText(["Common", { text: "Questions.", accent: true }]),
      items: [
        { _type: "faqItem", question: "Do my points expire?", answer: "No. WAGERBIRD points never expire. Once you purchase a pack, the points stay in your account until you use them — no time pressure, no hidden deadlines." },
        { _type: "faqItem", question: "How does confidence scoring work?", answer: "Each signal is scored 1–100 based on our model's conviction. A score of 85+ means very high confidence. The cost to unlock a signal equals its confidence score in points, so high-conviction picks cost more but signal stronger conviction." },
        { _type: "faqItem", question: "Can I use points on any sport?", answer: "Yes. Points work across all sports we cover — NFL, NBA, MLB, NHL, and more. There's no sport-specific pool; whatever's in your account is available for any signal." },
        { _type: "faqItem", question: "What happens if I run out of points?", answer: "You can top up anytime by purchasing a new pack. Free daily signals are always available at no cost, so you're never completely locked out." },
        { _type: "faqItem", question: "Is there a subscription option?", answer: "No subscription required for signal packs — it's purely pay-as-you-go. The Hotsheet is a separate daily email product available on a rolling basis." },
      ],
    },
    {
      _type: "ctaBannerBlock" as const,
      _key: key(),
      watermark: "WIN",
      title: portableText(["Stop Guessing.", "Start Winning."]),
      subtitle: "Join 12,000+ bettors who trade with confidence-scored signals.",
      ctaLabel: "Buy a Pack Now →",
      ctaHref: "https://app.wagerbird.com/register",
    },
  ],
};

// Odds, hotsheet, sportsbooks: one hero + CTA for now; you can add more blocks in Studio.
export const oddsPage = {
  _id: "page-odds",
  _type: "page" as const,
  order: 3,
  icon: "BarChartIcon",
  title: "Odds",
  slug: { _type: "slug" as const, current: "odds" },
  seo: { metaTitle: "Odds — WAGERBIRD", metaDescription: "Live odds and confidence-scored signals." },
  blocks: [
    {
      _type: "heroBlock" as const,
      _key: key(),
      title: portableText(["Live Odds.", "Confidence-Scored."]),
      description: "See the model's edge. Unlock signals when you're ready.",
      primaryCtaLabel: "Open Terminal →",
      primaryCtaHref: "https://app.wagerbird.com/register",
    },
    {
      _type: "ctaBannerBlock" as const,
      _key: key(),
      watermark: "WIN",
      title: portableText(["Stop Guessing.", "Start Winning."]),
      ctaLabel: "Get Started →",
      ctaHref: "https://app.wagerbird.com/register",
    },
  ],
};

const hotsheetTickerItems = [
  { _type: "tickerItem" as const, sport: "MLB", matchup: "Yankees vs Red Sox", confidence: 89 },
  { _type: "tickerItem" as const, sport: "NFL", matchup: "Chiefs vs Ravens", confidence: 91 },
  { _type: "tickerItem" as const, sport: "NBA", matchup: "Lakers vs Warriors", confidence: 76 },
  { _type: "tickerItem" as const, sport: "NHL", matchup: "Bruins vs Maple Leafs", confidence: 82 },
  { _type: "tickerItem" as const, sport: "MLB", matchup: "Braves vs Padres", confidence: 91 },
  { _type: "tickerItem" as const, sport: "NBA", matchup: "Celtics vs Heat", confidence: 84 },
  { _type: "tickerItem" as const, sport: "NFL", matchup: "Eagles vs Cowboys", confidence: 78 },
];

export const hotsheetPage = {
  _id: "page-hotsheet",
  _type: "page" as const,
  order: 4,
  icon: "EnvelopeIcon",
  title: "Hotsheet",
  slug: { _type: "slug" as const, current: "hotsheet" },
  seo: {
    metaTitle: "Hotsheet — WAGERBIRD",
    metaDescription: "Today's top picks, delivered to your inbox. Free daily signals.",
  },
  blocks: [
    { _type: "hotsheetBlock" as const, _key: key(), ctaLabel: "Get Hotsheet →", ctaHref: "https://app.wagerbird.com/register" },
    {
      _type: "valueStripBlock" as const,
      _key: key(),
      items: [
        { _type: "valueStripItem", value: "76+", label: "Min Confidence Score", description: "Only signals scoring 76 or higher make the cut" },
        { _type: "valueStripItem", value: "2-6", label: "Signals Per Email", description: "Focused, curated picks — not noise" },
        { _type: "valueStripItem", value: "$2", label: "Per Day Average", description: "Less than a coffee for daily winning intel" },
        { _type: "valueStripItem", value: "5+", label: "Sports Covered", description: "NFL · NBA · MLB · NHL · Soccer" },
      ],
    },
    { _type: "tickerBlock" as const, _key: key(), variant: "dark", items: hotsheetTickerItems },
    { _type: "hotsheetFeaturesBlock" as const, _key: key() },
    {
      _type: "howItWorksBlock" as const,
      _key: key(),
      label: "// The Process",
      title: portableText(ptLines(["From Terminal.", "To Your Inbox."], true)),
      steps: [
        { _type: "stepItem", number: "01", title: "Signals Generated", description: "The WAGERBIRD Terminal scans the board every morning and afternoon. Every game gets a confidence rating. No gut picks. No opinions. Pure model output." },
        { _type: "stepItem", number: "02", title: "Top Picks Selected", description: "The highest-conviction plays — rated 76 or above — are packaged into your Hotsheet. Up to three picks per release, ranked by the model's confidence score." },
        { _type: "stepItem", number: "03", title: "Delivered Before Game Time", description: "Your email lands before the AM window (9:15 ET) and PM window (3:15 ET). Open it, place your bets. That's the whole workflow." },
      ],
      stepVariant: "card",
    },
    { _type: "hotsheetPricingBlock" as const, _key: key() },
    { _type: "hotsheetWhyBlock" as const, _key: key() },
    { _type: "proofSectionBlock" as const, _key: key() },
    {
      _type: "emailCaptureBlock" as const,
      _key: key(),
      label: "// Free Daily Picks",
      title: portableText(["Today's Top Signals.", { text: "Free, In Your Inbox.", accent: true }]),
      cardTitle: "Join 12,000+ Sharp Bettors",
      cardSubtitle: "Get the model's top picks before game time — free, every day.",
      buttonLabel: "Send My Picks",
      disclaimer: "No spam. Unsubscribe anytime. Your data stays private.",
    },
    {
      _type: "faqBlock" as const,
      _key: key(),
      label: "// FAQ",
      title: portableText(["Common", { text: "Questions.", accent: true }]),
      items: [
        { _type: "faqItem", question: "What is the Hotsheet?", answer: "The Hotsheet is a curated daily email delivering the top 2–6 picks from the WAGERBIRD Terminal directly to your inbox. Every play is confidence-scored and selected by our model — no research required on your end. Open it, read the plays, execute." },
        { _type: "faqItem", question: "What's the difference between Half-Day and Full-Day?", answer: "The On-Demand pass ($25) delivers 2–3 of our top signals for the morning window. The Full-Day Pass ($40) covers both the morning and evening windows — 6+ signals total — and includes 3 days of free Terminal access. Both are one-time payments, no subscription." },
        { _type: "faqItem", question: "Do I need an account to use the Hotsheet?", answer: "No. The Hotsheet is delivered directly to your email. You don't need to create an account, download an app, or log in anywhere. Just enter your email at checkout and your picks land in your inbox before game time." },
        { _type: "faqItem", question: "How are the signals scored?", answer: "Every signal is run through the WAGERBIRD Terminal model and assigned a confidence score from 1–100. Only signals scoring 76 or above make it into the Hotsheet. A score of 88 means bet stronger. A score of 76 means size down but still worth acting on." },
        { _type: "faqItem", question: "What sports are covered?", answer: "The Hotsheet covers NFL, NBA, MLB, NHL, and select international soccer markets. Coverage depends on the day's schedule — we only include sports where the model has high-confidence output. No filler picks, ever." },
      ],
    },
    {
      _type: "ctaBannerBlock" as const,
      _key: key(),
      watermark: "HOTSHEET",
      title: portableText(["Today's Top", "Signals. Your Inbox."]),
      subtitle: "No login. No subscription. Just the picks that matter, before game time.",
      ctaLabel: "Get Hotsheet →",
      ctaHref: "https://app.wagerbird.com/register",
    },
  ],
};

const sportsbooksCards = [
  { _type: "sportsbookCard" as const, name: "BetMGM", brandColor: "#8B7D2A", description: "Wide parlay coverage and exclusive BetMGM rewards. The 'King of Sportsbooks' delivers deep markets across all major leagues.", pointsPack: "+1 FREE POINTS PACK ($39)", ctaHref: "https://www.betmgm.com", states: ["Arizona", "Colorado", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maryland", "Massachusetts", "Michigan", "Mississippi", "Nevada", "New Hampshire", "New Jersey", "New York", "North Carolina", "Ohio", "Pennsylvania", "Tennessee", "Virginia", "Washington", "West Virginia", "Wyoming"] },
  { _type: "sportsbookCard" as const, name: "Caesars", brandColor: "#4A4A1A", description: "The gold standard in sportsbook rewards. Caesars offers premium odds, massive boosts, and a legendary betting experience.", pointsPack: "+1 FREE POINTS PACK ($39)", ctaHref: "https://www.caesars.com/sportsbook", states: ["Arizona", "Colorado", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maryland", "Massachusetts", "Michigan", "Nevada", "New Hampshire", "New Jersey", "New York", "North Carolina", "Ohio", "Pennsylvania", "Tennessee", "Virginia", "West Virginia", "Wyoming"] },
  { _type: "sportsbookCard" as const, name: "DraftKings", brandColor: "#1B5E2E", description: "The industry leader in live betting and same-game parlays. Fast, reliable, and featuring the most betting markets available.", pointsPack: "+1 FREE POINTS PACK ($39)", ctaHref: "https://www.draftkings.com", states: ["Arizona", "Colorado", "Connecticut", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Montana", "Nebraska", "New Hampshire", "New Jersey", "New York", "North Carolina", "Ohio", "Oregon", "Pennsylvania", "Rhode Island", "Tennessee", "Vermont", "Virginia", "West Virginia", "Wyoming"] },
  { _type: "sportsbookCard" as const, name: "Fanatics", brandColor: "#000000", description: "A new standard in sportsbook experiences. Integrated rewards and a mobile-first platform built for the modern bettor.", pointsPack: "+1 FREE POINTS PACK ($39)", ctaHref: "https://www.fanatics.com/sportsbook", states: ["Arizona", "Colorado", "Connecticut", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Maryland", "Massachusetts", "Michigan", "New Jersey", "New York", "North Carolina", "Ohio", "Pennsylvania", "Tennessee", "Vermont", "Virginia", "West Virginia", "Wyoming"] },
  { _type: "sportsbookCard" as const, name: "FanDuel", brandColor: "#1A4FC4", description: "America's #1 sportsbook. Top-rated mobile experience, competitive odds, and the fastest payouts in the game.", pointsPack: "+1 FREE POINTS PACK ($39)", ctaHref: "https://www.fanduel.com", states: ["Arizona", "Colorado", "Connecticut", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Montana", "Nebraska", "New Hampshire", "New Jersey", "New York", "North Carolina", "Ohio", "Pennsylvania", "Rhode Island", "Tennessee", "Vermont", "Virginia", "West Virginia", "Wyoming"] },
  { _type: "sportsbookCard" as const, name: "Onyx", brandColor: "#5D3FD3", description: "Premium sports betting platform for sophisticated traders. Onyx delivers sharp lines and a high-conviction experience.", pointsPack: "+1 FREE POINTS PACK ($39)", ctaHref: "https://www.onyx.io", states: ["Arizona", "Colorado", "Indiana", "Iowa", "New Jersey", "Ohio", "Pennsylvania", "Virginia"] },
  { _type: "sportsbookCard" as const, name: "Rebet", brandColor: "#FF4500", description: "The social sportsbook built for squads. Share your picks, tail your friends, and bet together in a new social environment.", pointsPack: "+1 FREE POINTS PACK ($39)", ctaHref: "https://rebet.me", states: ["Arizona", "Colorado", "Indiana", "Iowa", "New Jersey", "Ohio", "Pennsylvania", "Virginia"] },
  { _type: "sportsbookCard" as const, name: "Sleeper", brandColor: "#2F95DC", description: "The home of fantasy and prop betting. Sleeper combines elite social features with a fast, modern betting interface.", pointsPack: "+1 FREE POINTS PACK ($39)", ctaHref: "https://sleeper.com", states: ["Arizona", "California", "Colorado", "Florida", "Georgia", "Illinois", "Indiana", "Kansas", "Kentucky", "Maryland", "Massachusetts", "Michigan", "Minnesota", "New York", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "South Carolina", "Tennessee", "Texas", "Utah", "Virginia", "Washington", "Wisconsin"] },
  { _type: "sportsbookCard" as const, name: "Underdog", brandColor: "#FFD700", description: "The ultimate destination for daily fantasy and best ball. Fast, fun, and built for players who want to win.", pointsPack: "+1 FREE POINTS PACK ($39)", ctaHref: "https://underdogfantasy.com", states: ["Arizona", "California", "Colorado", "Florida", "Georgia", "Illinois", "Indiana", "Kansas", "Kentucky", "Maryland", "Massachusetts", "Michigan", "Minnesota", "New York", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "South Carolina", "Tennessee", "Texas", "Utah", "Virginia", "Washington", "Wisconsin"] },
];

export const sportsbooksPage = {
  _id: "page-sportsbooks",
  _type: "page" as const,
  order: 5,
  icon: "DocumentsIcon",
  title: "Sportsbooks",
  slug: { _type: "slug" as const, current: "sportsbooks" },
  seo: {
metaTitle: "Partner Sportsbooks — WAGERBIRD",
  metaDescription: "Find your state. Find your books. WAGERBIRD works with top sportsbooks.",
  },
  blocks: [
    { _type: "sportsbooksHeroBlock" as const, _key: key() },
    {
      _type: "howItWorksBlock" as const,
      _key: key(),
      label: "// How It Works",
      title: portableText(ptLines(["Three Steps.", "Free Picks."], true)),
      steps: [
        { _type: "stepItem", number: "01", title: "Pick Your Sportsbooks", description: "Choose from our licensed partner books below. We recommend opening at least three — each one earns you a free $39 Points Pack worth 600 WAGERBIRD points." },
        { _type: "stepItem", number: "02", title: "Open & Deposit", description: "Use our referral links to create your new accounts and make qualifying deposits. Takes under 10 minutes per book — most users complete all three in one sitting." },
        { _type: "stepItem", number: "03", title: "Collect Your Free Packs", description: "WAGERBIRD credits a $39 Points Pack to your account for each new sportsbook opened. Points never expire — use them on any sport, any time you're ready to trade." },
      ],
      stepVariant: "badge",
    },
    {
      _type: "sportsbooksSectionBlock" as const,
      _key: key(),
      label: "// Partner Sportsbooks",
      title: portableText(["Find Your State.", { text: "Find Your Books.", accent: true }]),
      description: "WAGERBIRD integrates with leading sportsbooks. Use your points to unlock signals wherever you play.",
      sportsbooks: sportsbooksCards,
    },
    {
      _type: "mapSectionBlock" as const,
      _key: key(),
      heading: "Licensed.\nRegulated.\nResponsible.",
      description: "WAGERBIRD partners exclusively with state-licensed, regulated U.S. sportsbooks. We never hold your funds, process wagers, or operate as a sportsbook. All rewards are issued by WAGERBIRD as Points Packs — not by the sportsbook operators.",
      disclaimer: "Free Points Pack applies to new sportsbook accounts opened through WAGERBIRD referral links only... Availability varies by state. Must be 21 or older. Gambling problem? Call 1-800-GAMBLER.",
    },
    {
      _type: "faqBlock" as const,
      _key: key(),
      label: "// FAQ",
      title: portableText(["Common", { text: "Questions.", accent: true }]),
      items: [
        { _type: "faqItem", question: "How do I get my free Points Packs?", answer: "Open a new sportsbook account through one of our referral links below and make a qualifying deposit. Once your account is verified, WAGERBIRD automatically credits a free $39 Points Pack (600 points) to your account — no code required. Open three books and you'll receive three packs, totalling $117 in free picks." },
        { _type: "faqItem", question: 'What counts as a "new" account?', answer: "A new account means you have never previously held an account with that sportsbook operator. If you already have an existing account — even if it's inactive or zeroed out — it does not qualify. The offer applies to first-time signups only, using our referral link at the point of registration." },
        { _type: "faqItem", question: "What can I do with WAGERBIRD Points?", answer: "Points unlock premium confidence-scored signals in the WAGERBIRD Terminal. Each signal costs points equal to its confidence score, so a 90-rated pick costs 90 points. Points never expire and work across all sports — NFL, NBA, MLB, NHL, and more." },
        { _type: "faqItem", question: "Can I claim a Pack for each sportsbook I open?", answer: "Yes. You earn one free $39 Points Pack for every new qualifying sportsbook account you open through WAGERBIRD. There's no cap — open more books, earn more packs. Most users open three to five books and collect between $117–$195 in free points." },
        { _type: "faqItem", question: "When will my Points be credited?", answer: "Points are credited to your WAGERBIRD account typically within 3–5 business days of your sportsbook account being verified and your qualifying deposit being confirmed. You'll receive an email notification as soon as your pack is applied." },
        { _type: "faqItem", question: "Why do you recommend three or more accounts?", answer: "Opening three books is the sweet spot — it maximises your free points ($117) while giving you access to multiple books so you can always find the best line on any given game. More accounts also means more promotional offers from each sportsbook over time." },
      ],
    },
    {
      _type: "ctaBannerBlock" as const,
      _key: key(),
      watermark: "FREE",
      title: portableText(["Open 3 Books.", { text: "Get $117 Free.", accent: true }]),
      subtitle: "Takes 30 minutes. Points never expire. Start winning with credits on us.",
      ctaLabel: "FIND MY SPORTSBOOKS →",
      ctaHref: "#partner-sportsbooks",
    },
  ],
};

// Coming-soon style pages: single block or minimal content so routes work
const comingSoonBlock = (slug: string, title: string, order: number) => ({
  _id: `page-${slug}`,
  _type: "page" as const,
  order,
  title,
  slug: { _type: "slug" as const, current: slug },
  seo: { metaTitle: `${title} — WAGERBIRD`, metaDescription: `WAGERBIRD — ${title}. Coming soon.` },
  blocks: [
    {
      _type: "heroBlock" as const,
      _key: key(),
      title: portableText([title, "Coming soon."]),
      description: "We're working on it. Check back soon or explore Terminal, Hotsheet, and Pricing.",
      primaryCtaLabel: "Go to Home →",
      primaryCtaHref: "/",
    },
  ],
});

export const comingSoonPages = [
  comingSoonBlock("about", "About", 10),
  comingSoonBlock("affiliates", "Affiliates", 11),
  comingSoonBlock("contact", "Contact", 12),
  comingSoonBlock("faq", "FAQ", 13),
  comingSoonBlock("learn", "Learn", 14),
  comingSoonBlock("live-odds", "Live Odds", 15),
  comingSoonBlock("results", "Results", 16),
  comingSoonBlock("privacy-policy", "Privacy Policy", 17),
  comingSoonBlock("terms-of-service", "Terms of Service", 18),
];

export const allPages = [
  homePage,
  terminalPage,
  pricingPage,
  oddsPage,
  hotsheetPage,
  sportsbooksPage,
  ...comingSoonPages,
];
