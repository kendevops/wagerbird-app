import { defineType, defineField } from "sanity";

export const signInPageType = defineType({
  name: "signInPage",
  title: "Sign In Page",
  type: "document",
  fields: [
    defineField({
      name: "leftEyebrow",
      title: "Left Eyebrow",
      type: "string",
      initialValue: "// Welcome back",
    }),
    defineField({
      name: "leftHeroLine1",
      title: "Left Hero Line 1",
      type: "string",
      initialValue: "Back in",
    }),
    defineField({
      name: "leftHeroLine2",
      title: "Left Hero Line 2 (accent)",
      type: "string",
      initialValue: "The Game.",
    }),
    defineField({
      name: "leftTagline",
      title: "Left Tagline",
      type: "text",
      initialValue:
        "Your signals are waiting. Log in to access today's picks and your Points balance.",
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string", title: "Value" },
            { name: "label", type: "string", title: "Label" },
          ],
        },
      ],
    }),
    defineField({
      name: "formEyebrow",
      title: "Form Eyebrow",
      type: "string",
      initialValue: "// Sign in",
    }),
    defineField({
      name: "formTitle",
      title: "Form Title",
      type: "string",
      initialValue: "Welcome Back",
    }),
    defineField({
      name: "emailLabel",
      title: "Email Label",
      type: "string",
      initialValue: "Email",
    }),
    defineField({
      name: "emailPlaceholder",
      title: "Email Placeholder",
      type: "string",
      initialValue: "your@email.com",
    }),
    defineField({
      name: "passwordLabel",
      title: "Password Label",
      type: "string",
      initialValue: "Password",
    }),
    defineField({
      name: "passwordPlaceholder",
      title: "Password Placeholder",
      type: "string",
      initialValue: "••••••••",
    }),
    defineField({
      name: "forgotLabel",
      title: "Forgot Link Label",
      type: "string",
      initialValue: "Forgot?",
    }),
    defineField({
      name: "submitLabel",
      title: "Submit Button Label",
      type: "string",
      initialValue: "Sign In",
    }),
    defineField({
      name: "signupPrompt",
      title: "Signup Prompt",
      type: "string",
      initialValue: "Don't have an account?",
    }),
    defineField({
      name: "signupLinkLabel",
      title: "Signup Link Label",
      type: "string",
      initialValue: "Sign up →",
    }),
    defineField({
      name: "signupLinkHref",
      title: "Signup Link URL",
      type: "string",
      initialValue: "/register",
    }),
    defineField({
      name: "finePrint",
      title: "Fine Print",
      type: "string",
      initialValue: "Points never expire · Cancel anytime",
    }),
    defineField({
      name: "formAction",
      title: "Form Action URL (optional)",
      type: "url",
      description:
        "If you want the form to POST directly to app.wagerbird.com; leave empty to handle client-side.",
    }),
  ],
  preview: { prepare: () => ({ title: "Sign In Page" }) },
});

export const registerPageType = defineType({
  name: "registerPage",
  title: "Register Page",
  type: "document",
  fields: [
    defineField({
      name: "leftEyebrow",
      title: "Left Eyebrow",
      type: "string",
      initialValue: "// Get Started",
    }),
    defineField({
      name: "leftHeroLine1",
      title: "Left Hero Line 1",
      type: "string",
      initialValue: "Your Edge",
    }),
    defineField({
      name: "leftHeroLine2",
      title: "Left Hero Line 2 (accent)",
      type: "string",
      initialValue: "Starts Here",
    }),
    defineField({
      name: "leftTagline",
      title: "Left Tagline",
      type: "text",
      initialValue:
        "Join thousands bettors using confidence-scored signals to make smarter plays across every sport.",
    }),
    defineField({
      name: "featureBullets",
      title: "Feature Bullets",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "bold", type: "string", title: "Bold Text" },
            { name: "rest", type: "string", title: "Rest of Text" },
          ],
        },
      ],
    }),
    defineField({
      name: "formEyebrow",
      title: "Form Eyebrow",
      type: "string",
      initialValue: "// Create Account",
    }),
    defineField({
      name: "formTitle",
      title: "Form Title",
      type: "string",
      initialValue: "Get Started",
    }),
    defineField({
      name: "formSubtitle",
      title: "Form Subtitle",
      type: "string",
      initialValue: "Free to join. Buy Points when you're ready.",
    }),
    defineField({ name: "firstNameLabel", type: "string", title: "First Name Label", initialValue: "First Name" }),
    defineField({
      name: "firstNamePlaceholder",
      type: "string",
      title: "First Name Placeholder",
      initialValue: "First",
    }),
    defineField({ name: "lastNameLabel", type: "string", title: "Last Name Label", initialValue: "Last Name" }),
    defineField({
      name: "lastNamePlaceholder",
      type: "string",
      title: "Last Name Placeholder",
      initialValue: "Last",
    }),
    defineField({ name: "phoneLabel", type: "string", title: "Phone Label", initialValue: "Phone Number" }),
    defineField({
      name: "phonePlaceholder",
      type: "string",
      title: "Phone Placeholder",
      initialValue: "(555) 000-0000",
    }),
    defineField({ name: "emailLabel", type: "string", title: "Email Label", initialValue: "Email" }),
    defineField({
      name: "emailPlaceholder",
      type: "string",
      title: "Email Placeholder",
      initialValue: "your@email.com",
    }),
    defineField({ name: "passwordLabel", type: "string", title: "Password Label", initialValue: "Password" }),
    defineField({
      name: "passwordPlaceholder",
      type: "string",
      title: "Password Placeholder",
      initialValue: "Min 8 characters",
    }),
    defineField({
      name: "confirmPasswordLabel",
      type: "string",
      title: "Confirm Password Label",
      initialValue: "Confirm Password",
    }),
    defineField({
      name: "confirmPasswordPlaceholder",
      type: "string",
      title: "Confirm Password Placeholder",
      initialValue: "Re-enter password",
    }),
    defineField({
      name: "submitLabel",
      title: "Submit Button Label",
      type: "string",
      initialValue: "Create Account",
    }),
    defineField({
      name: "legalText",
      title: "Legal Text",
      type: "text",
      initialValue:
        "By signing up you agree to our Terms of Service and Privacy Policy. Must be 21+ to bet.",
    }),
    defineField({
      name: "termsHref",
      title: "Terms of Service URL",
      type: "string",
      initialValue: "/terms-of-service",
    }),
    defineField({
      name: "privacyHref",
      title: "Privacy Policy URL",
      type: "string",
      initialValue: "/privacy-policy",
    }),
    defineField({
      name: "signinPrompt",
      title: "Signin Prompt",
      type: "string",
      initialValue: "Already have an account?",
    }),
    defineField({
      name: "signinLinkLabel",
      title: "Signin Link Label",
      type: "string",
      initialValue: "Sign In →",
    }),
    defineField({
      name: "signinLinkHref",
      title: "Signin Link URL",
      type: "string",
      initialValue: "/signin",
    }),
    defineField({
      name: "formAction",
      title: "Form Action URL (optional)",
      type: "url",
    }),
  ],
  preview: { prepare: () => ({ title: "Register Page" }) },
});

export const notFoundPageType = defineType({
  name: "notFoundPage",
  title: "404 Not Found Page",
  type: "document",
  fields: [
    defineField({
      name: "eyebrowPrefix",
      title: "Eyebrow Prefix",
      type: "string",
      initialValue: "// Error",
    }),
    defineField({
      name: "eyebrowLabel",
      title: "Eyebrow Label",
      type: "string",
      initialValue: "Page Not Found",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Signal Lost.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      initialValue:
        "The page you're looking for went out of bounds. It may have been moved, deleted, or never existed.",
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA Label",
      type: "string",
      initialValue: "Back to Home",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Primary CTA URL",
      type: "string",
      initialValue: "/",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA Label",
      type: "string",
      initialValue: "View Signals",
    }),
    defineField({
      name: "secondaryCtaHref",
      title: "Secondary CTA URL",
      type: "string",
      initialValue: "/terminal",
    }),
  ],
  preview: { prepare: () => ({ title: "404 Not Found Page" }) },
});

export const error500PageType = defineType({
  name: "error500Page",
  title: "500 Error Page",
  type: "document",
  fields: [
    defineField({
      name: "statusLeft",
      title: "Status Left Text",
      type: "string",
      initialValue: "System Error",
    }),
    defineField({
      name: "statusRight",
      title: "Status Right Text",
      type: "string",
      initialValue: "Server Unresponsive",
    }),
    defineField({
      name: "recoveryLabel",
      title: "Recovery Label",
      type: "string",
      initialValue: "System Recovery",
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "// Error · Internal Server Failure",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "System Down.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      initialValue:
        "Something went wrong on our end. Our team has been notified and is working on a fix.",
    }),
    defineField({
      name: "tracePrefix",
      title: "Trace Prefix",
      type: "string",
      initialValue: "ERR_INTERNAL · TRACE_ID:",
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA Label",
      type: "string",
      initialValue: "Try Again",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA Label",
      type: "string",
      initialValue: "Back to Home",
    }),
    defineField({
      name: "secondaryCtaHref",
      title: "Secondary CTA URL",
      type: "string",
      initialValue: "/",
    }),
  ],
  preview: { prepare: () => ({ title: "500 Error Page" }) },
});

export const comingSoonMetaType = defineType({
  name: "comingSoonPage",
  title: "Coming Soon Page",
  type: "document",
  fields: [
    defineField({
      name: "tickerItems",
      title: "Ticker Items",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "// Something Big Is Coming",
    }),
    defineField({
      name: "heroWhite",
      title: "Hero Line 1 (white)",
      type: "string",
      initialValue: "Coming",
    }),
    defineField({
      name: "heroYellow",
      title: "Hero Line 2 (yellow)",
      type: "string",
      initialValue: "Soon.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      initialValue:
        "We're building something that will change how you bet. Be the first to know when it drops.",
    }),
    defineField({
      name: "targetDate",
      title: "Target Launch Date",
      type: "datetime",
      description: "Used for the countdown timer.",
    }),
    defineField({
      name: "emailPlaceholder",
      title: "Email Input Placeholder",
      type: "string",
      initialValue: "Enter your email for early access",
    }),
    defineField({
      name: "notifyLabel",
      title: "Notify Button Label",
      type: "string",
      initialValue: "Notify Me",
    }),
    defineField({
      name: "finePrint",
      title: "Fine Print",
      type: "string",
      initialValue: "No spam. Unsubscribe anytime.",
    }),
  ],
  preview: { prepare: () => ({ title: "Coming Soon Page" }) },
});

export const affiliatesPageType = defineType({
  name: "affiliatesPage",
  title: "Affiliates Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "calculator", title: "Calculator" },
    { name: "whyProgram", title: "Why This Program" },
    { name: "marquee", title: "Marquee" },
    { name: "whatYouPromote", title: "What You Promote" },
    { name: "process", title: "The Process" },
    { name: "whoShouldApply", title: "Who Should Apply" },
    { name: "resources", title: "Partner Resources" },
    { name: "cta", title: "CTA Banner" },
    { name: "faq", title: "FAQ" },
  ],
  fields: [
    // Hero
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "text",
      rows: 2,
      group: "hero",
      initialValue: "Get Paid to\nShare the Edge.",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      group: "hero",
      initialValue:
        "Earn 30% on every first-time purchase your audience makes on WagerBird — HOTSHEET, PointsPacks, or Terminal access. Flat rate. No tiers. No forced subscriptions.",
    }),
    defineField({
      name: "commissionMeta",
      title: "Commission Meta Line",
      type: "string",
      group: "hero",
      initialValue: "// Commission · First Purchase · No Cap",
    }),
    defineField({
      name: "programStatus",
      title: "Program Status Line",
      type: "string",
      group: "hero",
      initialValue: "Program Open · Paying Out From Day One",
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA Label",
      type: "string",
      group: "hero",
      initialValue: "Apply to the Program",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Primary CTA URL",
      type: "string",
      group: "hero",
      initialValue: "/register",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA Label",
      type: "string",
      group: "hero",
      initialValue: "See How It Works",
    }),
    defineField({
      name: "secondaryCtaHref",
      title: "Secondary CTA URL",
      type: "string",
      group: "hero",
      initialValue: "#how-it-works",
    }),

    // Calculator
    defineField({
      name: "calcEyebrow",
      title: "Calculator Eyebrow",
      type: "string",
      group: "calculator",
      initialValue: "// Your Potential Earnings",
    }),
    defineField({
      name: "calcHeading",
      title: "Calculator Heading",
      type: "text",
      rows: 2,
      group: "calculator",
      initialValue: "See What Your Cut Looks Like.",
    }),
    defineField({
      name: "calcDescription",
      title: "Calculator Description",
      type: "text",
      group: "calculator",
      initialValue:
        "Pick the product. Drag the slider. See exactly what 30% means for your audience — no ambiguity, no fine print.",
    }),

    // Why Program
    defineField({
      name: "whyEyebrow",
      title: "Why Section Eyebrow",
      type: "string",
      group: "whyProgram",
      initialValue: "// Why This Program",
    }),
    defineField({
      name: "whyHeading",
      title: "Why Section Heading",
      type: "string",
      group: "whyProgram",
      initialValue: "Platform.",
    }),
    defineField({
      name: "whyDescription",
      title: "Why Section Description",
      type: "text",
      group: "whyProgram",
      initialValue:
        "WagerBird runs on process. Clean structure, no noise, everything visible. The affiliate program works exactly the same way.",
    }),
    defineField({
      name: "whyCtaLabel",
      title: "Why Section CTA Label",
      type: "string",
      group: "whyProgram",
      initialValue: "Apply Now",
    }),
    defineField({
      name: "whyReasons",
      title: "Reasons",
      type: "array",
      group: "whyProgram",
      of: [
        {
          type: "object",
          fields: [
            { name: "num", type: "string", title: "Number" },
            { name: "body", type: "text", title: "Body" },
            { name: "tag", type: "string", title: "Tag" },
          ],
          preview: {
            select: { tag: "tag", num: "num" },
            prepare({ tag, num }) {
              return { title: `${num} - ${tag}` };
            },
          },
        },
      ],
    }),

    // Marquee
    defineField({
      name: "marqueeItems",
      title: "Marquee Items",
      type: "array",
      group: "marquee",
      of: [{ type: "string" }],
    }),

    // What You Promote
    defineField({
      name: "wypEyebrow",
      title: "What You Promote Eyebrow",
      type: "string",
      group: "whatYouPromote",
      initialValue: "// What You Promote",
    }),
    defineField({
      name: "wypHeading1",
      title: "Heading Line 1",
      type: "string",
      group: "whatYouPromote",
      initialValue: "Two Products.",
    }),
    defineField({
      name: "wypHeading2",
      title: "Heading Line 2",
      type: "string",
      group: "whatYouPromote",
      initialValue: "One Clean Commission.",
    }),
    defineField({
      name: "wypDescription",
      title: "Description",
      type: "text",
      group: "whatYouPromote",
      initialValue:
        "Promote WagerBird's core products. Every first-time purchase through your link earns 30% — no exceptions, no fine print.",
    }),
    defineField({
      name: "wypFootnote",
      title: "Footnote",
      type: "text",
      group: "whatYouPromote",
      initialValue:
        "Commission applies to first-time purchases. All activity tracked in real time inside your partner dashboard.",
    }),
    defineField({
      name: "wypProducts",
      title: "Products",
      type: "array",
      group: "whatYouPromote",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", type: "string", title: "ID" },
            {
              name: "badges",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", type: "string", title: "Label" },
                    { name: "filled", type: "boolean", title: "Filled", initialValue: false },
                  ],
                },
              ],
            },
            { name: "title", type: "string", title: "Title" },
            {
              name: "subtags",
              type: "array",
              of: [{ type: "string" }],
            },
            { name: "description", type: "text", title: "Description" },
            {
              name: "tiers",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", type: "string", title: "Label" },
                    { name: "price", type: "number", title: "Price" },
                    { name: "earn", type: "number", title: "Earn" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),

    // Process
    defineField({
      name: "procEyebrow",
      title: "Process Eyebrow",
      type: "string",
      group: "process",
      initialValue: "// The Process",
    }),
    defineField({
      name: "procSubtitle",
      title: "Process Subtitle",
      type: "text",
      group: "process",
      initialValue:
        "Four steps. Clean process. You'll hear back quickly — no lengthy vetting, just a real audience check.",
    }),
    defineField({
      name: "procHeading",
      title: "Process Heading",
      type: "string",
      group: "process",
      initialValue: "Get Paid.",
    }),
    defineField({
      name: "procSteps",
      title: "Steps",
      type: "array",
      group: "process",
      of: [
        {
          type: "object",
          fields: [
            { name: "num", type: "string", title: "Number" },
            { name: "body", type: "text", title: "Body" },
          ],
        },
      ],
    }),

    // Who Should Apply
    defineField({
      name: "wsaEyebrow",
      title: "Who Should Apply Eyebrow",
      type: "string",
      group: "whoShouldApply",
      initialValue: "// Who Should Apply",
    }),
    defineField({
      name: "wsaHeading1",
      title: "Heading Line 1",
      type: "string",
      group: "whoShouldApply",
      initialValue: "Built for Anyone",
    }),
    defineField({
      name: "wsaHeading2",
      title: "Heading Line 2 (accent)",
      type: "string",
      group: "whoShouldApply",
      initialValue: "a Relevant Audience.",
    }),
    defineField({
      name: "wsaDescription",
      title: "Description",
      type: "text",
      group: "whoShouldApply",
      initialValue:
        "If your audience has a genuine interest in sports betting, bankroll management, fantasy sports, or DFS — there's a real fit here. We review every application to confirm it.",
    }),
    defineField({
      name: "wsaAudiences",
      title: "Audiences",
      type: "array",
      group: "whoShouldApply",
      of: [
        {
          type: "object",
          fields: [
            { name: "num", type: "string", title: "Number" },
            { name: "title", type: "string", title: "Title" },
            { name: "body", type: "text", title: "Body" },
            { name: "span", type: "number", title: "Grid Span", initialValue: 2 },
          ],
        },
      ],
    }),

    // Partner Resources
    defineField({
      name: "prEyebrow",
      title: "Resources Eyebrow",
      type: "string",
      group: "resources",
      initialValue: "// Partner Resources",
    }),
    defineField({
      name: "prHeading1",
      title: "Heading Line 1",
      type: "string",
      group: "resources",
      initialValue: "Everything you need to",
    }),
    defineField({
      name: "prHeading2",
      title: "Heading Line 2",
      type: "string",
      group: "resources",
      initialValue: "Start Promoting.",
    }),
    defineField({
      name: "prDescription",
      title: "Description",
      type: "text",
      group: "resources",
      initialValue: "You handle the audience. We handle the assets. Approved affiliates can ship on day one.",
    }),
    defineField({
      name: "prResources",
      title: "Resources",
      type: "array",
      group: "resources",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", type: "string", title: "ID" },
            { name: "title", type: "string", title: "Title" },
            { name: "body", type: "text", title: "Body" },
            { name: "href", type: "string", title: "Link URL" },
            { name: "highlighted", type: "boolean", title: "Highlighted", initialValue: false },
          ],
        },
      ],
    }),

    // CTA
    defineField({
      name: "ctaEyebrow",
      title: "CTA Eyebrow",
      type: "string",
      group: "cta",
      initialValue: "// Get Started — Affiliate Program",
    }),
    defineField({
      name: "ctaHeading1",
      title: "CTA Heading Line 1",
      type: "string",
      group: "cta",
      initialValue: "Build Your Edge.",
    }),
    defineField({
      name: "ctaHeading2",
      title: "CTA Heading Line 2",
      type: "string",
      group: "cta",
      initialValue: "And Your Income.",
    }),
    defineField({
      name: "ctaDescription",
      title: "CTA Description",
      type: "text",
      group: "cta",
      initialValue: "Apply now. Start earning 30% on every first-time purchase your audience makes on WagerBird.",
    }),
    defineField({
      name: "ctaButtonLabel",
      title: "CTA Button Label",
      type: "string",
      group: "cta",
      initialValue: "Apply to the Affiliate Program",
    }),
    defineField({
      name: "ctaButtonHref",
      title: "CTA Button URL",
      type: "string",
      group: "cta",
      initialValue: "/register",
    }),
    defineField({
      name: "ctaFooterText",
      title: "CTA Footer Text",
      type: "string",
      group: "cta",
      initialValue: "Questions?",
    }),
    defineField({
      name: "ctaFooterEmail",
      title: "CTA Footer Email",
      type: "string",
      group: "cta",
      initialValue: "partners@wagerbird.com",
    }),

    // FAQ
    defineField({
      name: "faqEyebrow",
      title: "FAQ Eyebrow",
      type: "string",
      group: "faq",
      initialValue: "// Questions",
    }),
    defineField({
      name: "faqHeading1",
      title: "FAQ Heading Line 1",
      type: "string",
      group: "faq",
      initialValue: "Frequently Asked.",
    }),
    defineField({
      name: "faqHeading2",
      title: "FAQ Heading Line 2",
      type: "string",
      group: "faq",
      initialValue: "Clearly Answered.",
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Items",
      type: "array",
      group: "faq",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", type: "string", title: "ID" },
            { name: "question", type: "string", title: "Question" },
            { name: "answer", type: "text", title: "Answer" },
          ],
        },
      ],
    }),

    // Calculator products (for calculator UI)
    defineField({
      name: "calcProducts",
      title: "Calculator Products",
      type: "array",
      group: "calculator",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", type: "string", title: "ID" },
            { name: "name", type: "string", title: "Name" },
            { name: "price", type: "number", title: "Price" },
            { name: "label", type: "string", title: "Label (e.g. $25 per purchase)" },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Affiliates Page" }) },
});

