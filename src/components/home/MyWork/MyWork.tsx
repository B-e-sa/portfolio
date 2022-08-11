import Carousel from './Carousel'
import Works from './Works'
import './MyWork.css'
import weather from '../../../assets/projects/weather-project.png'
import pokedex from '../../../assets/projects/pokedex.png'
import portfolio from '../../../assets/projects/portfolio.png'

const cards: string[] = [`${weather}`, `${pokedex}`, `${portfolio}`]

const MyWork = () => {
    return (
        <div id='my-work'>
            <Carousel cards={cards} />
            <Works />
        </div>
    )
}

export default MyWork