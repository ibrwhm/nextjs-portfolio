import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const font = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: "normal",
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${font.className} text-white bg-[#171A21] w-full h-full min-h-screen m-0 p-0`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
