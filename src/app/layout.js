import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "Market Viz",
    description: "Your Info Point for Financial Market",
};

export default function RootLayout({ children }) {
    

    

    return (
        <html lang="en">
            <body className={`bg-background-light dark:bg-background-dark ${inter.className}`}>
                <div className="min-h-screen">
                    <Navigation />
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
