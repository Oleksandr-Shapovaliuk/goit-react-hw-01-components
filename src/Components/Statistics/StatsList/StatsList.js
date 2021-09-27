import PropTypes from 'prop-types';
import s from './StatsList.module.css';

const StatsList = ({ statList }) => {
  return (
    <ul className={s.list}>
      {statList.map(stat => {
        const randomRbg = getRandomRgb();
        const background = `rgb(${randomRbg.r}, ${randomRbg.g}, ${randomRbg.b})`;
        return (
          <li className={s.item} key={stat.id} style={{ background }}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.value}>{`${stat.percentage}%`}</span>
          </li>
        );
      })}
    </ul>
  );
};

function getRandomRgb() {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  };
}

StatsList.propTypes = {
  statList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatsList;
