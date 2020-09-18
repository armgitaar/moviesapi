import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Movie from "App/Models/Movie";

export default class MovieSeeder extends BaseSeeder {
  public async run () {
    await Movie.createMany([
      {
        title: 'Children of Men',
        posterImage: 'https://m.media-amazon.com/images/M/MV5BMTQ5NTI2NTI4NF5BMl5BanBnXkFtZTcwNjk2NDA2OQ@@._V1_.jpg',
        releaseYear: 2006,
        topBilled: 'Clive Owen, Julianne Moore, Michael Cane',
        genres: 'Adventure, Drama, Sci-Fi',
        movieDescription: 'In 2027, in a chaotic world in which women have become somehow infertile, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea.',
        movieReview: 'The movie is pretty good. It\'s known for long, seemingly un-cut sequences. It\'s better than Gravity. It\'s not as good as Galaxy Quest. You should watch it. I mean, what else are you doing?'
      },
      {
        title: 'The Terminator',
        posterImage: 'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        releaseYear: 1984,
        topBilled: 'Arnold Schwarzenegger, Michael Biehn, Linda Hamilton',
        genres: 'Action, Sci-Fi',
        movieDescription: 'A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity\'s future salvation.',
        movieReview: 'Like most movies that turn into a series, the 2nd one is wayyyyy better. In this movie, Schwarzenegger is the bad guy. The great thing for him, is that he\'s not required to act and just plays his normal self. Hollywood. A wonderland!'
      },
      {
        title: 'The Sisterhood of the Traveling Pants',
        posterImage: 'https://m.media-amazon.com/images/M/MV5BNmRjYWE3OTQtYzEwOC00OWM4LTk3MzktZTUyZTgzNjY4NDc0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        releaseYear: 2005,
        topBilled: 'Amber Tamblyn, Alexis Bledel, America Ferrera, Blake Lively',
        genres: 'Comedy, Drama, Romance',
        movieDescription: 'Four best girlfriends hatch a plan to stay connected with one another as their lives start off in different directions: they pass around a pair of secondhand jeans that fits each of their bodies perfectly.',
        movieReview: 'This movie is about the greatest miracle the world has seen. The pants fit them all! Furthermore, the pants travel all over the world. They\'re like a traveling gnome. But, more fun to watch!'
      },
    ])
  }
}
