import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Card from '../Card';
import Textarea from '../Textarea';
import AddButton from '../AddButton';
import { cardsAction } from '../../store/action';

import './TodoList.scss';

const TodoList = ({ item }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [isAddNewItem, setIsAddNewItem] = useState(false);

    const { title, bg, row, list, id } = item;
    const addNewAtem = isAddNewItem && <Textarea setValue={setValue} value={value} />

    const addNewCard = () => {
        if (value !== "") {
            dispatch(cardsAction.setCard({
                row,
                text: value,
            }));
            setIsAddNewItem(false);
            setValue('');
        }
    }

    const renderCard = list?.map((el, i) => <Card key={shortid.generate()} item={el} i={i} />)

    return (
        <div className='wrapper_column'>
            <div className='wrapper_column__header'
                style={{ background: bg }}>
                <p className='wrapper_column__header_title'>{title}</p>
                <p className='wrapper_column__header_count'>({list?.length})</p>
            </div>
            <div className='wrapper_column__content'>
                <div className='wrapper_column__content__list' id={id} data-row={row}>{renderCard}</div>
                {addNewAtem}
            </div>
            <AddButton isAddNewItem={isAddNewItem} addNewItem={addNewCard} setIsAddNewItem={setIsAddNewItem} />
        </div>
    )
};

TodoList.defaultProps = {
    item: {},
};

TodoList.propTypes = {
    item: PropTypes.object,
};

export default TodoList;