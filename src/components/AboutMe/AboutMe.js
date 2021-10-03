import Projects from '../Projects';
// import Experience from '../Experience';
import VictoriaFilm from '../VictoriaFilm';
import GoIT from '../GoIT';
import Education from '../Education';
import PropTypes from 'prop-types';
import s from './AboutMe.module.css';

function AboutMe({ commandProjects, ownProjects, experience }) {
  return (
    <div className={s.container}>
      <div className={s.section}>
        <h2 className={s.profession}>Fullstack Developer</h2>
        <h1 className={s.name}>Mikhail Prytychenko</h1>
        <p className={s.description}>
          I’m looking for interesting job as front-end developer in friendly,
          thriving, and exciting company to develop my skills as well as grove
          with a team.
        </p>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Projects</h3>
        <h4 className={s.subTitle}>
          <span className={s.typeProject}>Command</span> projects
        </h4>
        <ol>
          {commandProjects.map(({ id, label, link, tech }) => (
            <Projects key={id} label={label} link={link} tech={tech} />
          ))}
        </ol>
        <h4 className={s.subTitle}>
          <span className={s.typeProject}>Own</span> projects
        </h4>
        <ol>
          {ownProjects.map(({ id, label, link, tech }) => (
            <Projects key={id} label={label} link={link} tech={tech} />
          ))}
        </ol>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Work Experience</h3>
        <ul>
          <li>
            <GoIT />
          </li>
          {/* {experience.map(
            ({ id, profession, company, time, country, duties }) => (
              <Experience
                key={id}
                profession={profession}
                company={company}
                time={time}
                country={country}
                duties={duties}
              />
            ),
          )} */}
          <li>
            <VictoriaFilm />
          </li>
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Education</h3>
        <Education />
      </div>
    </div>
  );
}

AboutMe.propTypes = {
  commandProjects: PropTypes.arrayOf(PropTypes.object),
  ownProjects: PropTypes.arrayOf(PropTypes.object),
  experience: PropTypes.arrayOf(PropTypes.object),
};

export default AboutMe;
