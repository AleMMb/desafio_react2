import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Detalles() {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const { nombre } = useParams()
    const [infoPokemon, setInfoPokemon] = useState([])

    async function getPokemon() {
        try {
            const response = await fetch(url + nombre)
            const data = await response.json()
            const imagenPoke = data.sprites.other.dream_world.front_default
            const stats = data.stats.map((e) => ({
                name: e.stat.name,
                base: e.base_stat
            }))
            setInfoPokemon({ imagenPoke, stats })
            //console.log(infoPokemon)
        } catch (e) {
            alert(e.message)
        }
    }

    useEffect(() => {
        getPokemon()
    }, [])


    return (
        <div className="bg-[#fbcd3c] h-[32rem] text-center p-[8rem]">
            <div className="card bg-base-100 shadow-xl flex flex-row justify-center">
                <figure className="">
                    <img
                        className="w-[300px] h-[300px] p-8"
                        src={infoPokemon.imagenPoke}
                        alt={nombre} />             
                </figure>
                <div className="card-body">
                <h2 className="card-title justify-center text-[#F6CF57] text-2xl">{nombre}</h2>
                    {infoPokemon.stats?.map((stat, i) => (
                        <li key={i}>
                            {stat.name}: {stat.base}
                        </li>))}
                </div>
            </div>
        </div>
    )
} export default Detalles
