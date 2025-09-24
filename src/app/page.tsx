import PlayerList from "./components/playerList";

export default function Ranking() {
  return (
    <div className="w-full h-fit pb-12 flex justify-center items-center">
      <div className="w-full md:w-260 h-full mt-10 md:p-6 bg-neutral-950/95 border-2 rounded-xs border-neutral-800/80 backdrop-blur-xs ">
        <h1 className="pb-4 pt-2 pl-2 border-b-1 mb-6">
          Clasificacion - Pokemingada 1era edicion
        </h1>
        <div id="playerlist" className="">
          <PlayerList key="playerList"></PlayerList>
        </div>
      </div>
    </div>
  );
}
