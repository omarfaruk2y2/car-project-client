import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
            <div className="header-top container">
                <div className='grid grid-cols-2'>
                    <div className=''>
                        <img src="" alt="" />
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="Email" />
                            <button className="btn join-item rounded-r-full">Subscribe</button>
                        </div>

                    </div>
                    <div></div>
                </div>
            </div>
            <div className="navbar container">
                <Navbar></Navbar>
            </div>
        </>
    )
}

export default Header