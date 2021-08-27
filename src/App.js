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
  // handleFavoriteOnClick = (e) => {
  //   this.setState({ favorite: [...this.state.favorite, e] })
  //   console.log(e)
  // }
  handleResetFavorite = () => {
    this.state.favorite.length > 0 && setTimeout(() => {
      alert('your favorite characters has been reset')
    }, 100)
    this.setState({ favorite: [] })
  }

  // handleRemoveFavorite = (e, index) => {
  handleFavoriteOnClick = (e,index) => {

    console.log(e)
    console.log(index)
    // je regarde si mon personnage est dans les favoris //
    const favoriteChecking = this.state.favorite.find((element) => {
      return element.id === e.id
    })

    console.log('my favorite character', favoriteChecking)


    if (favoriteChecking) {

      const cloneFavorite = [...this.state.favorite.filter((elem) => {
        return elem.id !== e.id
      })]

      // avec methode splice, index recuperé dans le map //
      // cloneFavorite.splice(index, 1) //

      this.setState({ favorite: cloneFavorite })
    }

    else {
      this.setState({ favorite: [...this.state.favorite, e] })
      console.log(e)
    }
  }

  // avec la methode findIndex si on prend pas l'index depuis le .map

  // si mon perso est dans les favoris, je le retire des favoris

  // if (favorite) {
  //   const index = this.state.favorite.findIndex((element) => {
  //     element.fullName === favorite.fullName
  //   })
  // }

  //   cloneFavorite.splice((index, 1) => {

  //     // object.name === e.name && this.setState({favorite: this.state.favorite.slice(index) })
  //     // console.log('clone of favorite',cloneFavorite)
  //     // console.log(character[index])
  //     // return character[index] !== e[index]      

  //   })
  //   this.setState({favorite: cloneFavorite})
  //     } else {// si mon perso est pas dans les favoris, je l'ajoute dans les favoris
  // const character = this.state.characters.find((element) => {
  //   return (
  //     element.fullName === name
  //   )
  // })
  // this.setState({ favorites: [...clonedFavorites, character] })
  // }




  handleDisplayFavorite = () => {
    this.setState({ displayFavorite: this.state.displayFavorite ? false : true })
  }
  handleDisplayContinents = () => {
    this.setState({ displayContinents: this.state.displayContinents ? false : true })
  }





  render() {

    console.log('all my character', this.state.characters)
    console.log('all my favorite', this.state.favorite)
    return (
      <>

        <Container // principal container //


          titleCharacters=' Game of thrones'

          // container of all Characters //
          characterContent={this.state.characters.map((e, index) =>
            <Characters
              imageUrl={e.imageUrl}
              title={e.title}
              fullName={e.fullName}
              favorite={() =>
                this.handleFavoriteOnClick(e, index)}
              // removeFavorite={() =>
              //   this.handleRemoveFavorite(e, index)}
              isFavorite={this.state.favorite}
            />)}


          //favorite display and reset buttons //
          onClickDisplayFavorite={this.handleDisplayFavorite}
          onClickResetFavorite={this.handleResetFavorite}
          displayFavoriteActive={this.state.displayFavorite}

          // container of all Favorite Characters //
          favoriteContent={this.state.displayFavorite && this.state.favorite && this.state.favorite.map((e, index) => <Characters
            // removeFavorite={() => { this.handleRemoveFavorite(e, index) }}
            imageUrl={e.imageUrl}
            title={e.title}
            fullName={e.fullName}
            isFavorite={this.state.favorite}

          />)}

          // continents display and reset buttons //
          onClickDisplayContinents={this.handleDisplayContinents}
          displayContinentsActive={this.state.displayContinents}

          // container of continents //
          continentsContent={this.state.displayContinents &&
            this.state.continents.map((countries) =>
              <Westeros countries={countries.name} />)
          }
        />




      </>
    )
  }

}

export default App