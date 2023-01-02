import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"


function Pokemones() {

    const [pokelista, setPokeLista] = useState([])
    const [seleccionado, setSeleccionado] = useState("")
    const navigate = useNavigate()

    const irVistaDetalles = () => {
        navigate(`/Pokemones/${seleccionado}`)
    }

    const catchPokelista = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=40&offset=0")
        const { results } = await res.json();
        //console.log(results)
        setPokeLista(results)
    }

    useEffect(() => {
        catchPokelista();
    }, []);

    return (
        <div className="bg-[#fbcd3c] h-[32rem] text-center">
            <p className="m-8 text-black text-2xl">Seleccione un Pokemón</p>
            <select className="select w-full max-w-xs" name="pokemon"
                onChange={({ target }) => setSeleccionado(target.value)}>
                <option>Pokemones</option>
                {pokelista.map((e, i) => (
                    <option key={i} value={e.name}>{e.name}</option>))}
            </select>
            <div>
                <button className="btn m-8"onClick={irVistaDetalles}>Ver detalles</button>
            </div>
        </div>
    )
} export default Pokemones
