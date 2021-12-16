import Link from 'next/link'

const Portfolio = () => {
  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="pt-32">
        <h2 className="portfolio-heading">My Portfolio</h2>
      </section>
      <ul className="w-full space-y-10 py-5">
        {/* Portfolio List */}
        <li className="portfolio-card">
          <div className="w-full md:w-1/3 h-60">
            <img
              className="h-full w-full object-cover"
              src="/random-portfolio.jpg"
              alt="portfolio 1"
            />
          </div>
          <div className="w-full md:w-2/3 p-5">
            <h2 className="text-3xl font-bold mb-3">Portfolio 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              sunt, harum unde perferendis omnis doloremque ipsum cum vitae
              alias molestias dignissimos nisi debitis incidunt adipisci
              deserunt quisquam, laborum nobis. Iusto.
            </p>
            <div className="mt-8 font-semibold text-white flex items-center gap-2">
              <Link href="#">
                <a className="portfolio-link bg-primary">
                  <img className="w-5 h-5" src="/github.svg" alt="github" />
                  github
                </a>
              </Link>
              <Link href="#">
                <a className="portfolio-link bg-primary-gray dark:bg-black">
                  <img className="w-5 h-5" src="/web.svg" alt="web" />
                  website
                </a>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Portfolio
