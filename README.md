# My portifolio!

### Link:

## https://b-e-sa.surge.sh

### **Installation:**

`` npm install ``

### **To Start Server:**

`` cd weather-project ``
`` npm run dev ``

To visit the app, use the **local** adress provided by Vite on the **terminal**

# How it works?
I didn't comment on the code, to leave it cleaner on github <br>
But i will explain every complex component one by one!

### Carousel

```tsx
// importing an array that contains objects with the text, links and alts that we will use
import texts from './carouselTexts'

// the Carousel component will receive a props.card, that will contain the image sources in an array
// example: ['../../../assets/projects/pokedex.png'], so we can iterate it and make the carousel dinamic
interface Cards {
  cards: string[]
}

const Carousel = (props: Cards) => {

  // setting the image to props.cards[0] (first image)
  const [atualCard, setAtualCard] = useState(0)
  
  // dinamic screen media check
  const [layoutWidth, setLayoutWidth] = useState(window.innerWidth > 730)

  const updateLayout = (): void => {
    setLayoutWidth(window.innerWidth > 730);
  }

  useEffect(() => {
    window.addEventListener("resize", updateLayout)
    return () => window.removeEventListener("resize", updateLayout);
  }, [])

  // if we try to go to the "next" image after the last one, we go back to the first image
  const next = (): void => {
    if (atualCard === props.cards.length - 1) {
      setAtualCard(0)
    } else {
      setAtualCard(atualCard + 1)
    }
  }

  // same logic, but with the first image
  const before = (): void => {
    if (atualCard === 0) {
      setAtualCard(2)
    } else {
      setAtualCard(atualCard - 1)
    }
  }

  return (
      <div>
      // if screen width > 730
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
        // if screen width <= 730
        <div id="media-my-work">
          <p>You can click on the images to see more</p>
          // for each card(item), an anchor with the image is rendered
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

```
