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
        <div>
            <h1>Seleccione un Pokemon</h1>
            <select name="pokemon"
                onChange={({ target }) => setSeleccionado(target.value)}>
                <option>Pokemones</option>
                {pokelista.map((e, i) => (
                    <option key={i} value={e.name}>{e.name}</option>))}
            </select>
            <button onClick={irVistaDetalles}>Ver detalles</button>
        </div>
    )
} export default Pokemones
