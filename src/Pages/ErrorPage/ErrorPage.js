import React from 'react';
import errorImg from '../../Assets/error-page.png'

const ErrorPage = () => {
    return (
        <div className='container mx-auto text-center'>
            <img src={errorImg} alt="" className='img-fluid'/>
        </div>
    );
};

export default ErrorPage;