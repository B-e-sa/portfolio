import './AboutMe.css'
import devCat from '../../../assets/cats/dev-cat.png'
import ligth from '../../../assets/cats/light.png'

const AboutMe = () => {
    return (
        <div id='about-me-container'>
            <hr />
            <div id='about-me-content'>
                <div id='about-me-image-container'>
                    <img id='light' src={ligth} alt="light-bulb" />
                    <img id='about-me-image' src={devCat} alt="dev-cat" /></div>
                <div id='about-info'>
                    <h2> About me </h2>
                    <div>
                        <p>
                            Hi! Im João, a Computer Science student and self-taught front-end developer.
                        </p>
                        <p>
                            I'm currently expanding my knowledge of React.js and Typescript.
                            Scroll down to see some of my projects!
                        </p>
                        <p id='comment'>{' (some of them are on default HTML/JS, and will be migrated over time)'}</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default AboutMe