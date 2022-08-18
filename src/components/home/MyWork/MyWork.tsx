import Carousel from './Carousel'
import weather from '../../../assets/projects/weather-project.png'
import pokedex from '../../../assets/projects/pokedex.png'
import portfolio from '../../../assets/projects/portfolio.png'

const cards: string[] = [`${weather}`, `${pokedex}`, `${portfolio}`]

const MyWork = () => {
    return (
        <Carousel cards={cards} />
    )
}

export default MyWork