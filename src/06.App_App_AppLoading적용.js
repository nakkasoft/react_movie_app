import React, { Component } from 'react';
import Movie from './Movie.js';
import './App.css';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceivedProps() -> sholdComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {}

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  // async : 이전 작업이 끝나기 전에 바로 실행됨.
  _getMovies = async () => {
    const movies = await this._callApi()

    this.setState({
      movies  // == movies: movies
    })
  }

  _callApi = () => {
    //return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    //return fetch('https://randomuser.me/api/?results=10')
    return fetch('http://localhost:8000/samplemovie_simple.txt')
    .then(callback  => callback.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
