import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styled from "styled-components"

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/HomePage'
import DesignProject from "./pages/DesProjectPage"
import Logofolio from "./pages/DesProjectItems/LogofolioPage"
import Kandinsky from "./pages/DesProjectItems/KandinskyPage"
import StudJob from "./pages/DesProjectItems/StudJobPage"
import CourseResearchWork from "./pages/DesProjectItems/CourseResearchWorkPage"
import TournamentGrid from "./pages/DesProjectItems/TournamentGridPage"
import TournamentTables from "./pages/DesProjectItems/TournamentTablesPage"
import DevProject from "./pages/DevProjectPage"
import PersonalSite from "./pages/DevProjectItems/PersonalSitePage"
import PageNotFound from './pages/PageNotFound'


const App = () => {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design-portfolio" element={<DesignProject />} />
              <Route path="/design-portfolio/logofolio" element={<Logofolio />} />
              <Route path="/design-portfolio/kandinsky" element={<Kandinsky />} />
              <Route path="/design-portfolio/studjob" element={<StudJob />} />
              <Route path="/design-portfolio/course-research-work" element={<CourseResearchWork />} />
              <Route path="/design-portfolio/tournament-grid" element={<TournamentGrid />} />
              <Route path="/design-portfolio/tournament-tables" element={<TournamentTables />} />
            <Route path="/dev-portfolio" element={<DevProject />} />
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