// next-seo.config.ts
import type { NextSeoProps } from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: "#Paraharca | Umut Kızıloğlu",
  description:
    "Paraharca uygulaması paranızı hızlıca çarçur edebileceğiniz bir nextjs uygalaması",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://paraharca.umutk.me",
    title: "#Paraharca | Umut Kızıloğlu",
    description:
      "Paraharca uygulaması paranızı hızlıca çarçur edebileceğiniz bir nextjs uygalaması",
    siteName: "#Paraharca",
    images: [
      {
        url: "https://paraharca.umutk.me/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Paraharca uygulaması",
      },
    ],
  },
  additionalMetaTags: [
    {
      name: "theme-color",
      content: "#6ad654",
    },
  ],
  twitter: {
    handle: "@umutkdev",
    site: "@umutkdev",
    cardType: "summary_large_image",
  },
};
