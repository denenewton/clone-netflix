import './featured.scss';

const FeaturedMovie = ({ item }) => {
  var fistDate = new Date(item.first_air_date)
  var genres = []
  item.genres.forEach(el => genres.push(el.name))
  const description = (item.overview.length > 200) ? item.overview.substring(0,200) + ' ...' : item.overview


  return (
    <section className='featured' style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--info">
            <div className="featured--name">{item.original_name}</div>
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{fistDate.getFullYear()}</div>
            <div className="featured--seasons">{item.number_of_seasons} season{item.number_of_seasons > 1 && 's'}</div>
          </div>
          <div className="featured--description">
            {description}
          </div>
          <div className="featured--buttons">
            <a className='featured--watch-button' href={`/watch/${item.id}`}>Assistir</a>
            <a className='featured--mylist-button' href={`/list/add/${item.id}`}> + Minha Lista</a>
          </div>
          <div className="featured--genres">
            <strong>Generos: </strong> {genres.join(', ')}
          </div>

        </div>
      </div>

    </section >
  )
}


export default FeaturedMovie