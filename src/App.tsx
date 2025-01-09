import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styled from "styled-components"

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'


const App = () => {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MainWrapper>
        <Footer />
      </Router>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  
`
const MainWrapper = styled.div`
  min-height: calc(100vh - 50px - 100px);
`

export default App;