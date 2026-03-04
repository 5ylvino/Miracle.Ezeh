import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miracle Ezeh | Business Manager & Administrator",
  description: "Professional portfolio of Miracle Ezeh, an experienced Business Manager and Administrator seeking high-profile opportunities in leading companies.",
  keywords: [
    "Miracle Ezeh",
    "Business Manager",
    "Administrator",
    "Business Administration",
    "Management Professional",
    "Portfolio",
    "Nigeria"
  ],
  authors: [{ name: "Miracle Ezeh" }],
  creator: "Miracle Ezeh",
  publisher: "Miracle Ezeh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://miracleezeh.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Miracle Ezeh | Business Manager & Administrator",
    description: "Professional portfolio of Miracle Ezeh, an experienced Business Manager and Administrator seeking high-profile opportunities in leading companies.",
    url: "https://miracleezeh.com",
    siteName: "Miracle Ezeh Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Miracle Ezeh - Business Manager & Administrator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miracle Ezeh | Business Manager & Administrator",
    description: "Professional portfolio of Miracle Ezeh, an experienced Business Manager and Administrator seeking high-profile opportunities in leading companies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Miracle Ezeh",
              jobTitle: "Business Manager & Administrator",
              email: "miraclezeh862@gmail.com",
              telephone: "+2348134095287",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Iyana Ipaja",
                addressRegion: "Lagos",
                postalCode: "102273",
                addressCountry: "NG",
              },
              url: "https://miracleezeh.com",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
