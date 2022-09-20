import React from 'react'
import Header from '../modules/header'
import About from '../modules/about'
import Roadmap from '../modules/roadmap'
import TeamMembers from '../modules/teamMembers'
import Faq from '../modules/faq'
import Footer from '../modules/footer'

export default function Home() {
  return (
    <React.Fragment>
        <Header />
        <About />
        <Roadmap />
        <TeamMembers />
        <Faq />
        <Footer />
    </React.Fragment>
  )
}
