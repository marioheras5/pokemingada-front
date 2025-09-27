"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function PageNav() {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const linkClasses = "text-shadow-animation hover:scale-101 transition-all duration-300 ease-in-out";

    return (
        <nav className="relative h-full w-full flex items-center justify-center bg-black/45 backdrop-blur-md border-b-1 border-white/10">
            
            {/* Desktop */}
            <Link href="/upload" className="hidden absolute left-12 md:flex">
                subir ficheros
            </Link>
            <div className="hidden md:flex text-neutral-700 items-center space-x-32  font-[BambooBrush] tracking-widest text-4xl">
                <Link className={pathName === "/" ? "active " + linkClasses : linkClasses} href="/">RANKING</Link>
                <Link className={pathName === "/battles" ? "active " + linkClasses : linkClasses} href="/battles">CALENDARIO</Link>
                <Link className={pathName === "/rules" ? "active " + linkClasses : linkClasses} href="/rules">REGLAS</Link>
                <Link className={pathName === "/bracket" ? "active " + linkClasses : linkClasses} href="/bracket">BRACKET</Link>
            </div>

            {/* Phone */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-6 md:hidden z-50 font-[BambooBrush]">
                        <Link onClick={() => setIsOpen(false)} className={"text-4xl " + (pathName === "/" ? "active " + linkClasses : linkClasses)} href="/">RANKING</Link>
                        <Link onClick={() => setIsOpen(false)} className={"text-4xl " + (pathName === "/battles" ? "active " + linkClasses : linkClasses)} href="/battles">CALENDARIO</Link>
                        <Link onClick={() => setIsOpen(false)} className={"text-4xl " + (pathName === "/rules" ? "active " + linkClasses : linkClasses)} href="/rules">REGLAS</Link>
                        <Link onClick={() => setIsOpen(false)} className={"text-4xl " + (pathName === "/bracket" ? "active " + linkClasses : linkClasses)} href="/bracket">BRACKET</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}