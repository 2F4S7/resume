import s from './Experience.module.css';

function Experience({ profession, company, time, country, duties, link }) {
  return (
    <li className={s.item}>
      <h4 className={s.title}>
        {profession}{' '}
        <span className={s.company} link={link}>
          {company}
        </span>
      </h4>
      <ul>
        {duties.map(({ id, duty }) => (
          <li key={id} className={s.duty}>
            {duty}
          </li>
        ))}
      </ul>
      <span className={s.time}>
        {time}
        <span className={s.divider}> |</span> {country}
      </span>
    </li>
  );
}

export default Experience;
