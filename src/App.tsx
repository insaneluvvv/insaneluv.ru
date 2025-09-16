import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styled from "styled-components"

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import DesignPortfolio from "./pages/DesignPortfolio"
import Logofolio from "./pages/DesPortItems/Logofolio"
import Kandinsky from "./pages/DesPortItems/Kandinsky"
import DevPortfolio from "./pages/DevPortfolio"
import PersonalSite from "./pages/DevPortItems/PersonalSite"
import PageNotFound from './pages/PageNotFound'


const App = () => {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design-portfolio" element={<DesignPortfolio />} />
              <Route path="/design-portfolio/logofolio" element={<Logofolio />} />
              <Route path="/design-portfolio/kandinsky" element={<Kandinsky />} />
            <Route path="/dev-portfolio" element={<DevPortfolio />} />
              <Route path="/dev-portfolio/personal-site" element={<PersonalSite />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MainWrapper>
        <Footer />
      </Router>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  min-height: 100%;

`
const MainWrapper = styled.div`
  min-height: calc(100vh - 40px - 100px - 100px);
  @media (max-width: 800px) {
    min-height: calc(100vh - 40px - 100px - 140px);
  }
`

export default App;