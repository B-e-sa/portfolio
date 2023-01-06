import './AboutMe.css'
import devCat from '../../../assets/cats/dev-cat.png'
import light from '../../../assets/cats/light.png'
import { useContext } from 'react'
import { ThemeContext } from '../../../pages/Home'

const AboutMe = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div id='about-me-container'>
            <hr />
            <div id='about-me-content'>
                <div
                    id='about-me-image-container'
                    style={{ filter: theme === 'light' ? "invert(100%)" : "invert(0%)" }}
                >
                    <img
                        id='light'
                        src={light}
                        alt="light-bulb"
                        className='non-draggable'
                    />
                    <img
                        id='about-me-image'
                        src={devCat}
                        alt="dev-cat"
                        className='non-draggable'
                    />
                </div>
                <div id='about-info'>
                    <h2> About me </h2>
                    <div>
                        <p>
                            Hi! Im João, a Computer Science student
                            and self-taught full-stack developer.
                        </p>
                        <p>
                            I'm currently expanding my knowledge of Angular and Vue.
                            Scroll down to see some of my projects!
                        </p>
                        <p>{' (some of them are on default HTML/JS, and will be migrated over time)'}</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default AboutMe