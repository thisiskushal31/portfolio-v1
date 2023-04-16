import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import './Experience.css'

const Experience = () => {
  const { name, description } = experiences

  if (!experiences.length) return null

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Experiences</h2>

      <div className='experience__grid'>
        {experiences.map((experiences) => (
          <ExperienceContainer key={uniqid()} experiences={experiences} />
        ))}
      </div>
    </section>
  )
}

export default Experience
