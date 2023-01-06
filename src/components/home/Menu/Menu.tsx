import './Menu.css'
import { useState, useContext } from 'react'
import menu from '../../../assets/buttons/menu.svg'
import night from '../../../assets/buttons/night.svg'
import day from '../../../assets/buttons/day.svg'
import { ThemeContext } from '../../../pages/Home'
import getPreloaders from '../../../utils/getPreloaders'

const Menu = () => {

    const [toggleButton, setToggleButton] = useState('')
    const [toggleVisible, setToggleVisible] = useState(false)
    const { theme, setTheme } = useContext(ThemeContext)

    const preloads = getPreloaders([night, day, menu])

    const toggle = (): void => {
        if (toggleVisible) {
            setToggleVisible(false)
            setToggleButton('')
        } else {
            setToggleVisible(true)
            setToggleButton('rotate(90deg)')
        }
    }

    const changeTheme = (): void => {
        theme === 'light' ?
            setTheme('night') : setTheme('light')
    }

    return (
        <div id='side-bar'>
            {preloads}
            <div id='menu'>
                <img
                    id='theme-icon'
                    className='non-draggable'
                    src={theme === 'light' ? night : day}
                    width="35px"
                    height="25px"
                    alt="set theme"
                    onClick={changeTheme}
                    style={theme !== 'light' ? { filter: 'invert(100%)' } : {}}
                />
                <img
                    src={menu}
                    alt="menu"
                    id='menu-icon'
                    className='non-draggable'
                    onClick={toggle}
                    style={{ transform: toggleButton, filter: theme === 'light' ? 'invert(0%)' : 'invert(100%)' }}
                />
            </div>
            {toggleVisible &&
                <nav id='side-bar-navigation'>
                    <p><a href='#about-me-container'>About me</a></p>
                    <p><a href="#carousel-container">Projects</a></p>
                    <p><a href="https://www.linkedin.com/in/joão-antônio-pereira-b4021b232/" target='blank'>LinkedIn</a></p>
                    <p><a href="https://github.com/B-e-sa" target='blank'>GitHub</a></p>
                    <p><a href="mailto:joaospereira963@gmail.com">Contact me</a></p>
                </nav>}
        </div>
    )
}

export default Menu