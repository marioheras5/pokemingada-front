import type { Metadata } from "next";
import "./globals.css";
import PageNav from "./components/pageNav";

export const metadata: Metadata = {
  title: "Pokemingada",
  description: "Torneo de pokemon amistoso por y para mingos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon_normal.png"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-neutral-950 bg-bl m-0 p-0 h-full w-full">
        <header className="sticky top-0 z-10 flex w-full h-18 md:h-24 items-center shadow-2xl ">
          <PageNav/>
        </header>
        <div className="w-full h-full bg-[url('/background.webp')] bg-repeat-y bg-auto-100">
          {children}
        </div>
      </body>
    </html>
  );
}
