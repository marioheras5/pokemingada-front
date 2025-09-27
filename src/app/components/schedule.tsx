import Image from "next/image";



function Battle({ players, result, bo3 }: Readonly<{ players: React.ReactNode, result: React.ReactNode, bo3: React.ReactNode}>) {
    const player1 = String(players).split('/')[0];
    const player2 = String(players).split('/')[1];
    const result1 = String(result).split('/')[0];
    const result2 = String(result).split('/')[1];
    
    const txtResult = result1 == "0" && result2 == "0" ? "N/A" : result1 + " - " + result2;
    
    return(
        <div className="flex bg-white/2 flex-row justify-center items-center">
            <PlayerProfile name={player1} result={result1} bo3={bo3} gradient={"r"} decided={txtResult != "N/A"}></PlayerProfile>
            <div className="flex items-center flex-col">
                <h2 className="flex-1">VS</h2>
                <h2 className="flex-1 text-gray-600">{"Resultado: " + txtResult}</h2>
            </div>
            <PlayerProfile name={player2} result={result2} bo3={bo3} gradient={"l"} decided={txtResult != "N/A"}></PlayerProfile>
        </div>
    )
}

function PlayerProfile({ name, result, bo3, gradient, decided }: Readonly<{ name: React.ReactNode, result: React.ReactNode, bo3: React.ReactNode, gradient: React.ReactNode, decided: React.ReactNode}>) {
    const winner = decided && (Number(result) == 2 || (Number(result) == 1 && !bo3))
    const loser = decided && (Number(result) == 0 || (Number(result) == 1 && bo3))

    let add = "";
    if (loser) {
        add = "loser-" + gradient;
    } else if (winner) {
        add = "winner-" + gradient;
    }

    return(
        <div className={add + " flex-1 flex flex-col justify-center items-center"}>
            <div className={"playername"}>{name}</div>
            <Image className={loser ? "rounded-full filter grayscale" : "rounded-full"} src={"/players/" + name + ".webp"} alt="" width={48} height={48} />
            {winner  
            ? <div className={"text-blue-500"}>WINNER</div>
            : (loser ? <div className={"text-red-600"}>LOSER</div> : <div className={"text-transparent"}>NOTHING</div>)}
        </div>
    )
}

export default function Schedule() {
    const playerNames: string[] = ["stick", "bmage", "brawnio", "dasen", "daude", "derial", "hibi", "kush", "noifred"];

    return(
        <div>
            <div className="gym-1 mb-10">
                <div className="h-28 bg-yellow-800 w-full flex items-center">
                    <div className="flex pl-6 md:pl-0 text-4xl md:text-5xl justify-center flex-1 font-[BambooBrush]">
                        GIMNASIO 1 - BROCK
                    </div>
                    <div className="flex-1 flex justify-end md:pr-16">
                        <Image src={"/leaders/brock.png"} alt="" width={168} height={168} ></Image>
                    </div>
                </div>
                <div className="flex flex-col p-2 gap-2">
                    <Battle players={"noifred/hibi"} result={"0/1"} bo3={false}></Battle>
                    <Battle players={"brawnio/anxoa"} result={"1/0"} bo3={false}></Battle>
                    <Battle players={"kush/derial"} result={"1/0"} bo3={false}></Battle>
                    <Battle players={"daude/dasen"} result={"0/1"} bo3={false}></Battle>
                    <Battle players={"bmage/stick"} result={"0/1"} bo3={false}></Battle>
                </div>
            </div>

            <div className="gym-2 mb-10">
                <div className="h-28 bg-indigo-400 w-full flex items-center">
                    <div className="flex pl-6 md:pl-0 text-4xl md:text-5xl justify-center flex-1 font-[BambooBrush]">
                        GIMNASIO 2 - MISTY
                    </div>
                    <div className="flex-1 flex justify-end md:pr-16">
                        <Image src={"/leaders/misty.png"} alt="" width={168} height={168} ></Image>
                    </div>
                </div>
                <div className="flex flex-col p-2 gap-2">
                    <Battle players={"noifred/kush"} result={"1/0"} bo3={false}></Battle>
                    <Battle players={"hibi/daude"} result={"1/0"} bo3={false}></Battle>
                    <Battle players={"brawnio/bmage"} result={"1/0"} bo3={false}></Battle>
                    <Battle players={"anxoa/stick"} result={"0/1"} bo3={false}></Battle>
                    <Battle players={"derial/dasen"} result={"0/1"} bo3={false}></Battle>
                </div>
            </div>
            <div className="gym-3 mb-10">
                <div className="h-28 bg-yellow-200 w-full flex items-center">
                    <div className="flex pl-6 md:pl-0 text-4xl md:text-5xl text-black justify-center flex-1 font-[BambooBrush]">
                        GIMNASIO 3 - LT. SURGE
                    </div>
                    <div className="flex-1 flex justify-end md:pr-16">
                        <Image src={"/leaders/ltsurge.png"} alt="" width={168} height={168} ></Image>
                    </div>
                </div>
                <div className="flex flex-col p-2 gap-2">
                    <Battle players={"noifred/daude"} result={"0/1"} bo3={false}></Battle>
                    <Battle players={"hibi/bmage"} result={"1/0"} bo3={false}></Battle>
                    <Battle players={"brawnio/stick"} result={"0/1"} bo3={false}></Battle>
                    <Battle players={"anxoa/dasen"} result={"0/1"} bo3={false}></Battle>
                    <Battle players={"kush/derial"} result={"1/0"} bo3={false}></Battle>
                </div>
            </div>
            <div className="gym-4 mb-10">
                <div className="h-28 bg-green-200 w-full flex items-center">
                    <div className="flex pl-6 md:pl-0 text-4xl md:text-5xl text-black justify-center flex-1 font-[BambooBrush]">
                        GIMNASIO 4 - ERIKA
                    </div>
                    <div className="flex-1 flex justify-end md:pr-16">
                        <Image src={"/leaders/erika.png"} alt="" width={168} height={168} ></Image>
                    </div>
                </div>
                <div className="flex flex-col p-2 gap-2">
                    <Battle players={"noifred/brawnio"} result={"0/1"} bo3={false}></Battle>
                    <Battle players={"hibi/dasen"} result={"0/1"} bo3={false}></Battle>
                    <Battle players={"kush/bmage"} result={"1/0"} bo3={false}></Battle>
                    <Battle players={"anxoa/daude"} result={"0/1"} bo3={false}></Battle>
                    <Battle players={"stick/derial"} result={"1/0"} bo3={false}></Battle>
                </div>
            </div>
            <div className="gym-5 mb-10">
                <div className="h-28 bg-purple-900 w-full flex items-center">
                    <div className="flex pl-6 md:pl-0 text-4xl md:text-5xl justify-center flex-1 font-[BambooBrush]">
                        GIMNASIO 5 - KOGA
                    </div>
                    <div className="flex-1 flex justify-end md:pr-16">
                        <Image src={"/leaders/koga.png"} alt="" width={168} height={168} ></Image>
                    </div>
                </div>
                <div className="flex flex-col p-2 gap-2">
                    <Battle players={"noifred/dasen"} result={"2/0"} bo3={true}></Battle>
                    <Battle players={"hibi/kush"} result={"0/2"} bo3={true}></Battle>
                    <Battle players={"brawnio/daude"} result={"0/0"} bo3={true}></Battle>
                    <Battle players={"anxoa/bmage"} result={"0/2"} bo3={true}></Battle>
                    <Battle players={"derial/stick"} result={"0/2"} bo3={true}></Battle>
                </div>
            </div>
            <div className="gym-6 mb-10">
                <div className="h-28 bg-purple-400 w-full flex items-center">
                    <div className="flex pl-6 md:pl-0 text-4xl md:text-5xl text-black justify-center flex-1 font-[BambooBrush]">
                        GIMNASIO 6 - SABRINA
                    </div>
                    <div className="flex-1 flex justify-end md:pr-16">
                        <Image src={"/leaders/sabrina.png"} alt="" width={168} height={168} ></Image>
                    </div>
                </div>
                <div className="flex flex-col p-2 gap-2">
                    <Battle players={"noifred/bmage"} result={"2/0"} bo3={true}></Battle>
                    <Battle players={"hibi/brawnio"} result={"0/0"} bo3={true}></Battle>
                    <Battle players={"kush/stick"} result={"2/0"} bo3={true}></Battle>
                    <Battle players={"anxoa/derial"} result={"1/1"} bo3={true}></Battle>
                    <Battle players={"daude/dasen"} result={"0/0"} bo3={true}></Battle>
                </div>
            </div>
            <div className="gym-7 mb-10">
                <div className="h-28 bg-orange-300 w-full flex items-center">
                    <div className="flex pl-6 md:pl-0 text-4xl md:text-5xl text-black justify-center flex-1 font-[BambooBrush]">
                        GIMNASIO 7 - BLAINE
                    </div>
                    <div className="flex-1 flex justify-end md:pr-16">
                        <Image src={"/leaders/blaine.png"} alt="" width={168} height={168} ></Image>
                    </div>
                </div>
                <div className="flex flex-col p-2 gap-2">
                    <Battle players={"noifred/derial"} result={"2/0"} bo3={true}></Battle>
                    <Battle players={"hibi/stick"} result={"2/0"} bo3={true}></Battle>
                    <Battle players={"brawnio/dasen"} result={"0/0"} bo3={true}></Battle>
                    <Battle players={"anxoa/kush"} result={"0/2"} bo3={true}></Battle>
                    <Battle players={"daude/bmage"} result={"0/0"} bo3={true}></Battle>
                </div>
            </div>
            <div className="gym-8 mb-10">
                <div className="h-28 bg-gray-700 w-full flex items-center">
                    <div className="flex pl-6 md:pl-0 text-4xl md:text-5xl justify-center flex-1 font-[BambooBrush]">
                        GIMNASIO 8 - GIOVANNI
                    </div>
                    <div className="flex-1 flex justify-end md:pr-16">
                        <Image src={"/leaders/giovanni.png"} alt="" width={168} height={168} ></Image>
                    </div>
                </div>
                <div className="flex flex-col p-2 gap-2">
                    <Battle players={"noifred/stick"} result={"2/0"} bo3={true}></Battle>
                    <Battle players={"hibi/anxoa"} result={"2/0"} bo3={true}></Battle>
                    <Battle players={"brawnio/kush"} result={"0/0"} bo3={true}></Battle>
                    <Battle players={"daude/derial"} result={"2/0"} bo3={true}></Battle>
                    <Battle players={"dasen/bmage"} result={"0/0"} bo3={true}></Battle>
                </div>
            </div>
        </div>
    )
}