import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './components/Character';
import Westeros from './components/Westeros';
import Container from './components/Container';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: [],
      favorite: [],
      displayFavorite: false,
      continents: [],
      displayContinents: false
    }
  }
  componentDidMount = () => {

    fetch("https://thronesapi.com/api/v2/Characters")
      .then(result => result.json())
      .then(result => this.setState({ characters: result }))
      .then(result => console.log('characters:', this.state.characters))

    fetch('https://thronesapi.com/api/v2/Continents')
      .then((result) => result.json())
      .then((result) => this.setState({ continents: result }))
      .then(result => console.log('continents:', this.state.continents))

  }
  handleFavoriteOnClick = (e) => {
    this.setState({ favorite: [...this.state.favorite, e] })
    console.log(e)
  }

  handleDisplayFavorite = () => {
    this.setState({ displayFavorite: this.state.displayFavorite ? false : true })
  }
  handleDisplayContinents = () => {
    this.setState({ displayContinents: this.state.displayContinents ? false : true })
  }

  handleResetFavorite = () => {
    this.state.favorite.length > 0 && setTimeout(() => {
      alert('your favorite characters has been reset')
    }, 100)
    this.setState({ favorite: [] })
  }


  // handleRemoveFavorite = (e) => {
  //   this.state.favorite.map((object, index) => {
  //     // object.name === e.name && this.setState({favorite: this.state.favorite.slice(index) })
  //     // setTimeout(()=>{ console.log(this.state.favorite[index-1])},2000)
  //     this.setState({ favorite: this.state.favorite.splice(index) })
  //     console.log(e)
  //   })
  // }



  render() {
    console.log('favorite: ', this.state.favorite)
    console.log('continents: ', this.state.continents)


    return (
      <>

        <Container // principal container


          titleCharacters=' Game of thrones'
          // container of all Characters
          characterContent={this.state.characters.map((e) => <Characters favorite={() => this.handleFavoriteOnClick(e)} imageUrl={e.imageUrl} title={e.title} fullName={e.fullName} />)}

          //favorite display and reset buttons
          onClickDisplayFavorite={this.handleDisplayFavorite} onClickResetFavorite={this.handleResetFavorite}
          displayFavoriteActive={this.state.displayFavorite}

          // container of all Favorite Characters 
          favoriteContent={this.state.displayFavorite && this.state.favorite && this.state.favorite.map((e) => <Characters /*removeFavorite={() => this.handleRemoveFavorite(e)}*/ imageUrl={e.imageUrl} title={e.title} fullName={e.fullName} />)}

          // continents display and reset buttons
          onClickDisplayContinents={this.handleDisplayContinents} displayContinentsActive={this.state.displayContinents}

          // container of continents
          continentsContent={this.state.displayContinents && this.state.continents.map((countries) => <Westeros countries={countries.name} />)}
        />




      </>
    )
  }

}

export default App