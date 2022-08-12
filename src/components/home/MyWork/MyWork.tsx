import { useState, useEffect } from 'react'
import Carousel from './Carousel'
import Works from './Works'
import './MyWork.css'
import weather from '../../../assets/projects/weather-project.png'
import pokedex from '../../../assets/projects/pokedex.png'
import portfolio from '../../../assets/projects/portfolio.png'

const cards: string[] = [`${weather}`, `${pokedex}`, `${portfolio}`]

const MyWork = () => {

    const [layoutWidth, setLayoutWidth] = useState(window.innerWidth > 730)

    const updateLayout = (): void => {
        setLayoutWidth(window.innerWidth > 730);
    }

    useEffect(() => {
        window.addEventListener("resize", updateLayout)
        return () => window.removeEventListener("resize", updateLayout);
    }, [])

    return (
        <div id='my work'>
            {layoutWidth ?
                <div>
                    <Carousel cards={cards} />
                </div>
                :
                <div>
                    <Works />
                </div>}
        </div>
    )
}

export default MyWork