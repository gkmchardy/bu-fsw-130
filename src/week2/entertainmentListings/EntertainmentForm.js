import React, { Component } from 'react'
import { MovieContextConsumer } from './EntertainmentContext.js'
import './EntertainmentApp.css'

function Form() {
    return (
      <MovieContextConsumer>
        {context => ( 
          <div>
            <br /><br />
              <form className="movies">
                  <div className='th' style={{gridColumn:"span 4"}}>My Favorite Movies</div>

                  <input className='input' type='text' name='title' value={context.title} placeholder='Title' onChange={context.handleChange}/>
                  <input className='input' type='text' name='director' value={context.director} placeholder='Director' onChange={context.handleChange}/>
                  <input className='input' type='text' name='genre' value={context.genre} placeholder='Genre' onChange={context.handleChange}/>
                  <input className='input' type='text' name='year' value={context.year} placeholder='Year' onChange={context.handleChange}/>

                  <div style={{gridColumn:"span 3"}}></div>
                  <input type='submit' onClick={(context.movieUpdate)} value='Submit'/>
              </form>
              <br />
          </div>
        )}
      </MovieContextConsumer>
    )
}

export default Form