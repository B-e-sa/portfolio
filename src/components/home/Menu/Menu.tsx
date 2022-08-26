import './Menu.css'
import { useState, useContext } from 'react'
import menu from '../../../assets/buttons/menu.svg'
import night from '../../../assets/buttons/night.svg'
import day from '../../../assets/buttons/day.svg'
import { ThemeContext } from '../../../pages/Home'

const Menu = () => {

    const [toggleButton, setToggleButton] = useState('')
    const [toggleVisible, setToggleVisible] = useState(false)
    const { theme, setTheme } = useContext(ThemeContext)

    const toggle = (): void => {
        if (toggleVisible === false) {
            setToggleVisible(true)
            setToggleButton('rotate(90deg)')
        } else {
            setToggleVisible(false)
            setToggleButton('')
        }
    }

    const changeTheme = (): void => {
        if (theme === 'light') {
            setTheme('nigth')
        } else {
            setTheme('light')
        }
    }

    return (
        <div id='side-bar'>
            <link rel="preload" href={night} as="image" />
            <link rel="preload" href={menu} as="image" />
            <div id='menu'>
                <img
                    id='theme-icon'
                    className='non-draggable'
                    src={ theme === 'light' ? night : day}
                    width="35px"
                    height="25px"
                    alt="set theme"
                    onClick={changeTheme}
                    style={{ filter: theme === 'light' ? 'invert(0%)' : 'invert(100%)' }}
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
            {toggleVisible ?
                <nav id='side-bar-navigation'>
                    <p><a href='#about-me-container'>About me</a></p>
                    <p><a href="#my-work">Projects</a></p>
                    <p><a href="https://www.linkedin.com/in/joão-antônio-pereira-b4021b232/" target={'_blank'}>LinkedIn</a></p>
                    <p><a href="https://github.com/B-e-sa" target='blank'>GitHub</a></p>
                    <p><a href="mailto:joaospereira963@gmail.com">Contact me</a></p>
                    <p><a href="https://www.svgrepo.com" target='blank'>Icons</a></p>
                </nav>
                :
                <></>
            }
        </div>
    )
}

export default Menu