import React from 'react';
import './Banner.css';
import Button from '../Button/Button';
import girl1 from '../../images/girl1.svg';
import girl2 from '../../images/girl2.svg';

function Banner() {

  let result = [];
  for (let i = 1; i < 4; i++) {
    i == 1 ? result.push(<img src={girl1} alt='Girl' className={`banner__img-${i}`} key={i} />) :
      result.push(<img src={girl2} alt='Girl' className={`banner__img-${i}`} key={i} />)
  }

  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__text"><span>Узнай какое занятие</span> подойдет вашему ребёнку</div>
        <Button text="Узнать"></Button>
      </div>
      {result}
    </div>
  );
}

export default Banner;
