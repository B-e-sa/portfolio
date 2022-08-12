import { useState, useEffect } from "react"
import "./Carousel.css"
import leftArrow from "../../../assets/buttons/left-arrow.png"
import rightArrow from "../../../assets/buttons/right-arrow.png"
import texts from "./carouselTexts"

interface Cards {
  cards: string[]
}

const Carousel = (props: Cards) => {

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
    if (atualCard === props.cards.length - 1) {
      setAtualCard(0)
    } else {
      setAtualCard(atualCard + 1)
    }
  }

  const before = (): void => {
    if (atualCard === 0) {
      setAtualCard(2)
    } else {
      setAtualCard(atualCard - 1)
    }
  }

  return (
    <div>
      {layoutWidth ?
        <div id="carousel-container">
          <div id="carousel-imgs">
            <img src={leftArrow} onClick={before} className="arrow" alt="left-arrow" />
            <a href={texts[atualCard].link} target="_blank">
              <img src={props.cards[atualCard]} className="work-image" draggable="false" alt={texts[atualCard].alt} />
            </a>
            <img src={rightArrow} onClick={next} className="arrow" alt="right-arrow" />
          </div>
          <div id="carousel-info">
            <h1>{texts[atualCard].title}</h1>
            <p>{texts[atualCard].text}</p>
          </div>
        </div>
        :
        <div id="media-my-work">
          <p>You can click on the images to see more</p>
          {(props.cards).map((item: string, i: number) =>
            <a href={texts[i].link} target="_blank">
              <img src={item} alt={texts[i].alt} className="work-image" draggable="false"></img>
            </a>
          )}
        </div>
      }
    </div>
  )
}

export default Carousel
