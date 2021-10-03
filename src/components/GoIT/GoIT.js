import s from './GoIT.module.css';

function GoIT() {
  return (
    <>
      <p className={s.university} href="https://goit.ua/">
        GoIT
      </p>
      <p>Student</p>
      <p className={s.education}>
        During my studies I got the skills of HTML, CSS, Figma, GIT, JavaScript,
        React, Redux, NodeJS, Mangoos.js. There was also an opportunity to work
        on projects in a team, where I was able to apply my leadership qualities
        as a team lead!
      </p>
      <span className={s.time}>
        Septermber 2020 - October 2021
        <span className={s.divider}> |</span> Ukraine
      </span>
    </>
  );
}

export default GoIT;
