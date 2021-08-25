import React from 'react';

class Westeros extends React.Component {



    render() {


        return (
            <>
                <div className='d-flex'>
                    <h1 className='m-4'>{this.props.countries}</h1>
                </div>

            </>
        )
    }



}

export default Westeros;