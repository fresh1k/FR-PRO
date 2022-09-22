$(document).ready(function () {
    const films = $('#films');
    const film_detail = $('#film-detail');
    const films_array = [];
    
    $(window).on("load", function () {
        $.ajax({
            type: "GET",
            url: "https://swapi.dev/api/films/",
            dataType: "json",
            async: "true",
            success: function (response) {
                renderFilms(response.results)
                films_array.push(response.results)
                $('.hit').on('click', function () {
                    const filmId = $(this).attr('id')
                    console.log(filmId)
                    $.ajax({
                        type: "GET",
                        url: `https://swapi.dev/api/films/${filmId}`,
                        dataType: "json",
                        success: function (response) {
                            renderDetailFilm(response)
                        }
                    })
                })
            }
        });
    });
    
    
    const renderFilms = (film) => {
        const htmlString = film.map(f => {
            return `<div class="film">
                        <a href="#" class="hit" id="${f.episode_id}">
                            <img class="film-poster" src="images/${f.title}.jpg" alt="film-poster">
                        </a>
                        <div class="film-description">
                        <h1 class="film-title">${f.title}</h1>
                            <p class="film-year">${f.release_date}</p>
                        </div>
                    </div>`;
        }).join('');
        films.html(htmlString)
    }

    const renderDetailFilm = (movies) => {
        film_detail.html(`<div class="film">
        <div class="film-description">
            <h1 class="film-title">Title: "${movies.title}"</h1>
            <p class="film-year">Episode-id: "${movies.episode_id}"</p>
            <p class="film-year">Release-date: "${movies.release_date}"</p>
            <p class="film-year">Director: "${movies.director}"</p>
            <p class="film-year">Producer: "${movies.producer}"</p>
            <p class="film-year">Created:"${movies.created}"</p>
        </div>
    </div>`
        )
    }

    $('#search').keyup(function () {
        const searchString = $('#search').val().toLowerCase();
        const filteredFilms = films_array[0].filter(movie => {
            return (
                movie.title.trim().toLowerCase().includes(searchString) ||
                movie.release_date.includes(searchString)
            )
        })
        const filteredFilm = films_array[0].filter(movie => {
            return (
                movie.title.trim().toLowerCase().includes(searchString) ||
                movie.release_date.includes(searchString)
            )
        })
        renderFilms(filteredFilms)
        renderDetailFilm(filteredFilm[0])
    })
})


