import { Builder } from "@builder.io/sdk";
import Hotsheet from "./components/Hotsheet";
import HotsheetFeatures from "./components/HotsheetFeatures";
import EmailCapture from "./components/EmailCapture";

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
