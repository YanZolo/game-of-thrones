import React from 'react';


class Character extends React.Component {


    render() {
        return (
            <>

                <div className="card m-2" style={{ width: '12rem' }}>

                    <img className='card-img-top' src={this.props.imageUrl} alt='cards' />
                    <div className='card-body '>
                        <div>
                            <li className='card-text'>{this.props.fullName}</li>
                            <li className='card-text'>{this.props.title}</li>
                        </div>
                        {/* <div>
                           <img src="public\favicon.ico" style={{transform: 'scale(0.9)'}} alt="starsFavorite" />
                        </div> */}

                    </div>
                    <button className='btn btn-outline-dark' onClick={this.props.favorite}>Favorite</button>
                    <button className='btn btn-outline-dark' onClick={this.props.removeFavorite}>Remove favorite</button>

                </div>





            </>
        )
    }
}

export default Character