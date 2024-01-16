import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Providers from "../components/Providers.tsx";
const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
    title: "IniAnimeList",
    description: "Website Anime Pasuruan",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${gabarito.className} bg-color-dark`}
                suppressHydrationWarning={true}
            >
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
