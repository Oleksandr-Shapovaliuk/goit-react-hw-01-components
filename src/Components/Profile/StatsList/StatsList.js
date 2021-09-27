import PropTypes from 'prop-types';
import s from './StatsList.module.css';

const StatsList = ({ stats }) => {
  const profileStatsEntries = Object.entries(stats);

  return (
    <ul className={s.stats}>
      {profileStatsEntries.map(profileStatsEntry => {
        return (
          <li key={profileStatsEntry[0]} className={s.item}>
            <span className={s.label}>{profileStatsEntry[0]}</span>
            <span className={s.quantity}>{profileStatsEntry[1]}</span>
          </li>
        );
      })}
    </ul>
  );
};

StatsList.propTypes = {
  profileStats: PropTypes.objectOf(PropTypes.number),
};

export default StatsList;
