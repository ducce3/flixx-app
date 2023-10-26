<<<<<<< HEAD
const global = {
    currentPage: window.location.pathname
};

async function displayPopularMovies() {
    const { results }= await fetchAPIData('movie/popular')
    results.forEach((movie) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        
          <a href="movie-details.html?id=${movie.id}">
            ${
            movie.poster_path
               ? ` <img
               src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
               class="card-img-top"
               alt="Movie Title"
             />` : `<img
             src="images/no-image.jpg"
             class="card-img-top"
             alt="Movie Title"
           />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
          `
        
    document.querySelector('#popular-movies').appendChild(div);

    })
} 

// Fetch data from TMDB Api

async function fetchAPIData(endpoint)   {
    const API_KEY = 'af742eda998ce8c0265a6bd1360197c6';
    const API_URL = 'https://api.themoviedb.org/3/';

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);

    const data = await response.json()

    return data
    

}
 
// Highlight active link

const highlightActiveLink = () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if(link.getAttribute('href') === global.currentPage){
            link.classList.add('active')
        }
    })
}

// Init App

const init = () => {
    switch(global.currentPage) {
        case '/':
        case '/index.html':    
            displayPopularMovies() 
            break;
        case '/shows.html':
            console.log('shows');
            break;
        case '/movie-details.html':
            console.log('movie');
            break;    
        case '/tv-details.html':
            console.log('tv det');
            break;
        case '/search.html':
            console.log('search');
            break;          
    }

    highlightActiveLink()
    


}

document.addEventListener('DOMContentLoaded', init)
=======
const global = {
    currentPage: window.location.pathname
};

// Fetch data from TMDB Api

async function fetchAPIData(endpoint)   {
    const API_KEY = 'af742eda998ce8c0265a6bd1360197c6';
    const API_URL = 'https://api.themoviedb.org/3/';

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&languag3e=en-US`);
    

}
 
// Highlight active link

const highlightActiveLink = () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if(link.getAttribute('href') === global.currentPage){
            link.classList.add('active')
        }
    })
}

// Init App

const init = () => {
    switch(global.currentPage) {
        case '/':
        case '/index.html':    
            console.log('home');
            break;
        case '/shows.html':
            console.log('shows');
            break;
        case '/movie-details.html':
            console.log('movie');
            break;    
        case '/tv-details.html':
            console.log('tv det');
            break;
        case '/search.html':
            console.log('search');
            break;          
    }

    highlightActiveLink()
}

document.addEventListener('DOMContentLoaded', init)
>>>>>>> origin/main

