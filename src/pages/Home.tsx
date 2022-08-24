import Menu from '../components/home/Menu/Menu'
import Presentation from '../components/home/Presentation/Presentation'
import AboutMe from '../components/home/AboutMe/AboutMe'
import Footer from '../components/home/Footer/Footer'
import React, { useState } from 'react'
import Carousel from '../components/home/MyWork/Carousel'

interface ITheme {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = React.createContext({} as ITheme)

const Home = () => {

  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id='home-container'
        style={theme === 'light' ?
          { backgroundColor: "white", color: "black" }
          :
          { backgroundColor: "black", color: "white" }}
      >
        <Menu />
        <Presentation />
        <AboutMe />
        <Carousel />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default Home