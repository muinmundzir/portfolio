import Link from 'next/link'
import Image from 'next/image'
import Mundzir from '../public/Mundzir.png'

const Header = () => {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="order-2 md:order-1 mt-10">
          {/* <h2 className="text-4xl md:text-6xl font-bold">Hi,</h2> */}
          <p className="text-4xl md:text-6xl font-bold mt-2 font-open-sans">
            I&apos;m <span className="text-primary">Mu&apos;in Mundzir</span>
          </p>
          <p className="text-2xl md:text-3xl font-bold font-open-sans opacity-70 mt-5 mb-10">
            Frontend Developer
          </p>
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
