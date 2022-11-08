import { useState, useEffect, useContext, JSXElementConstructor, ReactElement, ReactFragment } from "react"
import "./Carousel.css"
import texts from "./carouselTexts"
import leftArrow from "../../../assets/buttons/left-arrow.png"
import rightArrow from "../../../assets/buttons/right-arrow.png"
import weather from '../../../assets/projects/weather-project.png'
import pokedex from '../../../assets/projects/pokedex.png'
import arpeggio from '../../../assets/projects/arpeggio.png'
import portfolio from '../../../assets/projects/portfolio.png'
import { ThemeContext } from "../../../pages/Home"
import getPreloaders from "../../../utils/getPreloaders"

const cards = [
  weather,
  pokedex,
  portfolio,
  arpeggio
]


const Carousel = () => {

  const { theme } = useContext(ThemeContext)

  const preloads = getPreloaders(cards)

  const [atualCard, setAtualCard] = useState(0)
  const [layoutWidth, setLayoutWidth] = useState(window.innerWidth > 730)

  const updateLayout = (): void => {
    setLayoutWidth(window.innerWidth > 730);
  }

  useEffect(() => {
    window.addEventListener("resize", updateLayout)
    return () => window.removeEventListener("resize", updateLayout);
  }, [])

  const next = (): void => {
    if (atualCard === cards.length - 1) {
      setAtualCard(0)
    } else {
      setAtualCard(atualCard + 1)
    }
  }

  const before = (): void => {
    if (atualCard === 0) {
      setAtualCard(cards.length - 1)
    } else {
      setAtualCard(atualCard - 1)
    }
  }

  return (
    <div>
      {preloads}
      {layoutWidth ?
        <div id="carousel-container">
          <div id="carousel-imgs">
            <img src={leftArrow} style={{ filter: theme === 'light' ? "invert(100%)" : "invert(0%)" }} onClick={before} className="arrow non-draggable" alt="left-arrow" />
            <a href={texts[atualCard].link} target="_blank">
              <img src={cards[atualCard]} className="work-image" alt={texts[atualCard].alt} width="280" height="376" />
            </a>
            <img src={rightArrow} style={{ filter: theme === 'light' ? "invert(100%)" : "invert(0%)" }} onClick={next} className="arrow non-draggable" alt="right-arrow" />
          </div>
          <div id="carousel-info">
            <h1>{texts[atualCard].title}</h1>
            <p>{texts[atualCard].text}</p>
          </div>
        </div>
        :
        <div id="media-my-work">
          <p>You can click on the images to see more</p>
          {(cards).map((item: string, i: number) =>
            <a href={texts[i].link} target="_blank" key={item}>
              <img src={item} alt={texts[i].alt} className="work-image" width="280" height="376"></img>
            </a>
          )}
        </div>
      }
    </div>
  )
}

export default Carousel
