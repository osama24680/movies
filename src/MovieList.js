import React from 'react'
import { Row } from "react-bootstrap"
import CardMovie from "./CardMovie"
import PaginationExample from './Pagination'


const MovieList = ({ movies,numberOfPages,currentPage }) => {
    return (
        <Row className="mt-3">
            {movies?.length >= 1 ? (movies.map((movie, index) => (
               <CardMovie movie={movie}  key={index}/>
                
            ))) : <h1>there are no movies</h1>}
            <PaginationExample   currentPage={currentPage} numberOfPages={numberOfPages}/>
        </Row>
    )
}

export default MovieList