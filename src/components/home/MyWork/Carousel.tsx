import { useState } from "react"
import './Carousel.css'
import leftArrow from '../../../assets/buttons/left-arrow.png'
import rightArrow from '../../../assets/buttons/right-arrow.png'

interface Cards {
  cards: string[]
}


const Carousel = (props: Cards) => {

  const [atualCard, setAtualCard] = useState(0)

  let count: number = atualCard

  const next = (): void => {
    if (count === 2) {
      setAtualCard(count = 0)
    } else {
      setAtualCard(atualCard + 1)
    }
  }

  const before = (): void => {
    if (count === 0) {
      setAtualCard(count = 2)
    } else {
      setAtualCard(atualCard - 1)
    }
  }

  let title: string = ''
  let text: string = ''
  let alt: string = ''
  let link: string = ''

  if (count === 0) {
    title = 'Weather Forecast'
    text = 'An weather forecast app, the infos are gathered from the OpenWeather API'
    alt = 'weather-project'
    link = 'https://github.com/B-e-sa/react-weather'
  } else if (count === 1) {
    title = 'Pokedex'
    text = 'An interactible pokedex interface build with RESTful Pokémon API'
    alt = 'pokedex-project'
    link = 'https://github.com/B-e-sa/API-Pokedex'
  } else {
    title = 'This portfolio!'
    text = 'This portfolio was made using React and Typescript'
    alt = 'my-portfolio'
    link = 'https://github.com/B-e-sa/portfolio'
  }

  return (
    <div id='carousel-container'>
      <div id="carousel-content">
        <div id="carousel-imgs">
          <img src={leftArrow} onClick={before} className='arrow' alt="left-arrow" />
          <a href={link} target="_blank"><img src={props.cards[atualCard]} className='work-image' draggable='false' alt={alt} /></a>
          <img src={rightArrow} onClick={next} className='arrow' alt="right-arrow" />
        </div>
        <div id="carousel-info">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Carousel