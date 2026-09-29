import { NavItem } from "@/types";
import { servicesData } from "./services";

export const navigationData: NavItem[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "ABOUT US",
    href: "/about-us",
  },
  {
    title: "SERVICES",
    href: "/services",
    children: servicesData.map((service) => ({
      title: service.title,
      href: `/services/${service.slug}`,
      description: service.shortDescription,
    })),
  },
  {
    title: "PORTFOLIO",
    href: "/portfolio",
  },
  {
    title: "BLOG",
    href: "/blog",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];

export const footerNavigation = {
  services: servicesData.map((s) => ({
    title: s.title,
    href: `/services/${s.slug}`,
  })),
  company: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Blog & Guides", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
    { title: "Book Strategy Call", href: "/free-strategy-call" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms & Conditions", href: "/terms" },
  ],
};
