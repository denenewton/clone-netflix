import { useState, useEffect, Fragment } from 'react'
import MovieRow from './components/movie-row/MovieRow'
import FeaturedMovie from './components/featured/FeaturedMovie'
import Navbar from './components/navbar/Navbar'
import Tmdb from './Tmdb'
import './index.scss'

function App() {
  const [moviesList, setmoviesList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList()
      setmoviesList(list)

      const originals = list.filter(i => i.slug === 'originals')
      const randomChosen = Math.ceil(Math.random() * (originals[0].items.results.length))
      const chosen = originals[0].items.results[randomChosen]
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)

      console.log(chosenInfo);
    }
    loadAll()

  }, [])

  return (
    <Fragment>
      <div className="page">
        <Navbar />

        {featuredData && <FeaturedMovie item={featuredData} />}

        <section className='lists'>
          {
            moviesList.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />
            ))
          }
        </section>

      </div>
      <footer>
        Feito com <span role='img' aria-label='coraçao' >&#9829;</span> por denenewton.
        Direitos de imagem para Netflix <br />
        Dados foram pegos da API Themoviedb.org
      </footer>
      {
        moviesList.length <= 0 && (<div className="loading">
          <img src="https://blog.motionisland.com/wp-content/uploads/2022/03/Loading_1.gif" alt="" />
        </div>)
      }
    </Fragment>
  )
}

export default App
