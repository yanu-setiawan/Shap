import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    default: "Y - Personal Website",
    template: "%s / Personal Website",
  },
  description:
    "This is a personal website optimized for best performance and SEO.",
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        href: "/icons/favicon.ico",
      },
    ],
  },
  openGraph: {
    title: "Y - Personal Website",
    description:
      "This is a personal website optimized for best performance and SEO.",
    images: [
      {
        url: "/assets/og-image.png",
      },
    ],
  },
  metadataBase: new URL("https://shap.vercel.app"),
};
