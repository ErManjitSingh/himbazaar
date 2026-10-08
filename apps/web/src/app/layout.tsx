import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: SITE_NAME,
    description: SITE_TAGLINE,
    path: "/",
  }),
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${sora.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
