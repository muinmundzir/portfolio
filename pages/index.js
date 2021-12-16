import { Fragment } from 'react'
import About from '../components/About'
import Header from '../components/Header'

export default function Home() {
  return (
    <Fragment>
      {/* Main Section */}
      <main className="container">
        <Header />
        <About />
      </main>
    </Fragment>
  )
}
