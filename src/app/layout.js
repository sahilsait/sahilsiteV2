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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} min-h-screen bg-gradient-to-br from-gray-900 to-slate-900`}
      >
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
