import s from './LanguagesContainer.module.css';

function LanguagesContainer({ label }) {
  return (
    <li className={s.item}>
      <span className={s.text}>{label}</span>
    </li>
  );
}

export default LanguagesContainer;
