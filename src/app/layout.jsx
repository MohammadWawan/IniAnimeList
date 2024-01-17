import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
const gabarito = Gabarito({ subsets: ["latin"] });
import Providers from "../components/Providers";

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
