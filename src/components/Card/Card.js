import React from 'react';

import Filters from '../../containers/Filters/Filters';
import './Card.css';

const Card = ({
  logo,
  company,
  isNew,
  isFeatured,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
}) => {
  return (
    <article className='card'>
      <div className='logo'>
        <img src={logo} alt='company logo' />
      </div>

      <div className='card__content'>
        <div className='content__top row'>
          <p className='company'>{company}</p>
          <div className='priority row'>
            {isNew ? <p className='priority__name new'>new</p> : null}
            {isFeatured ? (
              <p className='priority__name featured'>featured</p>
            ) : null}
          </div>
        </div>

        <div className='content__middle row'>
          <p className='position'>{position}</p>
        </div>

        <div className='content__bottom row'>
          <p className='content__bottom-item posted-time text-gray'>
            {postedAt}
          </p>
          <p className='content__bottom-item contract text-gray'>{contract}</p>
          <p className='content__bottom-item location text-gray'>{location}</p>
        </div>
      </div>
      <Filters role={role} level={level} languages={languages} tools={tools} />
    </article>
  );
};

export default Card;
