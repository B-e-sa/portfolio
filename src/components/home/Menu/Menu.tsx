import './Menu.css'
import { useState } from 'react'
import menu from '../../../assets/buttons/menu.svg'

const Menu = () => {

    const [toggleVisible, setToggleVisible] = useState('none')
    const [toggleButton, setToggleButton] = useState('')

    const toggle = (): void => {
        if (toggleVisible === 'none') {
            setToggleVisible('')
            setToggleButton('rotate(90deg)')
        } else {
            setToggleVisible('none')
            setToggleButton('')
        }
    }

    return (
        <div id='side-bar'>
            <div id='menu'>
                <img src={menu} alt="menu" id='menu-icon' onClick={toggle} style={{transform: toggleButton}}/>
            </div>
            <nav id='side-bar-navigation' style={{ display: toggleVisible }}>
                <p><a href='#about-me-container'>About me</a></p>
                <p><a href="#my-work">Projects</a></p>
                <p><a href="https://www.linkedin.com/in/joão-antônio-pereira-b4021b232/" target={'_blank'}>LinkedIn</a></p>
                <p><a href="https://github.com/B-e-sa" target='blank'>GitHub</a></p>
                <p><a href="mailto:joaospereira963@gmail.com">Contact me</a></p>
                <p><a href="https://www.svgrepo.com">Icons</a></p>
            </nav>
        </div>
    )
}

export default Menu