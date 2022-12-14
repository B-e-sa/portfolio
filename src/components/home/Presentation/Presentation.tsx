import './Presentation.css'
import cat from '../../../assets/cats/cat-image.png'
import tail from '../../../assets/cats/cat-tail.png'
import { ThemeContext } from '../../../pages/Home'
import { useContext } from 'react'

const Presentation = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div id='presentation'>
            <div id='presentation-container'>

                {/* if light theme, set app background color to white, else, black */}

                <div id='cat' style={{ filter: theme === 'light' ? "invert(100%)" : "invert(0%)" }}>
                    <img src={cat} alt="cat-body" id='cat-body' draggable='false' />
                    <img src={tail} alt="cat-tail" id='cat-tail' draggable='false' />
                </div>
                <div id='my-name'>
                    <p>JOÃO</p>
                    <p>BESA</p>
                    <p>{'{ developer }'}</p>
                </div>
            </div>
        </div>
    )
}

export default Presentation