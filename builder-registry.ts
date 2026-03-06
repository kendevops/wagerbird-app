import { Builder } from "@builder.io/sdk";
import Hotsheet from "./components/Hotsheet";
import HotsheetFeatures from "./components/HotsheetFeatures";
import EmailCapture from "./components/EmailCapture";
import ValueStrip from "./components/ValueStrip";
import Ticker from "./components/Ticker";
import HowItWorks from "./components/HowItWorks";
import HotsheetPricing from "./components/HotsheetPricing";
import HotsheetWhy from "./components/HotsheetWhy";
import ProofSection from "./components/ProofSection";
import ProcessSection from "./components/ProcessSection";
import Faq from "./components/Faq";
import CtaBanner from "./components/CtaBanner";

Builder.registerComponent(Hotsheet, {
  name: "Hotsheet",
  inputs: [
    {
      name: "ctaLabel",
      type: "string",
    },
    {
      name: "ctaHref",
      type: "string",
    },
  ],
});

Builder.registerComponent(HotsheetFeatures, {
  name: "HotsheetFeatures",
});

Builder.registerComponent(EmailCapture, {
  name: "EmailCapture",
});

Builder.registerComponent(ValueStrip, {
  name: "ValueStrip",
});

Builder.registerComponent(Ticker, {
  name: "Ticker",
});

Builder.registerComponent(HowItWorks, {
  name: "HowItWorks",
});

Builder.registerComponent(HotsheetPricing, {
  name: "HotsheetPricing",
});

Builder.registerComponent(HotsheetWhy, {
  name: "HotsheetWhy",
});

Builder.registerComponent(ProofSection, {
  name: "ProofSection",
});

Builder.registerComponent(ProcessSection, {
  name: "ProcessSection",
});

Builder.registerComponent(Faq, {
  name: "Faq",
});

Builder.registerComponent(CtaBanner, {
  name: "CtaBanner",
});
