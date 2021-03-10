const myMovies = [
    {
        title: 'cats',
        score: 90
    },
    {
        title: 'beverly hills cop',
        score: 100
    },
    {
        title: 't2',
        score: 85
    },
    {
        title: 'aliens',
        score: 98
    },
]

const newMovieReview = myMovies.map((movie) => {
    return `${movie.title} - ${movie.score / 10}` 
})