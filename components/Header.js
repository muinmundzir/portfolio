import Link from 'next/link'
import Image from 'next/image'
import Mundzir from '../public/Mundzir.png'

const Header = () => {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="order-2 md:order-1 mt-10">
          <h2 className="text-5xl md:text-6xl font-bold">Hi,</h2>
          <h2 className="text-5xl md:text-6xl font-bold mt-2">
            I am <span className="text-primary">Mu&apos;in Mundzir</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold opacity-70 mt-5 mb-10">
            Frontend Developer
          </h3>
          <Link href="#portfolio">
            <a className="btn-primary">See my work</a>
          </Link>
        </div>
        <div className="container-hero-image">
          <Image
            className="w-full object-cover opacity-90 object-center"
            src={Mundzir}
            alt="person illustration"
          />
        </div>
      </section>
    </>
  )
}

export default Header
