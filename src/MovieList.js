import React from 'react'

let getImage = (r) => {
  if (r.poster_path != null){
    return 'https://image.tmdb.org/t/p/original' + r.poster_path;
  } else {
    return 'https://cdn.pixabay.com/photo/2016/10/25/23/54/not-found-1770320_960_720.jpg';
  }
}

let MovieList = (props) => {
  let options = props.results.map(r => (
    <div className="movie_result" key={r.id}>
      <div className="image">
        <img src={getImage(r)} alt="Poster" />
      </div>
      <div className="info">
        <h2 className="title">{r.original_title}</h2>
        <h3 className="date_released">{r.release_date}</h3>
        <p>{r.overview}</p>
        <div className="score">Average score: <span className='average'>{r.vote_average}</span> out of {r.vote_count} reviews</div>
      </div>
    </div>
  ))
  return <ul>{options}</ul>
}

export default MovieList