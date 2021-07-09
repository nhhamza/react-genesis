import React from 'react';
import PropTypes from 'prop-types';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const CardPrisioner = ({ card }) => {
  return (
    <div
      key={card.id}
      title="result__container__card"
      className="result__container__card"
    >
      <div>
        <img
          className="result__container__card__image"
          src={card?.creator?.avatarUrl}
          alt={card.title}
        />
      </div>
      <div className="result__container__card__body">
        <div className="result__container__card__body__phone">
          {card?.creator.phone}
        </div>
        <div className="result__container__card__body__title">
          {card?.creator.name}
        </div>
        <div className="result__container__card__body__date">{card?.date}</div>
      </div>
      <div className="result__container__card__navigation">
        <ArrowForwardIosIcon fontSize="small" />
      </div>
    </div>
  );
};

CardPrisioner.propTypes = {
  card: PropTypes.objectOf({})
};

export default CardPrisioner;
