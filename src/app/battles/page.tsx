import Link from "next/link";
import Schedule from "../components/schedule";

export default function Battles() {
  return (
    <div className="w-full h-fit pb-12 flex justify-center items-center">
      <div className="w-230 h-full mt-10 p-6 bg-neutral-950/95 border-2 rounded-xs border-neutral-800/80 backdrop-blur-xs ">
        <h1 className="pb-4 pt-2 pl-2 border-b-1 mb-6">
          Calendario - Pokemingada 1era edicion
        </h1>
        <div id="schedule" className="">
          <Schedule></Schedule>
        </div>
      </div>
    </div>
  );
}