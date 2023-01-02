import { useParams } from "react-router-dom"
import { useEffect , useState } from "react"


function Pokemones(){
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const{ nombre } = useParams()
    const [infoPokemon, setInfoPokemon] = useState ([])

    async function getPokemon() {
        try{ const response = await fetch ( url + nombre)
             const data = await response.json()
             const imagenPoke = data.sprites.other.dream_world.front_default
             const stats = data.stats.map((e) => ({
                name: e.stat.name,
                base: e.base_stat
              }))
             setInfoPokemon ({imagenPoke, stats})
             console.log(infoPokemon)
        } catch (e) {
            alert(e.message)
          }
       }

        useEffect(() => {
          getPokemon()
        }, [])

    return(
        <div>
            {!nombre ? <p>No se encontraron resultados para esta búsqueda</p> 
            : <div>
                <h1>{nombre}</h1>
                <img src={infoPokemon.imagenPoke}/>
                {infoPokemon.stats?.map((stat, i) => (
                                <li key={i}>
                                    {stat.name}: {stat.base}
                                </li>
                            ))}
            </div>}
        </div>
    )
}export default Pokemones
