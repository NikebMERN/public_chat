import React from 'react'
import SignIn from './SignIn'

const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
return (
    <div>
    <nav className={style.nav}>
        <a href='https://chat-e3d99.web.app/' target='_self'><h1 className={style.heading}>Niko Chat</h1></a>
    <SignIn />
    </nav>
    </div>
)
}

export default Navbar