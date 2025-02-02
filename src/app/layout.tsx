import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-dvh">
      <body
        className={`${geistSans.className} min-h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
