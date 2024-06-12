import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Roget Concept",
    description: "Your partner in full stack development",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className="max-w-7xl mx-auto">
            {children}
        </main>
        </body>
        </html>
);
}
