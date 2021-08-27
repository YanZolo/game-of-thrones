import React from 'react';


class Character extends React.Component {


    render() {

        const isFavorite = this.props.isFavorite.find((favorite) => {
            return (
              favorite.fullName === this.props.fullName
            )
        })

        return (
            <>

                <div className={`card m-2 border-5 border-dark ${isFavorite ? 'bg-warning': 'bg-light'}`} style={{ width: '12rem', border: '1px solid black', }}>

                    <img className='card-img-top ' src={this.props.imageUrl} alt='cards' />
                    <div className='card-body '>
                        <div className=''>
                            <p className='card-text '>{this.props.fullName}</p>
                            <p className='card-text fs-5 fw-bold'>{this.props.title}</p>
                            {/* {this.props.favorite && <img src="public\star_favorite.png" alt="stars" />} */}
                        </div>
                        {/* <div>
                           <img src="public\favicon.ico" style={{transform: 'scale(0.9)'}} alt="starsFavorite" />
                        </div> */}

                    </div>

                    {/* //toggle button // */}
                   <button
                        className='btn btn-outline-dark border-2 '
                        onClick={this.props.favorite}>
                        {`${isFavorite ? 'Remove favorite' : 'Add favorite'}`}
                    </button>

                    {/* // remove button // */}
                    {/* <button
                        className='btn btn-outline-dark border-2 '
                        onClick={() => {this.props.removeFavorite(this.props.fullName)}}>
                        Remove favorite
                    </button> */}

                </div>





            </>
        )
    }
}

export default Character