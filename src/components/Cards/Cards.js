import React from 'react'
import { populationFormat } from '../../utils/populationFormat'
import './Cards.scss'

const Cards = ({
    name,
    terrain,
    population,
    cargo_capacity,
    crew,
    max_atmosphering_speed,
    cost_in_credits,
    gender,
    birth_year,
    imgFilter }) => {

    return (
        <div className="Card">
            <img src={imgFilter} alt={name} className="CardImg" />
            <div className='DescriptionContainer'>
                <h3>{name}</h3>
                {terrain && <p>Terrain: {terrain}</p>}
                {population && <p>Population: {populationFormat(population)}</p>}
                {cargo_capacity && <p>Cargo capacity: {cargo_capacity}</p>}
                {crew && <p>Crew: {crew}</p>}
                {max_atmosphering_speed && <p>Max atmosphering speed: {max_atmosphering_speed}</p>}
                {cost_in_credits && <p>Cost in credits: {cost_in_credits}</p>}
                {gender && <p>Gender: {gender}</p>}
                {birth_year && <p>Birth: {birth_year}</p>}
            </div>
        </div>
    )
}

export default Cards