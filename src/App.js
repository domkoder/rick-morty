import './App.css'
import React from 'react'

function App() {
  return (
    <div className="App">
      <div className="container">
        <aside className="sidebar">
          <nav className="nav card">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link nav__link--active" href="/characters">
                  Characters
                </a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="/favorite">
                  Favorites
                </a>
              </li>
            </ul>

            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link nav__link--active" href="/characters">
                  Characters
                </a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="/favorite">
                  Favorites
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="main">
          <div>
            <div className="search">
              <form className="search-form">
                <input
                  className="search-form__input"
                  placeholder="Search books..."
                  id="search"
                  type="search"
                />
                <label
                  className="search-form__label"
                  for="search"
                  data-state="tooltip-hidden"
                  data-reach-tooltip-trigger=""
                >
                  <button className="search-form__button" type="submit">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      aria-label="search"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                  </button>
                </label>
              </form>
            </div>
            <div className="text-container">
              <p>Welcome to the character page.</p>
              <p>Here, let me load a few characters for you...</p>
              <p>
                Here you go! Find more characters with the search bar above.
              </p>
            </div>

            <ul className="character-list">
              <li aria-label="name">
                <div className="card profile">
                  <a className="profile__body" href="/book/B084F96GFZ">
                    <figure className="profile__figure">
                      <img
                        className="profile__image"
                        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                        alt="name"
                      />
                    </figure>
                    <div className="profile__info">
                      <h2 id="" className="profile__header">
                        Morty Smith
                      </h2>
                      <div className="">status: Alive</div>
                      <div className="">gender: Male</div>
                      <div className="">species: Human</div>
                    </div>
                  </a>
                  <footer className="profile__footer">
                    <button
                      className="profile__action"
                      aria-label="Add to list"
                      data-state="tooltip-hidden"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
                      </svg>
                    </button>
                  </footer>
                </div>
              </li>

              <li aria-label="name">
                <div className="card profile">
                  <a className="profile__body" href="/book/B084F96GFZ">
                    <figure className="profile__figure">
                      <img
                        className="profile__image"
                        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                        alt="name"
                      />
                    </figure>
                    <div className="profile__info">
                      <h2 id="" className="profile__header">
                        Morty Smith
                      </h2>
                      <div className="">status: Alive</div>
                      <div className="">gender: Male</div>
                      <div className="">species: alive</div>
                    </div>
                  </a>
                  <footer className="profile__footer">
                    <button
                      className="profile__action"
                      aria-label="Add to list"
                      data-state="tooltip-hidden"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
                      </svg>
                    </button>
                  </footer>
                </div>
              </li>

              <li aria-label="name">
                <div className="card profile">
                  <a className="profile__body" href="/book/B084F96GFZ">
                    <figure className="profile__figure">
                      <img
                        className="profile__image"
                        src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
                        alt="name"
                      />
                    </figure>
                    <div className="profile__info">
                      <h2 id="" className="profile__header">
                        Summer Smith
                      </h2>
                      <div className="">status: Alive</div>
                      <div className="">gender: Female</div>
                      <div className="">species: alive</div>
                    </div>
                  </a>
                  <div className="profile__footer">
                    <button
                      className="profile__action"
                      aria-label="Add to list"
                      data-state="tooltip-hidden"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
