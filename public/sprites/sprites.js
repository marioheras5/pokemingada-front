import fs from "fs";

async function Main() {
    const json = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=1025');

    const res = await json.json();

    for (const pkmn of res.results) {

        let num = pkmn.url.split('/')[pkmn.url.split('/').length - 2];
        console.log(num);
        let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/' + num + '.png';
        let res = await fetch(url);
        const buffer = await res.arrayBuffer();

        fs.writeFileSync(pkmn.name + ".png", Buffer.from(buffer));
    }
}

await Main();