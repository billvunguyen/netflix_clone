import React, { useEffect, useState } from 'react'
import './Nav.css'


function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);

    return (
        <div className ={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix Logo"
            />

            <img
            className="nav__avatar"
            src="https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/133292174_232929844929785_1478250380304892832_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=wQJW6EvlX6EAX9as4zq&tp=1&oh=94cdd200dd3377e10b380531f003f980&oe=601523D8"
            alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
