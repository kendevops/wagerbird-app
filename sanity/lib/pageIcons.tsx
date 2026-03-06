import type { ComponentType } from "react";
import { createElement } from "react";
import * as Icons from "@sanity/icons";

const iconMap: Record<string, ComponentType<{ style?: React.CSSProperties }>> = {
  DocumentIcon: Icons.DocumentIcon,
  HomeIcon: Icons.HomeIcon,
  CreditCardIcon: Icons.CreditCardIcon,
  EarthGlobeIcon: Icons.EarthGlobeIcon,
  RocketIcon: Icons.RocketIcon,
  CalendarIcon: Icons.CalendarIcon,
  BookIcon: Icons.BookIcon,
  InfoOutlineIcon: Icons.InfoOutlineIcon,
  DocumentRemoveIcon: Icons.DocumentRemoveIcon,
  BoltIcon: Icons.BoltIcon,
  BarChartIcon: Icons.BarChartIcon,
  EnvelopeIcon: Icons.EnvelopeIcon,
  DocumentsIcon: Icons.DocumentsIcon,
  CogIcon: Icons.CogIcon,
  LinkIcon: Icons.LinkIcon,
};

export const PAGE_ICON_OPTIONS = [
  { title: "Document", value: "DocumentIcon" },
  { title: "Home", value: "HomeIcon" },
  { title: "Credit card / Pricing", value: "CreditCardIcon" },
  { title: "Globe", value: "EarthGlobeIcon" },
  { title: "Rocket", value: "RocketIcon" },
  { title: "Calendar", value: "CalendarIcon" },
  { title: "Book", value: "BookIcon" },
  { title: "Info", value: "InfoOutlineIcon" },
  { title: "Bolt", value: "BoltIcon" },
  { title: "Chart", value: "BarChartIcon" },
  { title: "Envelope", value: "EnvelopeIcon" },
  { title: "Documents", value: "DocumentsIcon" },
  { title: "Cog", value: "CogIcon" },
  { title: "Link", value: "LinkIcon" },
];

export function getPageIconComponent(
  iconKey: string | undefined
): ComponentType<{ style?: React.CSSProperties }> {
  if (iconKey && iconKey in iconMap) {
    return iconMap[iconKey];
  }
  return Icons.DocumentIcon;
}

export function renderPageIcon(iconKey: string | undefined) {
  return createElement(getPageIconComponent(iconKey), { style: { width: 20, height: 20 } });
}
