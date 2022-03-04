import React, { useState } from 'react';
import './AddCategory.css';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("")
    const changeInput = (el) => {
        setInputValue(el.target.value);
    }
    const handleSubmit = (form) => {
        form.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => ([inputValue, ...cats]));
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={changeInput}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}