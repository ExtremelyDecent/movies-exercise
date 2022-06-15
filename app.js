let movieList = [];
let movieNum = 0;


$('#movie-rating').on('change', function(){
    $('#range-value').text($('#movie-rating').val());
});
$('#new-movies-form').on('submit', function(e){
    e.preventDefault();
    let title = $('#movie-title').val();
    let rating = $('#movie-rating').val();
    let movie = {title, rating,movieNum};
    movieNum++;
    addMovie(movie);
    const movieHTML = createMovieHTML(movie);
    $('#movie-table-body').append(movieHTML);

});

$("tbody").on("click", ".btn.btn-rem", function(e) {
    // find the id
    let indexToRemoveAt = movieList.findIndex(movie => movie.id === +$(e.target).data("deleteId"))
    
    // remove movie from list
    movieList.splice(indexToRemoveAt, 1)

    // remove from table
    $(e.target)
      .closest("tr")
      .remove();
    
  });
// adds movie to list
function addMovie(movie)
{
    movieList.push(movie);
}
//creates movie object
function createMovieHTML(movie){
    console.log(movie);
    return `
    <tr>
      <td>${movie.title}</td>
      <td>${movie.rating}</td>
      <td>
        <button class="btn btn-rem" data-delete-id=${movie.id}>
          Delete
        </button>
      </td>
    <tr>
  `;
}
