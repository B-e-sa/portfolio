import Carousel from './Carousel'
import Works from './Works'
import './MyWork.css'
import portifolio from '../../../assets/projects/weather-project.png'
import pokedex from '../../../assets/projects/pokedex.png'
import weather from '../../../assets/projects/portifolio.png'

const cards: string[] = [`${portifolio}`, `${pokedex}`, `${weather}`]

const MyWork = () => {
    return (
        <div id='my-work'>
            <Carousel cards={cards} />
            <Works />
        </div>
    )
}

export default MyWork