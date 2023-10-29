import React from 'react';
import './Input.css';
import Button from '../Button/Button';
import search from '../../images/search.svg';

function Input() {
  return (
    <div className="input">
      <form className="input__form">
        <img src={search} className="input__img" />
        <input className="input__input" type="text" placeholder="Введите название секции или кружка"/>
        <Button className="input__button" text="Найти"></Button>
      </form>
    </div>
  );
}

export default Input;
