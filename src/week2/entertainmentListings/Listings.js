import React from 'react'
import { MovieContextConsumer } from './EntertainmentContext.js'
import './EntertainmentApp.css'

function Listings() {
    return (
        <MovieContextConsumer>
            {context => ( 
                context.movies.map((movieInfo, index) => 
                    <div className='movies' id={index} key={movieInfo}>
                        <div className='td'>{movieInfo.title}</div>
                        <div className='td'>{movieInfo.director}</div>
                        <div className='td'>{movieInfo.genre}</div>
                        <div className='td'>{movieInfo.year}</div>
                    </div>
                )
            )}
        </MovieContextConsumer>
    )
}

export default Listings