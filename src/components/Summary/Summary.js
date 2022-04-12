import s from './Summary.module.css';

function Summary({ label, summaryContainer, text }) {
  return (
    <li className={s.item}>
      <p className={s.summary}>{label}</p>
    </li>
  );
}

export default Summary;
