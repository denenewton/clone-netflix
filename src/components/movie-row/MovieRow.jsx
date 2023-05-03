import './movieRow.scss'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';

const MovieRow = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);
    const ListMovie = items.results.filter(item => item.id != 63174)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 3)
        x > 0 && (x = 0)
        setScrollX(x)
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 3)
        let widthList = items.results.length * 150
        if ((window.innerWidth - widthList) > x) {
            x = (window.innerWidth - widthList) - 60
        }
        setScrollX(x)
    }

    return (
        <div className='movie_row'>
            <h2>{title}</h2>
            <div className="movie_row--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movie_row--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movie_row--listarea">
                <div className="movie_row--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150

                }}>
                    {ListMovie.length > 0 && ListMovie.map((item, key) => (
                        <div key={key} className="movie_row--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default MovieRow