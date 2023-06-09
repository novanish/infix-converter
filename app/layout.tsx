import "@edge-ui/react/styles.css";
import "../style/globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infix Converter",
  description: "Convert infix expression to postfix or prefix expression",
  keywords: ["infix", "postfix", "prefix", "converter", "expression"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="px-7 md:px-10 lg:px-14 space-y-16  max-w-7xl mx-auto mb-28 mt-14">
          {children}
        </main>
      </body>
    </html>
  );
}
