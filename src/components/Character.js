import React from 'react';


class Character extends React.Component {


    render() {
        return (
            <>

                <div className="card m-2 bg-dark " style={{ width: '12rem', border: '1px solid white' }}>

                    <img className='card-img-top ' src={this.props.imageUrl} alt='cards' />
                    <div className='card-body '>
                        <div className='text-light'>
                            <p className='card-text '>{this.props.fullName}</p>
                            <p className='card-text fs-5'>{this.props.title}</p>
                            {/* {this.props.favorite && <img src="public\star_favorite.png" alt="stars" />} */}
                        </div>
                        {/* <div>
                           <img src="public\favicon.ico" style={{transform: 'scale(0.9)'}} alt="starsFavorite" />
                        </div> */}

                    </div>
                    <button className='btn btn-outline-light text-secondary' onClick={this.props.favorite}>Favorite</button>
                    <button className='btn btn-outline-light text-secondary' onClick={this.props.removeFavorite}>Remove favorite</button>

                </div>





            </>
        )
    }
}

export default Character