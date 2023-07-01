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
              src="https://media.licdn.com/dms/image/C4D2DAQEbfwuxPoGDsg/profile-treasury-image-shrink_800_800/0/1657025602808?e=1688796000&v=beta&t=6S-hhKvAT05WQ1PFtVvYVB_jjhJkBeKSlpac83hmSdU"
              alt="portfolio 1"
            />
          </div>
          <div className="w-full md:w-2/3 p-5">
            <h2 className="text-3xl font-bold mb-3">MovieBox - Movies Info</h2>
            <p>
            MovieBox is a web project that provides users with a comprehensive movie information platform. It offers a range of features to enhance the movie browsing experience.<br/>
            It built with React JS, TailwindCSS
            </p>
            <div className="mt-8 font-semibold text-white flex items-center gap-2">
              <Link href="https://github.com/muinmundzir/moviebox">
                <a className="portfolio-link bg-primary">
                  <img className="w-5 h-5" src="/github.svg" alt="github" />
                  github
                </a>
              </Link>
              <Link href="https://m3-moviebox.netlify.app/">
                <a className="portfolio-link bg-primary-gray dark:bg-black">
                  <img className="w-5 h-5" src="/web.svg" alt="web" />
                  website
                </a>
              </Link>
            </div>
          </div>
        </li>

        <li className="portfolio-card">
          <div className="w-full md:w-1/3 h-60">
            <img
              className="h-full w-full object-cover"
              src="https://media.licdn.com/dms/image/C562DAQEb6zWaycqM4g/profile-treasury-image-shrink_800_800/0/1657968412135?e=1688796000&v=beta&t=Ki2Xfk1g7Gim9kmnTypuHUbcqUwmQFCDLTWqlY3_91c"
              alt="portfolio 1"
            />
          </div>
          <div className="w-full md:w-2/3 p-5">
            <h2 className="text-3xl font-bold mb-3">RemindMe</h2>
            <p>
            Slicing from figma design.<br/>
            It built with React JS and CSS
            </p>
            <div className="mt-8 font-semibold text-white flex items-center gap-2">
              <Link href="https://github.com/muinmundzir/react-remindme">
                <a className="portfolio-link bg-primary">
                  <img className="w-5 h-5" src="/github.svg" alt="github" />
                  github
                </a>
              </Link>
              <Link href="https://react-remindme.netlify.app/">
                <a className="portfolio-link bg-primary-gray dark:bg-black">
                  <img className="w-5 h-5" src="/web.svg" alt="web" />
                  website
                </a>
              </Link>
            </div>
          </div>
        </li>

        <li className="portfolio-card">
          <div className="w-full md:w-1/3 h-60">
            <img
              className="h-full w-full object-cover"
              src="https://media.licdn.com/dms/image/C562DAQHtjIkhCEa0BQ/profile-treasury-image-shrink_800_800/0/1657968123296?e=1688796000&v=beta&t=csxjs8tQ_DbKhmNtxW7ygCWaNnOQkbMOjam0FJIOx10"
              alt="portfolio 1"
            />
          </div>
          <div className="w-full md:w-2/3 p-5">
            <h2 className="text-3xl font-bold mb-3">GameStore</h2>
            <p>
            Top Up games online currency from one of BWA (Build With Angga) courses <br/>
            It built with NextJS, TailwindCSS
            </p>
            <div className="mt-8 font-semibold text-white flex items-center gap-2">
              <Link href="https://github.com/muinmundzir/gamestore">
                <a className="portfolio-link bg-primary">
                  <img className="w-5 h-5" src="/github.svg" alt="github" />
                  github
                </a>
              </Link>
              <Link href="https://gamestore-muinmundzir.vercel.app/">
                <a className="portfolio-link bg-primary-gray dark:bg-black">
                  <img className="w-5 h-5" src="/web.svg" alt="web" />
                  website
                </a>
              </Link>
            </div>
          </div>
        </li>

        <li className="portfolio-card">
          <div className="w-full md:w-1/3 h-60">
            <img
              className="h-full w-full object-cover"
              src="https://media.licdn.com/dms/image/C562DAQH-xcQNUkQdXA/profile-treasury-image-shrink_800_800/0/1657968076933?e=1688796000&v=beta&t=FnCmZ2FjlvnKwn9fTwDsvFNruUQWdLlZx31GD49OxZA"
              alt="portfolio 1"
            />
          </div>
          <div className="w-full md:w-2/3 p-5">
            <h2 className="text-3xl font-bold mb-3">NextBlog</h2>
            <p>
            Blog website that shows articles that created from GraphCMS <br/>
            It built with NextJS, TailwindCSS, and GraphCMS integration
            </p>
            <div className="mt-8 font-semibold text-white flex items-center gap-2">
              <Link href="https://github.com/muinmundzir/next-blog">
                <a className="portfolio-link bg-primary">
                  <img className="w-5 h-5" src="/github.svg" alt="github" />
                  github
                </a>
              </Link>
              <Link href="https://mundzir-blog.vercel.app/">
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
