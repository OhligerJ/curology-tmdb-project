import React from 'react'

const MovieList = (props) => {
  const options = props.results.map(r => (
    <div key={r.id}>
      <div className="image">
        <img src={'https://image.tmdb.org/t/p/original' + r.poster_path} alt="Poster" />
      </div>
      <div className="info">
        <h2 className="title">{r.original_title}</h2>
        <h3 className="date_released">{r.release_date}</h3>
        <p>{r.overview}</p>
        <div className="score">{r.vote_average} out of {r.vote_count} reviews</div>
      </div>
    </div>
  ))
  return <ul>{options}</ul>
}

export default MovieList