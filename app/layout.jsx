import "./page.css";

export const metadata = {
  metadataBase: new URL("https://buvcloud.com"),

  title: {
    default: "BUVCloud | Cloud Security & Cloud Solutions",
    template: "%s | BUVCloud",
  },

  description:
    "BUVCloud helps businesses strengthen cloud security, improve visibility, and manage cloud infrastructure with confidence.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "BUVCloud | Cloud Security & Cloud Solutions",
    description:
      "Secure your cloud. Move forward with confidence.",
    url: "https://buvcloud.com",
    siteName: "BUVCloud",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}