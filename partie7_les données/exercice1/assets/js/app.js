let url = 'assets/json/movies.json';

// fonction qui permet de 
const voteMovie = (voteAverage) => {
    let starsHtml = '';
    let voteNumber = Math.round(voteAverage / 2);
    for(i=0; i<voteNumber; i++) {
        starsHtml += '<span class="fas fa-star"></span>';
    }
    return starsHtml;
}

fetch(url)
.then( (response) => {
    return response.json()
})
.then(data => {
    
data.results.forEach((index) =>{

let note = voteMovie(index.vote_average);

    cardMovies.innerHTML +=
        `<div class="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center p-2">
        <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${index.poster_path}" alt="Card image cap" >
            <div class="card-body">
                <h5 class="card-title">${index.original_title}</h5>
                <p class="card-text">${index.overview}</p>

            <div class="d-flex justify-content-center">
                ${note}
            </div>

            </div>
        </div>
        </div>`
})

})





