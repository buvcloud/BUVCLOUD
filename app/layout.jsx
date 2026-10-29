import "./page.css";
import BiplIntro from "./BiplIntro";

export const metadata = {
  title: "BUVCloud | Cloud Security",
  description:
    "Secure your cloud. Move forward with confidence. BUVCloud helps businesses improve cloud security and visibility.",
  metadataBase: new URL("https://buvcloud.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BiplIntro />
        {children}
      </body>
    </html>
  );
}