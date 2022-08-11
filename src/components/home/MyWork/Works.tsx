import './Works.css'
import portfolio from '../../../assets/projects/portfolio.png'
import pokedex from '../../../assets/projects/pokedex.png'
import weather from '../../../assets/projects/weather-project.png'

const Works = () => {
  return (
    <div id='media-my-work'>
      <p>You can click on the images to see more</p>
      <a href="https://github.com/B-e-sa/portfolio" target={'_blank'}>
        <img src={portfolio} className='media-work' alt="my-portifolio" />
      </a>
      <a href="https://github.com/B-e-sa/react-weather" target={'_blank'}>
        <img src={pokedex} className='media-work' alt="weather-project" />
      </a>
      <a href="https://github.com/B-e-sa/API-Pokedex" target={'_blank'}>
        <img src={weather} className='media-work' alt="pokedex-project" />
      </a>
    </div>
  )
}

export default Works