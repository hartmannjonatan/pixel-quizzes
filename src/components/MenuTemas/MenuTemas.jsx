import React, { useState } from 'react';
import './menu-style.css'

const MenuTemas = ({temas, search}) => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='container-menu'>
            <span onClick={() => {setOpenMenu(open => !open)}} className='font-button-medium color-dark text-center link link-nav'>Temas</span>
            {openMenu ? 
                <div className='menu'>
                    {temas.map(tema => (
                        <div onClick={() => {setOpenMenu(open => !open); search(tema)}} className='item-menu font-paragraph-large'>#{tema}</div>
                    ))}
                </div>
             : ''}
        </div>
    );
}

export default MenuTemas;
