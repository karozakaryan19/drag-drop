import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { cardsAction } from '../../store/action';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import './Card.scss';

const Card = ({ item, i }) => {
    const dispatch = useDispatch();
    const { id, text } = item;

    const removeCard = () => {
        dispatch(cardsAction.removeCard(id));
    };

    return (
        <div className="wrapper__card" data-id={id} data-index={i}>
            <div onClick={removeCard} className='wrapper__card__close'>
                <CloseIcon className='wrapper__card__close__icon' />
            </div>
            <p className='wrapper__card_id'> <b>id:</b>{id}</p>
            <p className='wrapper__card_text'>{text}</p>
        </div>
    )
};

Card.defaultProps = {
    i: 0,
    item: {},
};

Card.propTypes = {
    i: PropTypes.number,
    item: PropTypes.object,
};

export default Card;
