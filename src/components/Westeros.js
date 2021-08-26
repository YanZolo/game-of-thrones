import React from 'react';

class Westeros extends React.Component {



    render() {


        return (
            <>
                <div className='d-flex'>
                    <h1 style={{borderRadius: '5px'}} className='m-4 text-light bg-dark p-2'>{this.props.countries}</h1>
                </div>

            </>
        )
    }



}

export default Westeros;