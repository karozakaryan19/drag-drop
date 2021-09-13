import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as AddIcon } from '../../icons/plus.svg';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import './AddButton.scss';

const AddButton = ({ setIsAddNewItem, isAddNewItem, addNewItem }) => {
    const handlerCancel = () => setIsAddNewItem(false);

    const openItemCard = () => {
        setIsAddNewItem(true)
    }

    const currentButton = !isAddNewItem ?
        <button className='add_button__first' onClick={openItemCard}>
            <AddIcon className='add_button__icon_child' />
            <p className='add_button__first_text'>Дабавить карточку</p>
        </button> :
        <>
            <button className='add_button__second' onClick={addNewItem}>Дабавить карточку</button>
            <button className='add_button__icon' onClick={handlerCancel}>
                <CloseIcon className='add_button__icon_child' />
            </button>
        </>;

    return (
        <div className='add_button'>
            {currentButton}
        </div>
    )
}

AddButton.defaultProps = {
    addNewItem: () => { },
    isAddNewItem: false,
    setIsAddNewItem: () => { },
};

AddButton.propTypes = {
    addNewItem: PropTypes.func,
    isAddNewItem: PropTypes.bool,
    setIsAddNewItem: PropTypes.func,
};

export default AddButton;
