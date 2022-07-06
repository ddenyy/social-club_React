import logo from './logo.svg';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='app__content'>
        <header className='header'>
          <img className='header__logo' />
        </header>
        <nav className='navigation'>
          <div className='navigation__content'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <a className='navigation__link'>Profile</a>
            </li>
            <li className='navigation__item'>
              <a className='navigation__link'>Messages</a>
            </li>
            <li className='navigation__item'>
              <a className='navigation__link'>News</a>
            </li>
            <li className='navigation__item'>
              <a className='navigation__link'>Music</a>
            </li>
            <li className='navigation__item'>
              <a className='navigation__link'>Settings</a>
            </li>
          </ul>
          <div className='navigation__friends'>
            <h2 className='title title_position_friends'>Friends</h2>
            <ul className='friends-list'>
              <li className='friends-list__item'>
                  <a className='friends-list__link'></a>
                  <p className='friends-list__name'>Биба</p>
              </li>
              <li className='friends-list__item'>
                  <a className='friends-list__link'></a>
                  <p className='friends-list__name'>Боба</p>
              </li>
              <li className='friends-list__item'>
                  <a className='friends-list__link'></a>
                  <p className='friends-list__name'>Гоба</p>
              </li>
            </ul>
          </div>
          </div>
        </nav>
        <main className='content'></main>
      </div>
    </div>
  );
}

export default App;
