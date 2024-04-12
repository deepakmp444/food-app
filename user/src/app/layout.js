import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gullar",
  description: "Search...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-light`}>{children}</body>
    </html>
  );
}
