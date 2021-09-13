import React from 'react';
import PropTypes from 'prop-types';

import './Textarea.scss';

const Textarea = ({ setValue, value }) => {
    const handlerChange = (e) => setValue(e.target.value);

    return (
        <textarea onChange={handlerChange} value={value} className='wrapper_textarea' placeholder='Ввести заголовок для этой карточки' />
    )
};

Textarea.defaultProps = {
    value: '',
    setValue: () => { },
};

Textarea.propTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func,
};

export default Textarea;
