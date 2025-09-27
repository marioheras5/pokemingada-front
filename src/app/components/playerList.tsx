"use client";
import { useState, useEffect } from "react";

import Image from "next/image";

class PokemonProps {
    name: string;
    nick: string;
    level: number;
    img: string;
    position: number;

    constructor(name: string, nick: string, level: number, img: string, position: number) {
        this.name = name;
        this.nick = nick;
        this.level = level;
        this.img = img;
        this.position = position;
    }
}

type PlayerProps = {
    name: string;
    pokemons: PokemonProps[];
    position: number;
    wins: number;
    loses: number;
    points: number;
};

function Pokemon({ name, nick, level, img, position }: PokemonProps) {

  console.log(position)
  return (
      <div className="flex flex-col justify-center items-center">
          <div className={"absolute z-10 "+ (position % 2 == 0 ? "top-1 text-blue-200" : "bottom-1 text-red-300")+" hidden md:flex  "}>{nick == "" ? "" : "[ "+ nick +" ]"}</div>
          <Image className="scale-175 md:scale-300" quality={100} src={img} alt={name} width={48} height={48} unoptimized></Image>
      </div>
  )
}

function Player({ name, pokemons, position, wins, loses, points }: PlayerProps) {
    return (
        <div id={name} className="w-full h-44 md:h-35 border-b-1 border-b-gray-600 flex flex-row items-center bg-white/2 backdrop-blur-md">
            <div className="rank flex-1 left-8 flex justify-center items-center">
                <div className={position > 3 ? "text-xl" : (position === 3 ? "text-4xl" : (position === 2 ? "text-4xl" : "text-4xl md:text-5xl"))}>
                    {position > 3 ? position + ".-" : (position === 3 ? "🥉" : (position === 2 ? "🥈" : "🥇"))}
                </div>
            </div>
            <div className="player flex-wrap md:flex-nowrap flex-10 flex flex-row justify-around items-center ">
                <div className="profile w-1/2 md:flex-1 flex items-center gap-4 pl-7 md:pl-0">
                    <Image className="rounded-full left-0" title={name} src={"/players/" + name + ".webp"} alt="" width={48} height={48} />
                    <div className={"playername right-0 " + (position > 3 ? "" : (position === 3 ? "third" : (position === 2 ? "second" : "first")))}>{name}</div>
                </div>
                <div className="md:hidden score w-1/2 md:flex-1 flex flex-col justify-center items-center tracking-widest gap-1">
                    <div className="flex justify-center items-center">
                      <div className="wins text-blue-500 text-xl tracking-widest ">
                          {wins}w
                      </div>
                      /
                      <div className="loses text-red-600 text-xl tracking-widest ">
                          {loses}l
                      </div>
                    </div>
                    <div className="loses text-white text-sm tracking-widest ">
                        ({points} pts.)
                    </div>
                </div>
                <div className="pokemons gap-2 h-24 w-full md:flex-3 flex flex-row md:gap-15 justify-center items-center">
                    {pokemons.map(pokemon => (
                        <Pokemon key={name + ":" + pokemon.name} name={pokemon.name} nick={pokemon.nick} level={pokemon.level} img={pokemon.img} position={pokemon.position}></Pokemon>
                    ))}
                </div>
                <div className="hidden score md:flex-1 md:flex flex-col justify-center items-center tracking-widest gap-1">
                    <div className="flex justify-center items-center">
                      <div className="wins text-blue-500 text-xl tracking-widest ">
                          {wins}w
                      </div>
                      /
                      <div className="loses text-red-600 text-xl tracking-widest ">
                          {loses}l
                      </div>
                    </div>
                    <div className="loses text-white text-sm tracking-widest ">
                        ({points} pts.)
                    </div>
                </div>
            </div>
        </div>
    )
}

async function GetPokemon(contenido: string) {
    const pokemonList: PokemonProps[] = [
        new PokemonProps("Hueco vacio1", "", 0, "/sprites/no-pkmn-i.png", 0),
        new PokemonProps("Hueco vacio2", "", 0, "/sprites/no-pkmn-i.png", 1),
        new PokemonProps("Hueco vacio3", "", 0, "/sprites/no-pkmn-i.png", 2),
        new PokemonProps("Hueco vacio4", "", 0, "/sprites/no-pkmn-i.png", 3),
        new PokemonProps("Hueco vacio5", "", 0, "/sprites/no-pkmn-i.png", 4),
        new PokemonProps("Hueco vacio6", "", 0, "/sprites/no-pkmn-i.png", 5)
    ]

    const split = contenido.split('\n');
    let nick: string = "";
    let pkmn: string = "";
    let img: string = "";
    let lvl: string = "100";
    let j = 0;
    for (let i = 0; i < split.length; i++) {
        const line = split[i];

        if (line.includes('(')) {
            const split = line.split('(');
            nick = split[0].trimEnd();
            pkmn = split[1].split(')')[0];
            img = "/sprites/" + pkmn.toLowerCase() + ".png";
        }
        else if (line.includes('Level:')) {
            lvl = line.split('Level:')[1].trim();

        }
        else if (line.includes('EVs:')) {

            pokemonList[j] = (new PokemonProps(pkmn, nick, Number(lvl), img, j))
            j++
        }
    }

    return pokemonList;
}

function GetScore(name: string, split: string[]) {
    if (split.length < 3) {
        return [0, 0, 0];
    }

    const json: {[playerName: string]: [string, string, string]} = {
      "anxoa": ["0","8","0"],
      "bmage": ["1","5","3"],
      "brawnio": ["3","1","3"],
      "dasen": ["4","1","4"],
      "daude": ["3","2","5"],
      "derial": ["0","8","0"],
      "hibi": ["5","2","9"],
      "kush": ["6","1","12"],
      "noifred": ["5","3","13"],
      "stick": ["5","3","7"]
    };

    const wins: number = Number(json[name][0])
    const loses: number = Number(json[name][1])
    const points: number = Number(json[name][2])

    return [wins, loses, points];
}


export default function PlayerList() {
  const [playerList, setPlayerList] = useState<PlayerProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      const playerNames: string[] = ["anxoa", "stick", "bmage", "brawnio", "dasen", "daude", "derial", "hibi", "kush", "noifred"];
      const list: PlayerProps[] = [];

      for (const playerName of playerNames) {
        try {

          const res = await fetch('/api/getfiles?name=' + encodeURIComponent(playerName), {
            method: 'GET',
            headers: {
              'x-api-key': process.env.NEXT_PUBLIC_INTERNAL_API_TOKEN!, // la key pública del cliente
            },
          });

          console.log(res)
          if (!res.ok) {
            console.log(playerName + " no encontrado.");
            continue;
          }

          const contenido = await res.text();
          if (playerName == "stick") {
            console.log(contenido);
          }
          // wins:$:loses:$:pts:$:Resto
          const split = contenido.split(':$:');
          const score = GetScore(playerName, split);

          let pkmnList: PokemonProps[];
          if (split.length < 3) {
            pkmnList = await GetPokemon("");
          } else {
            pkmnList = await GetPokemon(split[3]);
          }

          const playerProp: PlayerProps = {
            name: playerName,
            pokemons: pkmnList,
            position: 0,
            wins: score[0],
            loses: score[1],
            points: score[2]
          };

          list.push(playerProp);

        } catch (err) {
          console.error("Error fetch jugador:", playerName, err);
        }
      }

      // Ordenar y asignar posiciones
      list.sort((a, b) => {
        // Primero comparar puntos
        if (b.points !== a.points) {
          return b.points - a.points;
        }
        // Si los puntos son iguales, comparar wins
        return b.wins - a.wins;
      });
      
      for (let i = 0; i < list.length; i++) {
        list[i].position = i + 1;
      }

      setPlayerList(list);
      setLoading(false);
    };

    fetchPlayers();

  }, []);

  if (loading) return <div className="h-200">Cargando jugadores...</div>;

  return (
    <div>
      {playerList.map(player => (
        <Player
          key={player.name}
          name={player.name}
          pokemons={player.pokemons}
          position={player.position}
          wins={player.wins}
          loses={player.loses}
          points={player.points}
        />
      ))}
    </div>
  );
}