import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      <div className={s.container}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
