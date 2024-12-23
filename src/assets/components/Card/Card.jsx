import './Card.css';
import PropTypes from 'prop-types';

export default function Card(props) {
  let { color, tariff, speed } = props;

  let header = `card__header card__header_${color}`;
  let body = `card__body card__body_${color}`;

  return (
    <article className={tariff === 550 ? 'card card_special' : 'card'}>
      <header className={header}>
        Безлимитный <span>{tariff}</span>
      </header>
      <div className={body}>
        <span className="card__currency">руб</span>
        <span className="card__price">{tariff}</span>
        <span className="card__period">/мес</span>
      </div>
      <p className="card__description">
        до <span>{speed}</span> Мбит/сек
      </p>
      <footer className="card__footer">
        Объем включенного трафика не ограничен
      </footer>
    </article>
  );
}

Card.propTypes = {
  color: PropTypes.string.isRequired,
  tariff: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired
};
