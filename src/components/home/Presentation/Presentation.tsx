import './Presentation.css'
import cat from '../../../assets/cats/cat-image.png'
import tail from '../../../assets/cats/cat-tail.png'

const Presentation = () => {
    return (
        <div id='presentation'>
            <div id='presentation-container'>
                <div id='cat' >
                    <img src={cat} alt="cat-body" id='cat-body' draggable='false' />
                    <img src={tail} alt="cat-tail" id='cat-tail' draggable='false' />
                </div>
                <div id='my-name'>
                    <p>JOÃO</p>
                    <p>BESA</p>
                    <p id='developer'>{'{ developer }'}</p>
                </div>
            </div>
        </div>
    )
}

export default Presentation