
export default function Rules() {
  return (
    <div className="w-full h-fit pb-12 flex justify-center items-center">
      <div className="w-230 h-full mt-10 p-6 pb-8 bg-neutral-950/95 border-2 rounded-xs border-neutral-800/80 backdrop-blur-xs ">
        <h1 className="pb-4 pt-2 pl-2 border-b-1 mb-6">
          REGLAS
        </h1>
        <div id="rules" className="pb-8 pt-2 pl-2 border-b-1 mb-2 font-[Inter] font-medium">
          <ul className="list-disc ml-5 space-y-2">
            <li>Se puede capturar el primer Pokémon por ruta.</li>
            <li>Si se debilita o escapa, no se puede volver a intentar en esa ruta.</li>
            <li>Si el Pokémon ya está repetido (especie o línea evolutiva), se puede hacer re-roll hasta encontrar uno nuevo.</li>
            <li>Si un Pokémon se debilita, se considera muerto y debe liberarse o guardarse en una caja especial del PC (llamada “Cementerio”).</li>
            <li>Después de cada gimnasio, obtendemos la posibilidad de revivir a un Pokémon muerte.</li>
            <li>Los Pokémon y objetos estarán randomizados.</li>
            <li>Mote obligatorio.</li>
          </ul>
        </div>
        <h1 className="pb-4 pt-4 pl-2 border-b-1 mb-6">
          FORMATO DEL TORNEO
        </h1>
        <div id="rules" className="space-y-4 font-[Inter] font-medium">
          <h2>El torneo se organiza en forma de liga:</h2>
          <h2>Tras vencer a cada líder de gimnasio, los participantes se enfrentarán en un mejor de tres (mejor de uno hasta el quinto gimnasio) contra un rival del torneo usando el equipo que tengan hasta ese punto.</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Los 4 primeros combates otorgan 1 punto.</li>
            <li>Los 4 últimos combates otorgan 3 puntos en caso de que el ganador gane 2-0, o 2 puntos al ganador y 1 punto al perdedor si se queda 2-1.</li>
          </ul>
          <h2>Al finalizar la liga, los 6 primeros jugadores se enfrentaran en semifinales al mejor de 5. </h2>
          <br></br><br></br>
          <h2>EL RESTO DE REGLAS SE PUEDEN CONSULTAR EN EL DISCORD</h2>
        </div>
      </div>
    </div>
  );
}