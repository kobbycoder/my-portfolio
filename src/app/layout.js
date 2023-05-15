import "./globals.css";
import { Inter, Fira_Code } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Fira_Code({ subsets: ["greek"] });

export const metadata = {
  title: "Your vision, my code",
  description: "Fullstack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
