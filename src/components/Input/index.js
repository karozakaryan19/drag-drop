import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import useOutsideClick from '../../hooks/useOutsideClick';
import { ReactComponent as EyeIcon } from '../../icons/visibility.svg';
import { ReactComponent as EyeInvisibleIcon } from '../../icons/invisible.svg';

import './Input.scss';

const Input = ({
    icon,
    refy,
    type,
    name,
    value,
    lableText,
    errorName,
    startElem,
    placeholder,
    requestErrorMessage,
}) => {
    const [isFocus, setIsFocus] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isShowIcon, setIsShowIcon] = useState(false);

    const refInput = useRef();
    useOutsideClick(refInput, () => setIsFocus(false));

    const handlerFocus = () => setIsFocus(true);
    const visiblePassword = () => setIsVisible(!isVisible);

    const focusClass = isFocus ? 'wrapper_input_onfocus' : 'wrapper_input';

    const inputChange = (e) => {
        const val = e.target.value;
        if (val.length > 0) {
            setIsShowIcon(true);
        } else {
            setIsShowIcon(false);
        }
    };

    const frontErr = errorName && errorName.message;
    const backErr = requestErrorMessage && requestErrorMessage[0] ? requestErrorMessage[0] : null;


    return (
        <>
            <label className='wrapper_label'>{lableText}</label>
            <div
                role="button"
                ref={refInput}
                onClick={handlerFocus}
                className={focusClass}
            >
                {startElem}
                <input
                    ref={refy}
                    type={isVisible && type === 'password' ? 'text' : type}
                    name={name}
                    value={value}
                    pattern={type === 'number' ? '[0-9]*' : null}
                    inputMode={type === 'number' ? 'numeric' : null}
                    onChange={inputChange}
                    className='wrapper_input__content'
                    placeholder={placeholder}
                    autoComplete="off"
                />
                {type === 'password' && isShowIcon && (
                    <div
                        role="button"
                        onClick={visiblePassword}
                        className='wrapper__icon'
                    >
                        {!isVisible ? <EyeInvisibleIcon className='wrapper__icon_child' /> : <EyeIcon className='wrapper__icon_child' />}
                    </div>
                )}
                {icon}
            </div>

            <p className='wrapper__error_message'>
                {frontErr || backErr}
            </p>
        </>
    );
};

Input.propTypes = {
    icon: PropTypes.node,
    refy: PropTypes.any.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    lableText: PropTypes.string,
    startElem: PropTypes.node,
    errorName: PropTypes.object,
    placeholder: PropTypes.string,
    requestErrorMessage: PropTypes.object,
};

Input.defaultProps = {
    icon: undefined,
    type: 'text',
    name: '',
    value: undefined,
    lableText: '',
    startElem: undefined,
    errorName: {},
    placeholder: '',
    requestErrorMessage: {},
};
export default Input;