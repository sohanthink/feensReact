import React from 'react'
import NavMenu from '../../components/navMenu/NavMenu'
import Button from '../../components/button/Button'
import "./navbar.css"
import logo from '../../../public/images/logo.png'
import Image from '../../components/Image'


const Navbar = () => {
    return (
        <div className="nav">
            <div className="container">
                <div className="box">
                    <div className="logo">
                        <Image source={logo} alt="logo" />
                    </div>
                    <NavMenu />
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Navbar