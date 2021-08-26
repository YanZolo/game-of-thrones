import React from 'react';

class Container extends React.Component {

    render() {

        return (
            <div className='container-fluid d-flex justify-content-between ' style={{fontFamily: 'MedievalSharp', background: 'center url(https://i1.wp.com/fredericjoignot.blog.lemonde.fr/files/2019/04/Game-of-Thrones_Eiserner-Thron_Blog-Titel.jpg) fixed no-repeat ', backgroundSize: 'cover'}}>
                <div className='row col-6'>
                    <h1 className='ms-2 text-black' style={{ fontWeight: '700', fontSize: '6rem'}}>{this.props.titleCharacters}</h1>
                    {this.props.characterContent}
                </div>

                {/* <div style={{ width: '0px', height: '100vm', border: '4px solid black', marginLeft: '-50px' }}></div>vertical line */}

                <div className='row col-5 d-flex' style={{ height: '500px',  }}>
                    <div className='d-flex text-center ' >
                        <button className={`btn mt-2 col-4 text-white  ${this.props.displayFavoriteActive ? 'btn-outline-success' : 'btn-outline-dark'}`} style={{ height: '50px', fontSize: '1.2em', fontWeight: '600' }} onClick={this.props.onClickDisplayFavorite}>Display favorite</button>

                        <button className='btn btn-outline-dark mt-2 col-4 text-white  ' style={{ height: '50px', fontSize: '1.2em', fontWeight: '600' }} onClick={this.props.onClickResetFavorite}>Reset favorite</button>

                        <button className={`btn mt-2 col-4 text-white  ${this.props.displayContinentsActive ? 'btn-outline-success' : 'btn-outline-dark'}`} style={{ height: '50px', fontSize: '1.2em', fontWeight: '600' }} onClick={this.props.onClickDisplayContinents}>Display continents</button>
                    </div>

                    <div className='d-flex flex-wrap'>{this.props.continentsContent}</div>
                    <div className='d-flex flex-wrap '>{this.props.favoriteContent}</div>
                </div>
            </div>

        )
    }
}

export default Container