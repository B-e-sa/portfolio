import {
  useState,
  useEffect,
  useContext
} from "react"
import "./Carousel.css"
import texts from "../../../utils/carouselTexts"
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

  const [currentCard, setCurrentCard] = useState(0)
  const [layoutWidth, setLayoutWidth] = useState(window.innerWidth > 730)

  const updateLayout = (): void => {
    setLayoutWidth(window.innerWidth > 730);
  }

  useEffect(() => {
    window.addEventListener("resize", updateLayout)
    return () => window.removeEventListener("resize", updateLayout);
  }, [])

  const next = (): void => {
    currentCard === cards.length - 1 ?
      setCurrentCard(0) : setCurrentCard(currentCard + 1)
  }

  const before = (): void => {
    currentCard === 0 ?
      setCurrentCard(cards.length - 1) : setCurrentCard(currentCard - 1)
  }

  return (
    <div>
      {preloads}
      {layoutWidth ?
        <div id="carousel-container">
          <div id="carousel-imgs">
            <img
              src={leftArrow}
              style={theme === 'light' ? { filter: "invert(100%)" } : {}}
              onClick={before}
              className="arrow non-draggable"
              alt="left-arrow"
            />
            <a href={texts[currentCard].link} target="_blank">
              <img
                src={cards[currentCard]}
                className="work-image"
                alt={texts[currentCard].alt}
                width="280"
                height="376"
              />
            </a>
            <img
              src={rightArrow}
              style={theme === 'light' ? { filter: "invert(100%)" } : {}}
              onClick={next}
              className="arrow non-draggable"
              alt="right-arrow"
            />
          </div>
          <div id="carousel-info">
            <h1>{texts[currentCard].title}</h1>
            <p>{texts[currentCard].text}</p>
          </div>
        </div>
        :
        <div id="media-my-work">
          <p>You can click on the images to see more</p>
          {(cards).map((item: string, i: number) =>
            <a href={texts[i].link} target="_blank" key={item}>
              <img
                src={item}
                alt={texts[i].alt}
                className="work-image"
                width="280"
                height="376"></img>
            </a>
          )}
        </div>
      }
    </div>
  )
}

export default Carousel
