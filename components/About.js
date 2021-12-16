import Image from 'next/image'
import Mundzir from '../public/Mundzir.png'

const SKILLS = [
  { name: 'html', image: 'html.png', yoe: 'Experience 1 year' },
  { name: 'css', image: 'css.png', yoe: 'Experience 1 year' },
  { name: 'javascript', image: 'javascript.png', yoe: 'Experience 1 year' },
  { name: 'reactjs', image: 'reactjs.png', yoe: 'Experience 1 year' },
  { name: 'tailwindcss', image: 'tailwindcss.png', yoe: 'Experience 1 year' },
]
const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-32">
        {/* Describe */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          <div className="rounded-full w-48 md:w-64 h-48 md:h-64 overflow-hidden bg-primary">
            <Image src={Mundzir} alt="profile rounded" />
          </div>
          <div className="w-full md:w-1/2 text-base md:text-lg text-center md:text-left">
            <p className="text-primary font-bold font-open-sans text-2xl md:text-3xl mb-3">
              Hi, I&apos;m Mu&apos;in Mundzir
            </p>
            <p className="mb-3 opacity-70">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit eveniet modi omnis fuga vero nemo nisi dolores
              eligendi ad dicta, est, neque quisquam quis tenetur esse
              consectetur id? Minus, adipisci.
            </p>
            <p className="opacity-70">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis adipisci obcaecati impedit id possimus. Ipsam tempore
              nesciunt eius quibusdam eos!
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-32 text-center">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-14">
            My Skills
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-24 md:gap-12">
            {SKILLS.map((skill) => {
              return (
                <div key={skill.image} className="skill" data-text={skill.yoe}>
                  <img
                    className="w-16"
                    src={`/${skill.image}`}
                    alt={skill.name}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
