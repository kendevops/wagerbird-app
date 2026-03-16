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

export const signInPage = {
  _id: "signInPage",
  _type: "signInPage" as const,
  leftEyebrow: "// Welcome back",
  leftHeroLine1: "Back in",
  leftHeroLine2: "The Game.",
  leftTagline:
    "Your signals are waiting. Log in to access today's picks and your Points balance.",
  stats: [
    { value: "68%", label: "Win Rate" },
    { value: "12K+", label: "Bettors" },
    { value: "10+", label: "Leagues" },
  ],
  formEyebrow: "// Sign in",
  formTitle: "Welcome Back",
  emailLabel: "Email",
  emailPlaceholder: "your@email.com",
  passwordLabel: "Password",
  passwordPlaceholder: "••••••••",
  forgotLabel: "Forgot?",
  submitLabel: "Sign In",
  signupPrompt: "Don't have an account?",
  signupLinkLabel: "Sign up →",
  signupLinkHref: "/register",
  finePrint: "Points never expire · Cancel anytime",
  formAction: null,
};

export const registerPage = {
  _id: "registerPage",
  _type: "registerPage" as const,
  leftEyebrow: "// Get Started",
  leftHeroLine1: "Your Edge",
  leftHeroLine2: "Starts Here",
  leftTagline:
    "Join thousands bettors using confidence-scored signals to make smarter plays across every sport.",
  featureBullets: [
    { bold: "Pay per pick.", rest: " No subscription required." },
    { bold: "Points never expire.", rest: " Buy once, use anytime." },
    { bold: "10+ leagues.", rest: " NFL, NBA, MLB, NHL, CBB and more." },
    { bold: "68% win rate.", rest: " Backed by the model." },
  ],
  formEyebrow: "// Create Account",
  formTitle: "Get Started",
  formSubtitle: "Free to join. Buy Points when you're ready.",
  firstNameLabel: "First Name",
  firstNamePlaceholder: "First",
  lastNameLabel: "Last Name",
  lastNamePlaceholder: "Last",
  phoneLabel: "Phone Number",
  phonePlaceholder: "(555) 000-0000",
  emailLabel: "Email",
  emailPlaceholder: "your@email.com",
  passwordLabel: "Password",
  passwordPlaceholder: "Min 8 characters",
  confirmPasswordLabel: "Confirm Password",
  confirmPasswordPlaceholder: "Re-enter password",
  submitLabel: "Create Account",
  legalText:
    "By signing up you agree to our Terms of Service and Privacy Policy. Must be 21+ to bet.",
  termsHref: "/terms-of-service",
  privacyHref: "/privacy-policy",
  signinPrompt: "Already have an account?",
  signinLinkLabel: "Sign In →",
  signinLinkHref: "/signin",
  formAction: null,
};

export const notFoundPage = {
  _id: "notFoundPage",
  _type: "notFoundPage" as const,
  eyebrowPrefix: "// Error",
  eyebrowLabel: "Page Not Found",
  heading: "Signal Lost.",
  description:
    "The page you're looking for went out of bounds. It may have been moved, deleted, or never existed.",
  primaryCtaLabel: "Back to Home",
  primaryCtaHref: "/",
  secondaryCtaLabel: "View Signals",
  secondaryCtaHref: "/terminal",
};

export const error500Page = {
  _id: "error500Page",
  _type: "error500Page" as const,
  statusLeft: "System Error",
  statusRight: "Server Unresponsive",
  recoveryLabel: "System Recovery",
  eyebrow: "// Error · Internal Server Failure",
  heading: "System Down.",
  description:
    "Something went wrong on our end. Our team has been notified and is working on a fix.",
  tracePrefix: "ERR_INTERNAL · TRACE_ID:",
  primaryCtaLabel: "Try Again",
  secondaryCtaLabel: "Back to Home",
  secondaryCtaHref: "/",
};

export const comingSoonMeta = {
  _id: "comingSoonPage",
  _type: "comingSoonPage" as const,
  tickerItems: [
    "Coming Soon",
    "Wagerbird",
    "Stay Tuned",
    "New Feature",
    "Signal Stream",
    "The Model",
  ],
  eyebrow: "// Something Big Is Coming",
  heroWhite: "Coming",
  heroYellow: "Soon.",
  description:
    "We're building something that will change how you bet. Be the first to know when it drops.",
  targetDate: "2028-01-01T00:00:00.000Z",
  emailPlaceholder: "Enter your email for early access",
  notifyLabel: "Notify Me",
  finePrint: "No spam. Unsubscribe anytime.",
};

export const affiliatesPage = {
  _id: "affiliatesPage",
  _type: "affiliatesPage" as const,
  heroHeading: "Get Paid to\nShare the Edge.",
  heroDescription:
    "Earn 30% on every first-time purchase your audience makes on WagerBird — HOTSHEET, PointsPacks, or Terminal access. Flat rate. No tiers. No forced subscriptions.",
  commissionMeta: "// Commission · First Purchase · No Cap",
  programStatus: "Program Open · Paying Out From Day One",
  primaryCtaLabel: "Apply to the Program",
  primaryCtaHref: "/register",
  secondaryCtaLabel: "See How It Works",
  secondaryCtaHref: "#how-it-works",
  calcEyebrow: "// Your Potential Earnings",
  calcHeading: "See What Your Cut Looks Like.",
  calcDescription:
    "Pick the product. Drag the slider. See exactly what 30% means for your audience — no ambiguity, no fine print.",
  calcProducts: [
    { id: "hotsheet", name: "Hotsheet", price: 25, label: "$25 per purchase" },
    { id: "pointspacks", name: "PointsPacks", price: 49, label: "$49 per purchase" },
    { id: "terminal", name: "Terminal", price: 99, label: "$99 per purchase" },
  ],
  whyEyebrow: "// Why This Program",
  whyHeading: "Platform.",
  whyDescription:
    "WagerBird runs on process. Clean structure, no noise, everything visible. The affiliate program works exactly the same way.",
  whyCtaLabel: "Apply Now",
  whyReasons: [
    {
      num: "01",
      body: "Most programs make you earn your rate. WagerBird pays 30% from your first referral. The same rate whether you send 1 or 100. No quarterly quotas, no loyalty ladders.",
      tag: "From Day One",
    },
    {
      num: "02",
      body: "WagerBird is pay-per-pick. Your referrals buy what they need — a Hotsheet release, a Points Pack — and leave. No recurring commitment required. That's a far easier conversion than a monthly SaaS plan.",
      tag: "Lower Barrier to Buy",
    },
    {
      num: "03",
      body: "Your dashboard shows every click, every purchase, every commission in real time. Nothing is batched, delayed, or ambiguous. You know exactly where you stand at all times.",
      tag: "Real-Time Dashboard",
    },
    {
      num: "04",
      body: "WagerBird isn't a generic picks service. It's confidence-scored, process-driven, and built for bettors who take their bankroll seriously. That story resonates. It converts because it's true.",
      tag: "Story Sells Itself",
    },
    {
      num: "05",
      body: "Once approved, you receive your tracking link and a full creative kit — banners, copy blocks, angle suggestions. You can go from approval to your first post within the hour.",
      tag: "Ship Same Day",
    },
  ],
  marqueeItems: [
    "30% Commission",
    "Real-Time Tracking",
    "No Subscription Required",
    "Flat Rate From Day One",
    "Full Creative Kit",
    "First-Purchase Payout",
    "Unlimited Referrals",
    "Instant Approval",
  ],
  wypEyebrow: "// What You Promote",
  wypHeading1: "Two Products.",
  wypHeading2: "One Clean Commission.",
  wypDescription:
    "Promote WagerBird's core products. Every first-time purchase through your link earns 30% — no exceptions, no fine print.",
  wypFootnote:
    "Commission applies to first-time purchases. All activity tracked in real time inside your partner dashboard.",
  wypProducts: [
    {
      id: "terminal",
      badges: [{ label: "Full Platform Access", filled: false }],
      title: "Terminal / PointsPacks",
      subtags: ["Confidence-Scored Signals", "WagerVision", "Calculator"],
      description:
        "Access to the full WagerBird Terminal — the complete signal library, performance tracking, WagerVision overlays, and the bankroll Calculator. Purchased via Points, not a subscription.",
      tiers: [
        { label: "Starter Pack", price: 39, earn: 11.7 },
        { label: "Pro Pack", price: 99, earn: 29.7 },
      ],
    },
    {
      id: "hotsheet",
      badges: [
        { label: "Popular", filled: true },
        { label: "Daily Signal Digest", filled: false },
      ],
      title: "Hotsheet",
      subtags: ["AM + PM Releases", "Up to 3 Signals per Release"],
      description:
        "High-confidence signals delivered on a set schedule, twice daily. Your audience picks what they need — a single release or the full-day pass. No ongoing commitment.",
      tiers: [
        { label: "Single Release", price: 25, earn: 7.5 },
        { label: "Day Pass", price: 40, earn: 12.0 },
      ],
    },
  ],
  procEyebrow: "// The Process",
  procSubtitle:
    "Four steps. Clean process. You'll hear back quickly — no lengthy vetting, just a real audience check.",
  procHeading: "Get Paid.",
  procSteps: [
    {
      num: "01",
      body: "Submit your application. Our team reviews it quickly — no lengthy vetting, just a check that your audience is a real fit.",
    },
    {
      num: "02",
      body: "Approved affiliates receive their unique tracking link plus a full creative kit — ready to use across any channel or format.",
    },
    {
      num: "03",
      body: "Promote however you work — content, video, social, email. If your audience clicks your link and buys, you earn. Simple.",
    },
    {
      num: "04",
      body: "Your dashboard shows every click, conversion, and commission in real time. No black boxes. No delays.",
    },
  ],
  wsaEyebrow: "// Who Should Apply",
  wsaHeading1: "Built for Anyone",
  wsaHeading2: "a Relevant Audience.",
  wsaDescription:
    "If your audience has a genuine interest in sports betting, bankroll management, fantasy sports, or DFS — there's a real fit here. We review every application to confirm it.",
  wsaAudiences: [
    {
      num: "01",
      title: "Sports Betting Content Creators",
      body: "Writers, bloggers, and analysts covering betting strategy, picks breakdowns, and bankroll management. Your audience already buys — point them somewhere that pays you.",
      span: 3,
    },
    {
      num: "02",
      title: "Podcast & Newsletter Hosts",
      body: "Trusted voices with engaged audiences. WagerBird fits naturally into a pre-roll, mid-roll, or a newsletter placement. Low friction for your audience to convert.",
      span: 3,
    },
    {
      num: "03",
      title: "YouTube & Video Creators",
      body: "Demo-driven content and sports breakdowns. WagerBird's dashboard is visual and compelling on screen — your audience can see exactly what they're buying.",
      span: 2,
    },
    {
      num: "04",
      title: "Social Media Sports Accounts",
      body: "High-follower sports and betting accounts across X, Instagram, and TikTok. Fast conversions, low-cost entry point for your audience, straightforward link placement.",
      span: 2,
    },
    {
      num: "05",
      title: "Fantasy & DFS Analysts",
      body: "The overlap between DFS and sports betting is significant. WagerBird's signal structure resonates with an audience already thinking in terms of edges and probabilities.",
      span: 2,
    },
  ],
  prEyebrow: "// Partner Resources",
  prHeading1: "Everything you need to",
  prHeading2: "Start Promoting.",
  prDescription:
    "You handle the audience. We handle the assets. Approved affiliates can ship on day one.",
  prResources: [
    {
      id: "materials",
      title: "Marketing Materials",
      body: "Banners, copy blocks, and creative assets aligned with the WagerBird brand — ready to drop into any format.",
      href: "/register",
      highlighted: false,
    },
    {
      id: "link",
      title: "Unique Tracking Link",
      body: "Your personal link tracks every click and purchase tied to your audience. Attribution is clear. No gaps.",
      href: "/register",
      highlighted: false,
    },
    {
      id: "commission",
      title: "30% Flat Commission",
      body: "No tiers. No climbing. 30% on every first-time purchase from day one — Hotsheet or PointsPacks.",
      href: "/affiliates#calculator",
      highlighted: true,
    },
    {
      id: "dashboard",
      title: "Partner Dashboard",
      body: "Real-time view of all clicks, conversions, and commissions. Full visibility — no delays, no batching.",
      href: "/register",
      highlighted: false,
    },
    {
      id: "platform",
      title: "Platform Access",
      body: "Approved affiliates get direct access to WagerBird. Speak from experience, not theory. Your audience will feel the difference.",
      href: "/register",
      highlighted: false,
    },
    {
      id: "support",
      title: "Dedicated Support",
      body: "Our team helps with creative strategy, campaign angles, and questions. You won't be figuring things out alone.",
      href: "/register",
      highlighted: false,
    },
  ],
  ctaEyebrow: "// Get Started — Affiliate Program",
  ctaHeading1: "Build Your Edge.",
  ctaHeading2: "And Your Income.",
  ctaDescription:
    "Apply now. Start earning 30% on every first-time purchase your audience makes on WagerBird.",
  ctaButtonLabel: "Apply to the Affiliate Program",
  ctaButtonHref: "/register",
  ctaFooterText: "Questions?",
  ctaFooterEmail: "partners@wagerbird.com",
  faqEyebrow: "// Questions",
  faqHeading1: "Frequently Asked.",
  faqHeading2: "Clearly Answered.",
  faqItems: [
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
        'Yes. FTC guidelines require disclosure whenever you\'re compensated for a recommendation. This means clearly noting your affiliate relationship in your content — e.g., "#ad," "#sponsored," or "I earn commission from this link." It\'s required, and we expect all partners to comply.',
    },
  ],
};

export const quantumPage = {
  _id: "quantumPage",
  _type: "quantumPage" as const,
  heroBadgeText: "Private Client Program · By Qualification",
  heroTitleLine1: "Where precision",
  heroTitleLine2: "conviction",
  heroSub:
    "Quantum is WagerBird's private advisory program — a dedicated relationship between you, your personal trader, and institutional-grade intelligence that doesn't exist on the open market.",
  heroPrimaryCtaLabel: "Request Access",
  heroPrimaryCtaHref: "#apply",
  heroSecondaryCtaLabel: "See What's Included",
  heroSecondaryCtaHref: "#program",
  heroMetaItems: ["Personal Trader Assigned", "Institutional Data Feeds", "Bespoke Signal Delivery"],
  introTitle: "A relationship,\nnot a subscription.",
  introParagraph1:
    "The retail betting market is designed to extract capital through friction, obscured margins, and emotional volatility. Institutional markets operate on a fundamentally different axis: cold logic, deep data, and absolute discipline.",
  introParagraph2:
    "Quantum bridges this divide for high-net-worth individuals. By pairing serious capital with a dedicated relationship manager and proprietary trading feeds, we replace guesswork with systematic edge. You are not buying picks; you are integrating into a private trading desk.",
  pillarsEyebrow: "What you receive",
  pillarsTitle: "Four pillars.\nOne integrated edge.",
  pillarsCards: [
    { num: "01", title: "Personal Trader", tag: "Direct Comm Line", desc: "A dedicated risk manager assigned to your portfolio. They filter signals, size positions relative to your bankroll, and provide rationale for every execution." },
    { num: "02", title: "Money Management", tag: "Capital Preservation", desc: "Strict institutional drawdown protocols applied to your account. We prioritize protecting the principal while compounding the alpha generated by our models." },
    { num: "03", title: "Institutional Feeds", tag: "Unrestricted Access", desc: "Raw access to the same latency-optimized API feeds and sharp money indicators used by our internal proprietary trading desk." },
    { num: "04", title: "Full Platform", tag: "Command Center", desc: "Log in to your private terminal to view live risk, historical performance analytics, and real-time market sentiment dashboards." },
  ],
  platformsEyebrow: "Quantum Platforms",
  platformsTitle: "Three systems.\nOne edge.",
  platformsDescription:
    "Quantum clients receive full access to the Terminal and exclusive access to two proprietary platforms unavailable to general subscribers. Each purpose-built for a different layer of the intelligence stack.",
  platformAdvisoryTag: "Core Program",
  platformAdvisoryName: "Quantum Advisory",
  platformAdvisorySub: "Full advisory relationship",
  platformAdvisoryBadge: "All Tiers",
  platformAdvisoryDesc:
    "The full advisory relationship. Your trader, your data, your strategy — coordinated through WagerBird's Terminal with institutional precision.",
  platformHorizonTag: "Exclusive Platform",
  platformHorizonName: "Horizon",
  platformHorizonSub: "Institutional Feed · Live Market",
  platformHorizonBadge: "Summit + Apex",
  platformHorizonDesc:
    "Surfaces book movement, line drift, and sharp-side pressure in real time — the view professional operations rely on.",
  platformPulseTag: "Exclusive Platform",
  platformPulseName: "Pulse",
  platformPulseSub: "In-Game Intelligence Display",
  platformPulseBadge: "Summit + Apex",
  platformPulseDesc:
    "Dynamic market signals and in-game conviction scoring. The fastest read on where the market is moving and why.",
  structureTitle: "Built for\nserious capital.",
  structureNote: "Performance-based only.\nNo upfront advisory fees.",
  tiers: [
    { label: "Tier I", name: "Ascent", features: ["Dedicated Associate Trader", "Core Market Feeds", "Standard Risk Protocols"], footerText: "Min. Bankroll: $50k", featured: false },
    { label: "Tier II", name: "Summit", features: ["Senior Portfolio Manager", "Horizon & Pulse Access", "Custom Hedging Strategy", "Weekly Strategy Briefing"], footerText: "Min. Bankroll: $250k", featured: true, featuredBadge: "Most Selected" },
    { label: "Tier III", name: "Apex", features: ["Desk Head Assignment", "Bespoke Model Requests", "API Execution Routing"], footerText: "By Invitation Only", featured: false },
  ],
  qualRightFitTitle: "Right Fit",
  qualRightFitItems: [
    "Investors treating sports markets as an alternative asset class.",
    "Individuals with strict emotional discipline and long-term horizon.",
    "Capital bases requiring institutional risk management architecture.",
  ],
  qualMisalignedTitle: "Misaligned",
  qualMisalignedItems: [
    "Recreational bettors looking for daily action or \"locks\".",
    "Those unable to tolerate variance or adhere to strict unit sizing.",
    "Individuals seeking immediate, short-term financial returns.",
  ],
  applyTitle: "Start the conversation.",
  applyNote: "Please provide accurate details. Our advisory team reviews applications weekly.",
  applyDisclaimer: "Strictly confidential · Limited quarterly enrollment",
  applyCheckboxText:
    "I confirm I meet the capital requirements and understand this application is for a private advisory relationship, not a guaranteed return product.",
  applySubmitLabel: "Submit Application",
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

const DRAFTKINGS_FEATURES = [
  "One of the largest U.S. sportsbooks — widest market selection",
  "Deep live in-play betting with real-time odds updates",
  "Same-game parlays across NFL, NBA, MLB, NHL and more",
  "Industry-leading mobile app on iOS and Android",
  "Fast, reliable payouts with multiple withdrawal options",
];

const sportsbooksCards = [
  { _type: "sportsbookCard" as const, type: "sportsbook", name: "BetMGM", brandColor: "#8B7D2A", description: "Wide parlay coverage and exclusive BetMGM rewards. The 'King of Sportsbooks' delivers deep markets across all major leagues.", pointsPack: "+1 FREE POINTS PACK ($39)", currentOffer: "BET $10, GET $200 IN BONUS BETS", features: ["Wide parlay coverage and exclusive BetMGM rewards", "Deep markets across all major leagues", "Premium mobile experience", "Fast payouts"], ctaHref: "https://www.betmgm.com", states: ["Arizona", "Colorado", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maryland", "Massachusetts", "Michigan", "Mississippi", "Nevada", "New Hampshire", "New Jersey", "New York", "North Carolina", "Ohio", "Pennsylvania", "Tennessee", "Virginia", "Washington", "West Virginia", "Wyoming"] },
  { _type: "sportsbookCard" as const, type: "sportsbook", name: "Caesars", brandColor: "#4A4A1A", description: "The gold standard in sportsbook rewards. Caesars offers premium odds, massive boosts, and a legendary betting experience.", pointsPack: "+1 FREE POINTS PACK ($39)", currentOffer: "BET $20, GET $200 IN BONUS BETS", features: ["Premium odds and massive boosts", "Legendary betting experience", "Caesars Rewards integration", "Live in-game betting"], ctaHref: "https://www.caesars.com/sportsbook", states: ["Arizona", "Colorado", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maryland", "Massachusetts", "Michigan", "Nevada", "New Hampshire", "New Jersey", "New York", "North Carolina", "Ohio", "Pennsylvania", "Tennessee", "Virginia", "West Virginia", "Wyoming"] },
  { _type: "sportsbookCard" as const, type: "sportsbook", name: "DraftKings", brandColor: "#1B5E2E", description: "The industry leader in live betting and same-game parlays. Fast, reliable, and featuring the most betting markets available.", pointsPack: "+1 FREE POINTS PACK ($39)", currentOffer: "BET $5, GET $200 IN BONUS BETS", features: DRAFTKINGS_FEATURES, stateOffers: [{ states: ["New York", "New Jersey"], ctaHref: "https://sportsbook.draftkings.com/regions/us", offerText: "BET $5, GET $200 IN BONUS BETS", pointsPack: "+$39 Points Pack", features: DRAFTKINGS_FEATURES, detailText: "Bet $5, Get $200 in Bonus Bets If Your Bet Wins!" }], ctaHref: "https://www.draftkings.com", states: ["Arizona", "Colorado", "Connecticut", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Montana", "Nebraska", "New Hampshire", "New Jersey", "New York", "North Carolina", "Ohio", "Oregon", "Pennsylvania", "Rhode Island", "Tennessee", "Vermont", "Virginia", "West Virginia", "Wyoming"] },
  { _type: "sportsbookCard" as const, type: "sportsbook", name: "Fanatics", brandColor: "#000000", description: "A new standard in sportsbook experiences. Integrated rewards and a mobile-first platform built for the modern bettor.", pointsPack: "+1 FREE POINTS PACK ($39)", currentOffer: "BET $5, GET $100 IN BONUS BETS", features: ["Integrated rewards and mobile-first platform", "Modern bettor experience", "Live betting and prop markets"], ctaHref: "https://www.fanatics.com/sportsbook", states: ["Arizona", "Colorado", "Connecticut", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Maryland", "Massachusetts", "Michigan", "New Jersey", "New York", "North Carolina", "Ohio", "Pennsylvania", "Tennessee", "Vermont", "Virginia", "West Virginia", "Wyoming"] },
  { _type: "sportsbookCard" as const, type: "sportsbook", name: "FanDuel", brandColor: "#1A4FC4", description: "America's #1 sportsbook. Top-rated mobile experience, competitive odds, and the fastest payouts in the game.", pointsPack: "+1 FREE POINTS PACK ($39)", currentOffer: "BET $5, GET $200 IN BONUS BETS", features: ["Top-rated mobile experience", "Competitive odds", "Fastest payouts in the game", "Same-game parlays and live betting"], ctaHref: "https://www.fanduel.com", states: ["Arizona", "Colorado", "Connecticut", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Montana", "Nebraska", "New Hampshire", "New Jersey", "New York", "North Carolina", "Ohio", "Pennsylvania", "Rhode Island", "Tennessee", "Vermont", "Virginia", "West Virginia", "Wyoming"] },
  { _type: "sportsbookCard" as const, type: "sportsbook", name: "Onyx", brandColor: "#5D3FD3", description: "Premium sports betting platform for sophisticated traders. Onyx delivers sharp lines and a high-conviction experience.", pointsPack: "+1 FREE POINTS PACK ($39)", currentOffer: "DEPOSIT BONUS AVAILABLE", features: ["Sharp lines for sophisticated traders", "High-conviction experience", "Premium platform"], ctaHref: "https://www.onyx.io", states: ["Arizona", "Colorado", "Indiana", "Iowa", "New Jersey", "Ohio", "Pennsylvania", "Virginia"] },
  { _type: "sportsbookCard" as const, type: "dfs_sweeps", name: "Rebet", brandColor: "#FF4500", description: "The social sportsbook built for squads. Share your picks, tail your friends, and bet together in a new social environment.", pointsPack: "+1 FREE POINTS PACK ($39)", currentOffer: "SIGN-UP BONUS AVAILABLE", features: ["Social sportsbook for squads", "Share picks and tail friends", "Bet together in a new environment"], ctaHref: "https://rebet.me", states: ["Arizona", "Colorado", "Indiana", "Iowa", "New Jersey", "Ohio", "Pennsylvania", "Virginia"] },
  { _type: "sportsbookCard" as const, type: "dfs_sweeps", name: "Sleeper", brandColor: "#2F95DC", description: "The home of fantasy and prop betting. Sleeper combines elite social features with a fast, modern betting interface.", pointsPack: "+1 FREE POINTS PACK ($39)", currentOffer: "FANTASY AND PROP BETTING", features: ["Elite social features", "Fast, modern betting interface", "Fantasy and prop betting"], ctaHref: "https://sleeper.com", states: ["Arizona", "California", "Colorado", "Florida", "Georgia", "Illinois", "Indiana", "Kansas", "Kentucky", "Maryland", "Massachusetts", "Michigan", "Minnesota", "New York", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "South Carolina", "Tennessee", "Texas", "Utah", "Virginia", "Washington", "Wisconsin"] },
  { _type: "sportsbookCard" as const, type: "dfs_sweeps", name: "Underdog", brandColor: "#FFD700", description: "The ultimate destination for daily fantasy and best ball. Fast, fun, and built for players who want to win.", pointsPack: "+1 FREE POINTS PACK ($39)", currentOffer: "BEST BALL AND DAILY FANTASY", features: ["Daily fantasy and best ball", "Fast, fun experience", "Built for players who want to win"], ctaHref: "https://underdogfantasy.com", states: ["Arizona", "California", "Colorado", "Florida", "Georgia", "Illinois", "Indiana", "Kansas", "Kentucky", "Maryland", "Massachusetts", "Michigan", "Minnesota", "New York", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "South Carolina", "Tennessee", "Texas", "Utah", "Virginia", "Washington", "Wisconsin"] },
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

export const affiliatesLandingPage = {
  _id: "page-affiliates",
  _type: "page" as const,
  order: 6,
  icon: "UsersIcon",
  title: "Affiliates",
  slug: { _type: "slug" as const, current: "affiliates" },
  seo: {
    metaTitle: "Affiliates — WAGERBIRD",
    metaDescription:
      "Earn 30% commission on every first-time purchase. No tiers. No forced subscriptions. Paying out from day one.",
  },
  blocks: [
    {
      _type: "heroBlock" as const,
      _key: key(),
      badgeText: "AFFILIATE PROGRAM · EARN 30%",
      title: portableText([
        "Get Paid to",
        ["Share the ", { text: "Edge.", accent: true }],
      ]),
      description:
        "Earn 30% on every first-time purchase your audience makes on WAGERBIRD — HOTSHEET, PointsPacks, or Terminal access. Flat rate. No tiers. No forced subscriptions.",
      primaryCtaLabel: "Apply to the Program",
      primaryCtaHref: "/register",
      secondaryCtaLabel: "See How It Works",
      secondaryCtaHref: "#how-it-works",
    },
    {
      _type: "valueStripBlock" as const,
      _key: key(),
      items: [
        {
          _type: "valueStripItem",
          value: "30%",
          label: "Flat Commission",
          description: "Earn on every first-time purchase — no tiers.",
        },
        {
          _type: "valueStripItem",
          value: "No",
          label: "Subscription Required",
          description: "Your audience can buy HOTSHEET, PointsPacks, or Terminal a la carte.",
        },
        {
          _type: "valueStripItem",
          value: "Day 1",
          label: "Payouts",
          description: "Commissions start from your first referred purchase.",
        },
      ],
    },
    {
      _type: "faqBlock" as const,
      _key: key(),
      label: "// Questions",
      title: portableText(["Frequently Asked.", { text: "Clearly Answered.", accent: true }]),
      items: [
        {
          _type: "faqItem",
          question: "What is the WAGERBIRD Affiliate Program?",
          answer:
            "The WAGERBIRD Affiliate Program lets you earn 30% commission by referring your audience to WAGERBIRD. When someone clicks your unique link and makes their first purchase — HOTSHEET, PointsPack, or Terminal access — you earn 30% of that transaction.",
        },
        {
          _type: "faqItem",
          question: "Who can apply?",
          answer:
            "Creators, analysts, newsletters, podcasts, and communities in the sports, betting, fantasy, or DFS space are encouraged to apply. We manually review every application for brand fit.",
        },
        {
          _type: "faqItem",
          question: "How are commissions tracked?",
          answer:
            "You get a unique affiliate link tied to a partner dashboard. Clicks, conversions, and commissions are tracked in real time so you always know what you're earning.",
        },
      ],
    },
    {
      _type: "ctaBannerBlock" as const,
      _key: key(),
      watermark: "PARTNER",
      title: portableText(["Build Your Edge.", "And Your Income."]),
      subtitle:
        "Apply now and start earning 30% on every first-time purchase your audience makes on WAGERBIRD.",
      ctaLabel: "Apply to the Program →",
      ctaHref: "/register",
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
      description:
        "We're working on it. Check back soon or explore Terminal, Hotsheet, and Pricing.",
      primaryCtaLabel: "Go to Home →",
      primaryCtaHref: "/",
    },
  ],
});

export const comingSoonPages = [
  comingSoonBlock("about", "About", 10),
  comingSoonBlock("contact", "Contact", 11),
  comingSoonBlock("faq", "FAQ", 12),
  comingSoonBlock("learn", "Learn", 13),
  comingSoonBlock("live-odds", "Live Odds", 14),
  comingSoonBlock("results", "Results", 15),
  comingSoonBlock("privacy-policy", "Privacy Policy", 16),
  comingSoonBlock("terms-of-service", "Terms of Service", 17),
];

export const allPages = [
  homePage,
  terminalPage,
  pricingPage,
  oddsPage,
  hotsheetPage,
  sportsbooksPage,
  affiliatesLandingPage,
  ...comingSoonPages,
];

// ── Seed Blog Posts ──

export const blogPosts = [
  {
    _id: "blog-what-is-sports-betting-strategy",
    _type: "blogPost" as const,
    title: "What Is a Sports Betting Strategy? How Winning Bettors Approach the Market",
    slug: { _type: "slug" as const, current: "what-is-a-sports-betting-strategy" },
    excerpt:
      "Most casual bettors focus on predicting winners. Professional bettors focus on pricing, probability, and risk management. That distinction is everything.",
    publishedAt: "2026-03-13T00:00:00.000Z",
    featured: true,
    categories: ["strategy"],
    mainImage: undefined,
    heroEyebrow: "What Is a Sports Betting Strategy?",
    heroTitle: "What Is a Sports Betting Strategy?",
    heroSubtitle: "How Winning Bettors Approach the Market",
    author: "WagerBird Team",
    readTimeMinutes: 9,
    heroStats: [
      { value: "$49.7B", label: "Global betting market 2026" },
      { value: "52%", label: "Win rate to break even at -110" },
      { value: "53–56%", label: "Typical pro bettor edge range" },
    ],
    body: [
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "The global online sports betting market is projected to grow from roughly $49.7 billion in 2026 to $92.5 billion by 2031. Most of that money flows in one direction — from bettors to sportsbooks. The reason isn't bad luck. It's the absence of structure.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Casual bettors approach betting with a short-term mindset. They react to what they just watched on TV. They increase bet sizes after losses. They rarely compare odds across books. By the time they place a bet, sportsbooks have already adjusted their lines using faster data feeds and pricing models — creating an information gap that the house exploits systematically.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [
          {
            _key: "m1",
            _type: "accent",
          } as any,
        ],
        children: [
          {
            _type: "span",
            text: "Professional bettors operate differently. They focus on ",
          },
          {
            _type: "span",
            marks: ["m1"],
            text: "pricing, probability, and risk management",
          },
          {
            _type: "span",
            text: " — not on predicting who wins. That distinction is everything.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "What Is a Sports Betting Strategy?",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "A sports betting strategy is a systematic method for placing bets based on probability, bankroll management, and data-driven decision-making. The goal is long-term profitability — not short-term wins.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Key characteristics of a genuine strategy:",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "01 — Defined bankroll rules",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "02 — Consistent, criteria-based bet sizing",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "03 — Clear selection criteria — what qualifies a bet",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "04 — Tracking and evaluating results over large samples",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "The fundamental distinction: a sports betting strategy is not about guessing outcomes. It is about identifying bets where the odds offer value relative to the true probability of the outcome.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Why Having a Sports Betting Strategy Matters",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Sportsbooks set odds with a built-in margin — the vig. On standard point spread wagers priced at -110, bettors must win approximately 52.4% of bets just to break even. Without a structured approach, most bettors fall well below that threshold.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Strategy Creates Discipline",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Emotional betting is the primary cause of bankroll destruction. A well-defined strategy reduces emotional interference by establishing rules in advance — rules that don't bend when a losing streak runs hot or a “sure thing” emerges. It removes the decision from the moment and places it in the framework.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Long-Term Thinking Changes the Game",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Professional bettors typically operate with a win rate of 53–56% against the spread. That sounds modest. What it means in practice is that success in sports betting comes from maintaining a small statistical edge across hundreds or thousands of wagers — not from hitting a few big calls.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Win rate alone doesn't tell you much. A bettor who goes 5-for-10 on high-confidence plays while 1-for-1 on a longshot has a 50% win rate but may be up significantly.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              'Example: Win $100k on a high-confidence play (5 units @ -110). Lose $10k on a speculative longshot (1 unit). Net result: +$90k at a “50%” win rate.',
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "The 4 Core Pillars of a Successful Sports Betting Strategy",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Pillar 01 — Bankroll Management",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "This is the foundation. Any team, in any game, can lose — and any bettor, regardless of skill, will experience losing streaks. The goal of bankroll management is to minimize drawdowns during those streaks while preserving enough capital to let the edge produce results over a large sample.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              'The traditional approach defines a “unit” as a percentage of bankroll — typically 1–3%. A $1,000 bankroll with 1-unit = $15 stakes survives significant variance without ruin. The limitation of flat unit sizing is that it treats a 52% confidence play identically to a 91% confidence play. Modern analytical frameworks size bets proportionally to signal quality or estimated edge — not to an arbitrary unit.',
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Pillar 02 — Value Betting & Expected Value (+EV)",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Expected value measures whether a bet is profitable over the long run. It compares your estimated probability of an outcome to the probability implied by the sportsbook's odds.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Your estimated probability: 55% → Implied win probability at current odds: 50% → Result: Positive expected value. Bet.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Professional bettors don't try to win every bet. Their goal is to consistently place wagers where the market has mispriced probability. Over a large sample, that process produces profit regardless of individual outcomes.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Closing Line Value (CLV) extends this further — it measures whether you consistently bet at better odds than where the line closes. The closing line is the most information-efficient price, incorporating everything the market knows before game time. Beating it consistently is evidence your edge is real.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Pillar 03 — Line Shopping & Odds Comparison",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Different sportsbooks offer different odds on the same event. Getting +135 instead of +120 on a bet you'd make at either price doesn't feel significant. Across hundreds of bets, those small pricing differences compound dramatically.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Best practice: maintain active accounts at multiple sportsbooks. Compare prices before every bet. Monitor line movement — steam moves (sharp action) often signal value before the market corrects.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Pillar 04 — Risk Management & Variance",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Variance is unavoidable. Even profitable strategies experience losing streaks. Underdogs win. Injuries change games. Random scoring events happen. A good risk management framework accounts for variance by using small relative bet sizes, maintaining large sample sizes before evaluating results, and avoiding emotional decisions during downswings.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Common Types of Sports Betting Strategies",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Flat Betting",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Betting the same unit size on every wager. Simple. Low-risk. Genuinely protective during losing streaks. Its real value is removing decision fatigue — when every bet is the same size, the only variable is the pick itself.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "The limitation: flat betting is agnostic to edge. A flat bettor stakes the same amount on a 52% confidence play as a 91% confidence play. That's not discipline — it's indifference to signal quality. Over a large enough sample, that indifference is expensive.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Kelly Criterion",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "A mathematical staking method that determines optimal bet size based on your estimated edge and the odds offered. It maximizes long-term bankroll growth — in theory. In practice, it has a fatal dependency: accurate edge estimation.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "If you're overconfident in your edge (which most bettors are), Kelly will consistently over-size your bets. That's not a flaw in Kelly — it's a flaw in the inputs. Many bettors use fractional Kelly (25–50% of full Kelly) to reduce this risk.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [
          {
            _key: "m2",
            _type: "accent",
          } as any,
        ],
        children: [
          {
            _type: "span",
            text: "Where WagerBird fits: ",
          },
          {
            _type: "span",
            marks: ["m2"],
            text:
              "Flat betting ignores edge. Full Kelly demands perfect edge measurement that most bettors can't produce. WagerBird's confidence-weighted proportionality sits between them deliberately — confidence scores provide the calibrated probability input that Kelly requires but rarely gets, then proportional sizing scales exposure to that confidence level.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Value-Based Betting Models",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [
          {
            _key: "link-terminal",
            _type: "link",
            href: "https://www.wagerbird.com/terminal",
          } as any,
        ],
        children: [
          {
            _type: "span",
            text:
              "Analytical bettors search for probability mispricing. Predictive models analyze historical performance, situational variables, and market behavior to compare model probabilities against live sportsbook odds in real time. Where a gap exists between model probability and market price, a signal emerges. ",
          },
          {
            _type: "span",
            marks: ["link-terminal"],
            text: "WagerBird's Terminal",
          },
          {
            _type: "span",
            text:
              " surfaces these signals with confidence scores that reflect the size of the pricing gap — turning wagering from prediction into market analysis.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Situational Betting",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Focusing on specific game conditions that create predictable pricing inefficiencies: teams on back-to-backs, travel fatigue, weather conditions in outdoor games, injury news and lineup changes. These situational factors are often incorporated into sportsbook lines quickly — the edge lives in identifying them before the market corrects.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "How to Build Your Own Sports Betting Strategy",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Step 1: Define Your Bankroll",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Decide how much capital you can allocate to betting — financially and psychologically. This is the amount you're comfortable losing entirely if things go wrong. No analytical edge survives poor bankroll management. Treat this capital as separate from your finances.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Step 2: Choose a Bet Sizing Framework",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Flat betting is the easiest starting point. As your understanding of edge quality improves, proportional or fractional Kelly sizing becomes appropriate. Most bettors struggle not with understanding these systems but with applying them consistently in real time — especially during losing streaks.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Step 3: Specialize in Specific Markets",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Depth of market knowledge produces better results than spreading attention across every sport and bet type. NFL point spreads, NBA totals, MLB moneylines — pick one or two markets, understand their pricing patterns, and build expertise before expanding.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Step 4: Bridge Strategy and Execution",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Most bettors understand the principles. Execution is where strategies break down. Applying bankroll rules, sizing bets accurately, and identifying value consistently requires analytical tools and market monitoring at a pace most bettors can't maintain manually.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "This is where platforms like WagerBird close the gap — by analyzing large datasets, surfacing pricing inefficiencies, and providing confidence-weighted signals before lines move.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Responsible Betting and Long-Term Thinking",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Sports betting should always be approached responsibly. Never bet money you cannot afford to lose. Avoid chasing losses. Treat betting as long-term decision-making, not entertainment that requires emotional investment in individual outcomes.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "If you or someone you know has a gambling problem and wants help, call 1-800-GAMBLER.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "A sports betting strategy is a structured approach designed to maximize long-term profitability — not just win rate.",
      "Winning bettors focus on value and probability rather than simply picking winners.",
      "Bankroll management, expected value, and line shopping form the foundation of most strategies.",
      "Analytics tools and betting models help identify high-confidence opportunities before lines move.",
    ],
    relatedPosts: [
      { _type: "reference", _ref: "blog-unit-sizing-vs-kelly-criterion" },
      { _type: "reference", _ref: "blog-closing-line-value-metric" },
    ],
  },
  {
    _id: "blog-closing-line-value-metric",
    _type: "blogPost" as const,
    title: "Closing Line Value: The One Metric Pro Bettors Actually Track",
    slug: { _type: "slug" as const, current: "closing-line-value-metric" },
    excerpt:
      "Win rate is the stat casual bettors obsess over. Closing Line Value is the one that actually tells you whether your edge is real.",
    publishedAt: "2026-02-20T00:00:00.000Z",
    featured: false,
    categories: ["analytics"],
    mainImage: undefined,
    heroEyebrow: "Analytics",
    heroTitle: "Closing Line Value",
    heroSubtitle: "The One Metric Pro Bettors Actually Track",
    author: "WagerBird Team",
    readTimeMinutes: 7,
    heroStats: [
      { value: "1", label: "Closing line that really matters" },
      { value: "100s", label: "Of bets needed to judge edge" },
      { value: "+EV", label: "If you consistently beat the close" },
    ],
    body: [
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Most bettors judge their performance by win–loss records. Pros care far more about whether they consistently beat the closing line — the final, information-efficient price before a game starts.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "If you routinely lock in +135 when the market closes +120, you're capturing value even if short-term results look noisy. Over time, that pricing edge compounds into profit.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Closing Line Value (CLV) is a better indicator of edge than short-term win rate.",
      "Consistently getting better odds than the closing line suggests your model or process is working.",
      "Short-term results can be noisy; CLV smooths out variance across a large sample.",
    ],
    relatedPosts: [
      { _type: "reference", _ref: "blog-what-is-sports-betting-strategy" },
      { _type: "reference", _ref: "blog-unit-sizing-vs-kelly-criterion" },
    ],
  },
  {
    _id: "blog-unit-sizing-vs-kelly-criterion",
    _type: "blogPost" as const,
    title: "Unit-Based vs. Kelly Criterion: Which Staking System Actually Works?",
    slug: { _type: "slug" as const, current: "unit-sizing-vs-kelly-criterion" },
    excerpt:
      "Flat units remove decision fatigue. Kelly maximizes growth — but only if your edge estimates are accurate. Most bettors get this wrong.",
    publishedAt: "2026-02-28T00:00:00.000Z",
    featured: false,
    categories: ["bankroll"],
    mainImage: undefined,
    heroEyebrow: "Bankroll Management",
    heroTitle: "Unit-Based vs. Kelly Criterion",
    heroSubtitle: "Which Staking System Actually Works?",
    author: "WagerBird Team",
    readTimeMinutes: 6,
    heroStats: [
      { value: "1–3%", label: "Typical unit size of bankroll" },
      { value: "Kelly", label: "Maximizes growth when edge is accurate" },
      { value: "Ruin", label: "Risk if you oversize with bad estimates" },
    ],
    body: [
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Bankroll management is the foundation of any serious betting strategy. Two frameworks dominate the conversation: fixed unit sizing and the Kelly Criterion.",
          },
        ],
      },
      {
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text:
              "Flat units keep risk simple and predictable, but they ignore differences in edge between bets. Kelly adapts stake size to edge — powerful in theory, dangerous if your assumptions are noisy.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Flat unit betting keeps things simple and protects you from catastrophic drawdowns.",
      "The Kelly Criterion can maximize long-term growth but is extremely sensitive to mis-estimated edges.",
      "Most serious bettors use a fractional Kelly or unit-based hybrid for practical risk management.",
    ],
    relatedPosts: [
      { _type: "reference", _ref: "blog-what-is-sports-betting-strategy" },
      { _type: "reference", _ref: "blog-closing-line-value-metric" },
    ],
  },
];
