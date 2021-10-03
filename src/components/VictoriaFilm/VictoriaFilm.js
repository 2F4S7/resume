import s from './VictoriaFilm.module.css';

function VictoriaFilm() {
  return (
    <>
      <p className={s.university}>VictoriaFilm Studios</p>
      <p>Sound engineer</p>
      <p className={s.education}>
        As a sound engineer at the largest film studio in Ukraine, participated
        in the filming of such movies as: PES, Secret Doors, Tank, Forbidden
        Love, Witch. Was also responsible for managing the recording department
        on the road.
      </p>
      <span className={s.time}>
        Septermber 2015 - September 2020
        <span className={s.divider}> |</span> Ukraine
      </span>
    </>
  );
}

export default VictoriaFilm;
