import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import StatsList from './StatsList';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}
      <StatsList statList={stats} />
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
