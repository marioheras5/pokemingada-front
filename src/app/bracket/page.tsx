
"use client"
import { useEffect } from "react";

export default function Bracket() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const bracketContainer = "flex-1 flex justify-center items-center";
  const quarterContainer = "w-full h-24 m-6 bg-neutral-950/95 border-2 rounded-xs border-neutral-500/80 backdrop-blur-xs";
  return (
    <div className="bg-black/60 w-full h-[calc(100vh-3rem)] pb-12 flex flex-row">
        <div className="quarter flex flex-col flex-2 border-r-2 border-r-neutral-200">
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
        </div>
        <div className="semi flex flex-col flex-2 border-r-2 border-r-neutral-200">
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
        </div>
        <div className="final flex flex-col flex-4">
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
            <div className="flex-2 flex justify-center items-center">
               <div className={quarterContainer}>
              </div>
            </div>
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
        </div>
        <div className="semi flex flex-col flex-2 border-l-2 border-l-neutral-200">
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
        </div>
        <div className="quarter flex flex-col flex-2 border-l-2 border-l-neutral-200">
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
            <div className={bracketContainer}>
               <div className={quarterContainer}>
              </div>
            </div>
        </div>
    </div>
  );
}