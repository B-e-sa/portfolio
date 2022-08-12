import './Menu.css'
import { useState } from 'react'
import menu from '../../../assets/buttons/menu.svg'

const Menu = () => {

    const [toggleButton, setToggleButton] = useState('')
    const [toggleVisibler, setToggleVisibler] = useState(false)

    const toggle = (): void => {
        if (toggleVisibler === false) {
            setToggleVisibler(true)
            setToggleButton('rotate(90deg)')
        } else {
            setToggleVisibler(false)
            setToggleButton('')
        }
    }

    return (
        <div id='side-bar'>
            <div id='menu'>
                <img src={menu} alt="menu" id='menu-icon' onClick={toggle} style={{ transform: toggleButton }} />
            </div>
            {toggleVisibler ?
                <nav id='side-bar-navigation'>
                    <p><a href='#about-me-container'>About me</a></p>
                    <p><a href="#my-work">Projects</a></p>
                    <p><a href="https://www.linkedin.com/in/joão-antônio-pereira-b4021b232/" target={'_blank'}>LinkedIn</a></p>
                    <p><a href="https://github.com/B-e-sa" target='blank'>GitHub</a></p>
                    <p><a href="mailto:joaospereira963@gmail.com">Contact me</a></p>
                    <p><a href="https://www.svgrepo.com">Icons</a></p>
                </nav>
                :
                <></>
            }
        </div>
    )
}

export default Menu