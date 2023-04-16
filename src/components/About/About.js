import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import LaunchIcon from '@material-ui/icons/Launch';
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
            {social.external && (
              <a 
                href={social.external}
                aria-label='external'
                className='link link--icon'
              >
                <LaunchIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
