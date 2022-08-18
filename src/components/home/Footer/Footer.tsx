import './Footer.css'
import linkedin from '../../../assets/buttons/linkedin.png'
import git from '../../../assets/buttons/github.png'

const Footer = () => {
    return (
        <footer>
            <nav id="logos-container">
                <a href="https://www.linkedin.com/in/joão-antônio-pereira-b4021b232/" target='_blank'>
                    <img src={linkedin} id="linkedin" alt="linkedin-link" width="45px" height="45px"/>
                </a>
                <a href="https://github.com/B-e-sa" target='blank'>
                    <img src={git} id="github" alt="github-link" width="45px" height="45px"/>
                </a>
            </nav>
        </footer>
    )
}

export default Footer