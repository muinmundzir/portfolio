import { Fragment } from 'react'
import About from '../components/About'
import Dots from '../components/Dots'
import Header from '../components/Header'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <Fragment>
      {/* Main Section */}
      <main className="container">
        <Header />
        <About />
        <Dots />
        <Portfolio />
      </main>
    </Fragment>
  )
}
