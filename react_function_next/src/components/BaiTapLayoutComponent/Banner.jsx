import React from 'react'

const Banner = () => {
    return (
        <div class="container px-lg-5 text-center">
            <div className='p-4 p-lg-5 bg-light rounded-3 text-center'>
                <div class="m-4 m-lg-5">
                    <h1 className='display-5 fw-bold'>A warm welcome!</h1>
                    <p className='fs-4'>
                        Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
                    </p>
                    <a href="#" className='btn btn-primary btn-lg'>Call to action</a>
                </div>
            </div>
        </div>
    )
}

export default Banner