import Projects from '../Projects';
import PropTypes from 'prop-types';
import Experience from '../Experience';
import Education from '../Education';
import Summary from '../Summary';
import s from './AboutMe.module.css';

function AboutMe({ commandProjects, ownProjects, education, experience }) {
  return (
    <div className={s.container}>
      <div className={s.section}>
        <h1 className={s.name}>MIKHAIL PRYTYCHENKO</h1>
        <div className={s.section}>
          <h2 className={s.profession}>JUNIOR FRONT-END DEVELOPER</h2>
        </div>
        <div className={s.section}>
          <h3 className={s.title}>Summary</h3>
          <p className={s.description}>
            I am a Junior Front-end Developer and looking for an interesting job
            in a friendly, thriving, and exciting company to develop my skills
            as well as grove with а team. I am good at HTML, CSS, JavaScript and
            React. Also, I acted as Team Lead in a Webpack command project. I
            have experience with code versioning tools (such as Git), in
            creating а REST API. I am responsible, attentive, fast learner and
            creative in approach of problem solving.
          </p>
        </div>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Project experience:</h3>

        <h4 className={s.subTitle}>
          <span className={s.typeProject}>Command projects:</span>
        </h4>

        <ol>
          {commandProjects.map(({ id, label, link, tech, text }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              tech={tech}
              text={text}
            />
          ))}
        </ol>

        <h4 className={s.subTitle}>
          <span className={s.typeProject}>Personal projects:</span>
        </h4>

        <ol>
          {ownProjects.map(({ id, label, link, tech, text }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              tech={tech}
              text={text}
            />
          ))}
        </ol>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Work Experience</h3>
        <ul>
          {experience.map(
            ({ id, company, profession, time, country, duties }) => (
              <Experience
                key={id}
                company={company}
                profession={profession}
                time={time}
                country={country}
                duties={duties}
              />
            ),
          )}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Education</h3>
        <ul>
          {education.map(({ id, university, label, time, experience }) => (
            <Education
              key={id}
              university={university}
              label={label}
              time={time}
              experience={experience}
            />
          ))}
        </ul>
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
