import s from './Education.module.css';

function Education() {
  return (
    <>
      <p className={s.education}>
        Kiev University of Market Relations (Banking)
      </p>
      <span className={s.time}>
        Septermber 2009 - September 2014
        <span className={s.divider}> |</span> Ukraine
      </span>
    </>
  );
}

export default Education;
