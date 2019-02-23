import React, { Component } from 'react';
import Movie from './Movie.js';
import './App.css';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceivedProps() -> sholdComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    greeting: 'Hello!',
    movies: [
      {
        title: "Matrix",
        poster: "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      },
      {
        title: "Full Metal Jacket",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
      },
      {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
      },
      {
        title: "Star Wars",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/220px-Star_wars2.svg.png",
      }
    ]
  }

  componentDidMount(){
    // 5초 뒤에 1개의 영화를 추가 하라.
    // ...this.state.movies -> 기존 꺼에 추가하라는 의미.
    setTimeout(() => {
      this.setState({
        movies:[
          ...this.state.movies,
          {
            title: "Transpotting",
            poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/220px-Star_wars2.svg.png"
          }
        ]
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
