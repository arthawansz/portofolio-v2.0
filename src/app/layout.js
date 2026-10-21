import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Arthawan Pratama - Personal Portfolio",
  description:
    "Fullstack Web Developer Portfolio showcasing modern web applications and creative engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#09090B] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
