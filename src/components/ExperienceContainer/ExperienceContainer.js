import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import { experiences } from '../../portfolio';
import './ExperienceContainer.css'

const ExperienceContainer = ({ experiences }) => (
  <div className='experience'>
    <h3>{experiences.name}</h3>

    <p className='experience__description'>{experiences.description}</p>
    {experiences.stack && (
      <ul className='experience__stack'>
        {experiences.stack.map((item) => (
          <li key={uniqid()} className='experience__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {/* {experiences.sourceCode && (
      <a
        href={experiences.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {experiences.livePreview && (
      <a
        href={experiences.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )} */}
  </div>
)

export default ExperienceContainer
