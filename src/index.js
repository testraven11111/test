import axios from 'axios';
import { getMovies } from './api.js';

class MovieSearch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 1rem;
        }
      </style>
      <form>
        <label>
          Search for a movie:
          <input type="text" name="search" />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul></ul>
    `;
        this.form = this.shadowRoot.querySelector('form');
        this.input = this.shadowRoot.querySelector('input');
        this.ul = this.shadowRoot.querySelector('ul');
    }

    connectedCallback() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            const searchQuery = this.input.value;
            axios
                .get(
                    `https://api.themoviedb.org/3/search/movie?api_key=e74e5453a1c967b8e36b8763d65f06b9&query=${searchQuery}`
                )
                .then((response) => {
                    this.ul.innerHTML = '';
                    const movies = response.data.results;
                    movies.forEach((movie) => {
                        const li = document.createElement('li');
                        li.textContent = movie.title;
                        this.ul.appendChild(li);
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }
}
