import { Roboto } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ssait",
  description: "the work and wonders from the life of saitji",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${roboto.className} min-h-screen bg-[#0a192f]`}>
        <div className=" text-gray-300 p-8 md:px-16 md:py-8">
          <div className="max-w-4xl mx-auto">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
