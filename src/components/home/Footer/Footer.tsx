import './Footer.css'
import linkedin from '../../../assets/buttons/linkedin.png'
import git from '../../../assets/buttons/github.png'
import { useContext } from 'react'
import { ThemeContext } from '../../../pages/Home'

const Footer = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <footer>
            <nav
                id="logos-container"
                style={theme === 'light' ? { filter: "invert(100%)" } : {}}
            >
                <a href="https://www.linkedin.com/in/joão-antônio-pereira-b4021b232/" target='_blank'>
                    <img
                        src={linkedin}
                        id="linkedin"
                        alt="linkedin-link"
                        width="45px"
                        height="45px"
                    />
                </a>
                <a href="https://github.com/B-e-sa" target='_blank'>
                    <img
                        src={git}
                        id="github"
                        alt="github-link"
                        width="45px"
                        height="45px"
                    />
                </a>
            </nav>
        </footer>
    )
}

export default Footer