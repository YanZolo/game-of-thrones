import React from 'react';

class Container extends React.Component {

    render() {

        return (
            <div className='container-fluid d-flex justify-content-between .bg-secondary.bg-gradient' style={{fontFamily: 'MedievalSharp'}}>
                <div className='row col-6'>
                    <h1 className='ms-5' style={{ fontWeight: '500', fontSize: '5rem', transform: 'translateX 50px'}}>{this.props.titleCharacters}</h1>
                    {this.props.characterContent}
                </div>

                <div style={{ width: '0px', height: '100vm', border: '4px solid black', marginLeft: '-50px' }}></div>{/* vertical line */}

                <div className='row col-5 d-flex' style={{ height: '500px' }}>
                    <div className='d-flex text-center'>
                        <button className={`btn mt-2 col-4  ${this.props.displayFavoriteActive ? 'btn-outline-success' : 'btn-outline-dark'}`} style={{ height: '50px' }} onClick={this.props.onClickDisplayFavorite}>Display favorite</button>

                        <button className='btn btn-outline-dark mt-2 col-4  ' style={{ height: '50px' }} onClick={this.props.onClickResetFavorite}>Reset favorite</button>

                        <button className={`btn mt-2 col-4  ${this.props.displayContinentsActive ? 'btn-outline-success' : 'btn-outline-dark'}`} style={{ height: '50px' }} onClick={this.props.onClickDisplayContinents}>Display continents</button>
                    </div>

                    <div className='d-flex flex-wrap'>{this.props.continentsContent}</div>
                    <div className='d-flex flex-wrap'>{this.props.favoriteContent}</div>
                </div>
            </div>

        )
    }
}

export default Container