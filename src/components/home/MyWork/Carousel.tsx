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

  for (const card of props.cards) {
    const imageElement = new Image();
    imageElement.src = card;
  }

  const next = (): void => {
    if (atualCard === props.cards.length - 1) {
      setAtualCard(0)
    } else {
      setAtualCard(atualCard + 1)
    }
  }

  const before = (): void => {
    if (atualCard === 0) {
      setAtualCard(props.cards.length - 1)
    } else {
      setAtualCard(atualCard - 1)
    }
  }

  return (
    <div>
      {layoutWidth ?
        <div id="carousel-container">
          <div id="carousel-imgs">
            <img src={leftArrow} onClick={before} className="arrow non-draggable" alt="left-arrow"/>
            <a href={texts[atualCard].link} target="_blank">
              <img src={props.cards[atualCard]} className="work-image" alt={texts[atualCard].alt} width="280" height="376"/>
            </a>
            <img src={rightArrow} onClick={next} className="arrow non-draggable" alt="right-arrow"/>
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
