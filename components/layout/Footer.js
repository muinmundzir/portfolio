import Link from 'next/link'

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="w-full text-center mt-40 bg-white dark:bg-primary-gray">
        {/* Contact Section */}
        <section
          id="contact"
          className="flex flex-col gap-12 justify-center items-center py-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Contact
          </h2>
          <div className="flex flex-wrap justify-center gap-5 md:gap-10">
            <Link href="#">
              <a className="contact-link bg-black">
                <img src="/github.svg" alt="github logo" />
              </a>
            </Link>
            <Link href="#">
              <a className="contact-link bg-blue-500">
                <img src="/icon-twitter.svg" alt="twitter logo" />
              </a>
            </Link>
            <Link href="#">
              <a className="contact-link bg-green-500">
                <img src="/icon-whatsapp.svg" alt="whatsapp logo" />
              </a>
            </Link>
            <Link href="#">
              <a className="contact-link bg-blue-500">
                <img src="/icon-telegram.svg" alt="whatsapp logo" />
              </a>
            </Link>
          </div>
        </section>
        <p className="pb-10">&copy; Copyright 2021 - M. Mu&apos;in Mundzir</p>
      </footer>
    </>
  )
}

export default Footer
