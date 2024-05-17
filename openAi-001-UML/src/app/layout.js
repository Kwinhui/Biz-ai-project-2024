import { Inter } from "next/font/google";
import "./globals.css";
import css from "@/css/page.module.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header className={css.header}>
          <h1>AI UML Generated</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
