import React from 'react'
import { Col } from "react-bootstrap"
import notFound from "./assets/notFound.png"
let image = `https://image.tmdb.org/t/p/w500`
const CardMovie = ({ movie }) => {
    return (

        <Col xs="6" sm="6" md="4" lg="3" className="my-1">
                <div className="card">
                    <img src={`${movie.poster_path ? image + movie.poster_path : notFound}`} className="card_img " alt="card" />
                    <div className="card_overlay">
                        <div className="text-center w-100 p-2 overlay_text">
                            <p>Movie Name : {movie.original_title || movie.title}</p>
                            <p>Date release : {movie.release_date}</p>
                            <p>type: action</p>
                            <p>vote: {movie.vote_average}</p>
                        </div>
                    </div>
                </div>
        </Col >

    )
}

export default CardMovie