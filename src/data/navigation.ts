import { NavItem } from "@/types";
import { servicesData } from "./services";

export const navigationData: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
    children: servicesData.map((service) => ({
      title: service.title,
      href: `/services/${service.slug}`,
      description: service.shortDescription,
    })),
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
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
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
    { title: "Free Strategy Call", href: "/free-strategy-call" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms & Conditions", href: "/terms" },
    { title: "Cookie Policy", href: "/cookies" },
  ],
};
