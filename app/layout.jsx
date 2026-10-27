import "./page.css";

export const metadata = {
  title: "BUVCloud | Cloud Security",
  description: "Secure your cloud. Move forward with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
