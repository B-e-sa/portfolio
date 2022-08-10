import AboutMe from '../components/home/AboutMe/AboutMe'
import MyWork from '../components/home/MyWork/MyWork'
import Presentation from '../components/home/Presentation/Presentation'
import Menu from '../components/home/Menu/Menu'
import Footer from '../components/home/Footer/Footer'


const Home = () => {
  return (
      <div id='home-container'>
        <Menu />
        <Presentation />
        <AboutMe />
        <MyWork />
        <Footer />
      </div>
  )
}

export default Home