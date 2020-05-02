import React from 'react';

import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <img className='banner' src='images/bg-header-mobile.svg' alt='' />
      </header>
      <section className='cards'>
        <div className='container'>
          <article className='card'>
            <div className='logo'>
              <img src='images/photosnap.svg' alt='company logo' />
            </div>

            <div className='card__content'>
              <div className='card__header row'>
                <p className='company'>Photosnap</p>
                <div className='priority row'>
                  <p className='priority__name new'>new</p>
                  <p className='priority__name featured'>featured</p>
                </div>
              </div>

              <div className='row'>
                <p className='position'>Senior Frontend Developer</p>
              </div>

              <div className='row'>
                <p className='card__footer-item posted-time text-gray'>
                  1d ago
                </p>
                <p className='card__footer-item contract text-gray'>
                  Full Time
                </p>
                <p className='card__footer-item location text-gray'>USA Only</p>
              </div>
            </div>

            <div className='tags'>
              <div class='tags__item'>
                <p className='role'>Frontend</p>
              </div>
              <div class='tags__item'>
                <p className='level'>Senior</p>
              </div>
              <div class='tags__item'>
                <p className='language'>HTML</p>
              </div>
              <div class='tags__item'>
                <p className='language'>CSS</p>
              </div>
              <div class='tags__item'>
                <p className='language'>JavaScript</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
